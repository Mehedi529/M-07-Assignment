exports.create = async (req, res) => {
    try {
      // Logic to create a sub-admin
      // Example: const newSubAdmin = await SubAdmin.create(req.body);
      res.status(201).json({ status: 'success', data: 'Sub-admin created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
  };
  
  // Implement read, update, and delete functions similarly
  