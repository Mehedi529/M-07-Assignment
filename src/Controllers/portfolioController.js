const portfolios = [];

exports.create = async (req, res) => {
  const { title, description } = req.body;
  const newPortfolio = { id: portfolios.length + 1, title, description };
  portfolios.push(newPortfolio);
  res.status(201).json({ status: 'success', data: newPortfolio });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: 'success', data: portfolios });
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const index = portfolios.findIndex((portfolio) => portfolio.id === parseInt(id));
  if (index !== -1) {
    portfolios.splice(index, 1);
    res.status(204).json({ status: 'success', data: null });
  } else {
    res.status(404).json({ status: 'error', message: 'Portfolio not found' });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const index = portfolios.findIndex((portfolio) => portfolio.id === parseInt(id));
  if (index !== -1) {
    portfolios[index] = { ...portfolios[index], title, description };
    res.status(200).json({ status: 'success', data: portfolios[index] });
  } else {
    res.status(404).json({ status: 'error', message: 'Portfolio not found' });
  }
};
