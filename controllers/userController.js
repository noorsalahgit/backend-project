const { User, Post } = require('../models');

// CREATE USER
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL USERS
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET USER BY ID
exports.getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE USER
exports.updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: { id: req.params.id }
    });

    const updatedUser = await User.findByPk(req.params.id);
    res.json(updatedUser);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE USER
exports.deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: { id: req.params.id }
    });

    res.send('Deleted');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET USER POSTS
exports.getUserPosts = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: Post
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user.Posts || user.posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};