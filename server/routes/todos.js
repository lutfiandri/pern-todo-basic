const express = require('express');
const pool = require('../db');

/**
 * TODO ROUTES
 * 1. get    '/'          -> get all todos
 * 2. get    '/:id'       -> get single todo
 * 3. post   '/'          -> add a todo
 * 4. put    '/:id'       -> update a todo
 * 5. put    '/:id/status -> toggle status
 * 6. delete '/:id'       -> delete a todo
 */

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const todos = await pool.query(`SELECT * FROM todos ORDER BY id DESC`);
    res.json(todos.rows);
  } catch (err) {
    res.json({
      error: {
        message: err.message,
      },
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query(`SELECT * FROM todos WHERE id = $1`, [id]);
    if (todo.rowCount === 0) {
      res.status(404).json({
        error: {
          message: `There's no todo with id ${id}`,
        },
      });
    } else {
      res.json(todo.rows[0]);
    }
  } catch (err) {
    res.status(400).json({
      error: {
        message: err.message,
      },
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodo = await pool.query(
      `
      INSERT INTO todos (title, description, status)
      VALUES ($1, $2, $3)
    `,
      [title, description, 'active']
    );
    if (newTodo.rowCount === 0) {
      res.status(400).json({
        error: {
          status: 400,
          message: 'failed to insert',
        },
      });
    } else {
      res.json({
        message: 'new todo inserted',
      });
    }
  } catch (err) {
    res.status(400).json({
      error: {
        message: err.message,
      },
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = await pool.query(
      `
      UPDATE todos
      SET
        title = $1,
        description = $2
      WHERE id = $3
    `,
      [title, description, id]
    );
    if (todo.rowCount === 0) {
      res.status(404).json({
        error: {
          message: `there's no todo with id ${id}`,
        },
      });
    } else {
      res.json({
        message: 'todo updated',
      });
    }
  } catch (err) {
    res.status(400).json({
      error: {
        message: err.message,
      },
    });
  }
});

router.put('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const todo = await pool.query(
      `
      UPDATE todos
      SET status = $1
      WHERE id = $2
    `,
      [status, id]
    );
    if (todo.rowCount === 0) {
      res.status(404).json({
        error: {
          message: `there's no todo with id ${id}`,
        },
      });
    } else {
      res.json({
        message: `todo updated.. id: ${id}, status: ${status}`,
      });
    }
  } catch (err) {
    res.status(400).json({
      error: {
        message: err.message,
      },
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query(
      `
      DELETE FROM todos
      WHERE id = $1
    `,
      [id]
    );
    if (todo.rowCount === 0) {
      res.status(404).json({
        error: {
          status: 404,
          message: `there's no todo with id ${id}`,
        },
      });
    } else {
      res.json({
        message: 'todo deleted',
      });
    }
  } catch (err) {
    res.status(400).json({
      error: {
        message: err.message,
      },
    });
  }
});

module.exports = router;
