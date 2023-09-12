const products = [];

exports.create = async (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json({ status: 'success', data: newProduct });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: 'success', data: products });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((product) => product.id === parseInt(id));
  if (index !== -1) {
    products.splice(index, 1);
    res.status(204).json({ status: 'success', data: null });
  } else {
    res.status(404).json({ status: 'error', message: 'Product not found' });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const index = products.findIndex((product) => product.id === parseInt(id));
  if (index !== -1) {
    products[index] = { ...products[index], name, price };
    res.status(200).json({ status: 'success', data: products[index] });
  } else {
    res.status(404).json({ status: 'error', message: 'Product not found' });
  }
};
