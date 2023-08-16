const db = require("./database");
const customerController = {
  getAll: async (req, res) => {
    try {
      const { rows } = await db.query("SELECT * FROM customers");
      // console.log(rows);
      res.json(rows);
    } catch (error) {
      res.json(error);
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const { rows } = await db.query("SELECT * FROM customers WHERE id = $1", [
        id,
      ]);
      res.json(rows[0]);
    } catch (error) {
      res.json(error);
    }
  },
  create: async (req, res) => {
    try {
      console.log(req.body);
      const { name, email, phone, address } = req.body;
      const { rows } = await db.query(
        "INSERT INTO customers (name, email, phone, address) VALUES ($1, $2, $3, $4) RETURNING *",
        [name, email, phone, address]
      );
      console.log("success");
      res.json(rows[0]);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, phone, address } = req.body;
      const { rows } = await db.query(
        "UPDATE customers SET name = $1, email = $2, phone = $3, address = $4 WHERE id = $5 RETURNING *",
        [name, email, phone, address, id]
      );
      res.json(rows[0]);
    } catch (error) {
      res.json(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const { rows } = await db.query("DELETE FROM customers WHERE id = $1", [
        id,
      ]);
      res.json("Deleted");
    } catch (error) {
      res.json(error);
    }
  },
};

module.exports = customerController;
