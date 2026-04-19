const { Post, User } = require('../models');

// CREATE POST
exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL POSTS
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: User
    });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ONE POST
exports.getPost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: User
    });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE POST
exports.updatePost = async (req, res) => {
  try {
    await Post.update(req.body, {
      where: { id: req.params.id }
    });

    const updatedPost = await Post.findByPk(req.params.id);
    res.json(updatedPost);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE POST
exports.deletePost = async (req, res) => {
  try {
    await Post.destroy({
      where: { id: req.params.id }
    });

    res.send('Deleted');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};