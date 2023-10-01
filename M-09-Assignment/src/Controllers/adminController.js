exports.create = async (req, res) => {
    try {
      // Logic to create an admin
      // Example: const newAdmin = await Admin.create(req.body);
      res.status(201).json({ status: 'success', data: 'Admin created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
  };
  
  // Implement read, update, and delete functions similarly
  