const comments = [];

exports.create = async (req, res) => {
  const { text } = req.body;
  const newComment = { id: comments.length + 1, text };
  comments.push(newComment);
  res.status(201).json({ status: 'success', data: newComment });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: 'success', data: comments });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  if (index !== -1) {
    comments.splice(index, 1);
    res.status(204).json({ status: 'success', data: null });
  } else {
    res.status(404).json({ status: 'error', message: 'Comment not found' });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  if (index !== -1) {
    comments[index] = { ...comments[index], text };
    res.status(200).json({ status: 'success', data: comments[index] });
  } else {
    res.status(404).json({ status: 'error', message: 'Comment not found' });
  }
};
