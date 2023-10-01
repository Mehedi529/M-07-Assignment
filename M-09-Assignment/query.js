const mongoose = require('mongoose');


const YourSchema = new mongoose.Schema({

});

const YourModel = mongoose.model('YourModel', YourSchema);

// Create a new collection
async function createCollection(collectionName) {
  try {
    const db = mongoose.connection;
    await db.createCollection(collectionName);
    console.log(`Collection "${collectionName}" created successfully.`);
  } catch (error) {
    console.error(`Error creating collection "${collectionName}":`, error);
  }
}

// Removes a collection from the database
async function removeCollection(collectionName) {
  try {
    const db = mongoose.connection;
    await db.dropCollection(collectionName);
    console.log(`Collection "${collectionName}" removed successfully.`);
  } catch (error) {
    console.error(`Error removing collection "${collectionName}":`, error);
  }
}

// Inserts a single document into a collection
async function insertDocument(data) {
  try {
    const newDocument = new YourModel(data);
    await newDocument.save();
    console.log('Document inserted successfully.');
  } catch (error) {
    console.error('Error inserting document:', error);
  }
}

// Delete/remove a single document from the collection by its ID
async function deleteDocumentById(documentId) {
  try {
    await YourModel.findByIdAndRemove(documentId);
    console.log(`Document with ID ${documentId} removed successfully.`);
  } catch (error) {
    console.error(`Error removing document with ID ${documentId}:`, error);
  }
}

module.exports = {
  createCollection,
  removeCollection,
  insertDocument,
  deleteDocumentById,
};
