const blogs = [];

exports.create = async (req, res) => {
  const { title, content } = req.body;
  const newBlog = { id: blogs.length + 1, title, content };
  blogs.push(newBlog);
  res.status(201).json({ status: 'success', data: newBlog });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: 'success', data: blogs });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const index = blogs.findIndex((blog) => blog.id === parseInt(id));
  if (index !== -1) {
    blogs.splice(index, 1);
    res.status(204).json({ status: 'success', data: null });
  } else {
    res.status(404).json({ status: 'error', message: 'Blog not found' });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const index = blogs.findIndex((blog) => blog.id === parseInt(id));
  if (index !== -1) {
    blogs[index] = { ...blogs[index], title, content };
    res.status(200).json({ status: 'success', data: blogs[index] });
  } else {
    res.status(404).json({ status: 'error', message: 'Blog not found' });
  }
};
