const connection = require('../config/database');

class Saving {
  static async all(user_id) {
    const savings = await connection.promise().query(
      'SELECT * FROM saving_plans WHERE user_id = ? AND deleted_at IS NULL',
      [user_id],
    );
    return savings[0];
  }

  static async get(id) {
    const saving = await connection.promise().query(
      'SELECT * FROM saving_plans WHERE id = ? AND deleted_at IS NULL',
      [id],
    ).catch((err) => console.log(err));
    return saving[0][0];
  }

  static async create({
    user_id, name, description, goal_amount, due_date, type,
  }) {
    const saving = await connection.promise().query(
      'INSERT INTO saving_plans (user_id, name, description, goal_amount, due_date, type) VALUES (?, ?, ?, ?, ?, ?)',
      [user_id, name, description, goal_amount, due_date, type],
    );
    return saving[0];
  }

  static async update({
    id, user_id, name, description, goal_amount, due_date, type,
  }) {
    const saving = await connection.promise().query(
      'UPDATE saving_plans SET user_id = ?, name = ?, description = ?, goal_amount = ?, due_date = ?, type = ? WHERE id = ?',
      [user_id, name, description, goal_amount, due_date, type, id],
    );
    return saving[0];
  }

  static async delete(id) {
    const saving = await connection.promise().query(
      'DELETE FROM saving_plans WHERE id = ?',
      [id],
    );
    return saving[0];
  }

  static async softDelete(id) {
    const saving = await connection.promise().query(
      'UPDATE saving_plans SET deleted_at = NOW() WHERE id = ?',
      [id],
    ).catch((err) => console.log(err));
    return saving[0];
  }
}

module.exports = Saving;
