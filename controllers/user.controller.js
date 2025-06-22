const db = require("../models");
const User = db.users;

// Create and Save a new User
exports.create = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email
    });
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Get all users
exports.findAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
