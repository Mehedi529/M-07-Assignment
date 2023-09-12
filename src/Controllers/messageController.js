const messages = [];

exports.create = async (req, res) => {
  const { text } = req.body;
  const newMessage = { id: messages.length + 1, text };
  messages.push(newMessage);
  res.status(201).json({ status: 'success', data: newMessage });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: 'success', data: messages });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const index = messages.findIndex((message) => message.id === parseInt(id));
  if (index !== -1) {
    messages.splice(index, 1);
    res.status(204).json({ status: 'success', data: null });
  } else {
    res.status(404).json({ status: 'error', message: 'Message not found' });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const index = messages.findIndex((message) => message.id === parseInt(id));
  if (index !== -1) {
    messages[index] = { ...messages[index], text };
    res.status(200).json({ status: 'success', data: messages[index] });
  } else {
    res.status(404).json({ status: 'error', message: 'Message not found' });
  }
};
