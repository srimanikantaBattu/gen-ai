const exp = require('express');
const router = exp.Router();
const { ObjectId } = require('mongodb');
const expressAsyncHandler = require('express-async-handler');

require('dotenv').config();

let moviesCollection;

// Middleware to get the movies collection
router.use((req, res, next) => {
  moviesCollection = req.app.get('moviesObj');
  next();
});

// Route to add a new movie
router.post('/movies', expressAsyncHandler(async (req, res) => {
  const data = req.body;
  console.log('Movie data received:', data);

  if (!data || Object.keys(data).length === 0) {
    return res.status(400).send({ message: "Invalid data submitted" });
  }

  try {
    const result = await moviesCollection.insertOne(data);
    res.status(201).send({ message: "Movie added successfully", result });
  } catch (error) {
    console.error('Error inserting movie:', error);
    res.status(500).send({ message: "Error inserting movie", error: error.message });
  }
}));

router.get('/movies', async (req, res) => {
  try {
      const moviesObj = req.app.get('moviesObj');
      const movies = await moviesObj.find().toArray();  // Fetch all movies from the collection

      res.send(movies);
  } catch (error) {
      console.error('Error fetching movies:', error);
      res.status(500).send({ message: "Error fetching movies", error: error.message });
  }
});


router.get('/movies/:id', async (req, res) => {
  try {
      const movieId = req.params.id;
      const moviesObj = req.app.get('moviesObj');
      const movie = await moviesObj.findOne({ _id: ObjectId(movieId) });

      if (!movie) {
          return res.status(404).send({ message: "Movie not found" });
      }

      res.send(movie);
  } catch (error) {
      console.error('Error fetching movie:', error);
      res.status(500).send({ message: "Error fetching movie", error: error.message });
    }
});

// Route to add a theatre to a movie
router.put('/addtheatre/:id', expressAsyncHandler(async (req, res) => {
  const theatreData = req.body; // Data to add to the theatre array
  const id = req.params.id; // Movie ID
  console.log("Adding theatre to movie:", theatreData);

  try {
    const objectId = new ObjectId(id);

    // Update the movie document by adding a new theatre to the array
    const result = await moviesCollection.updateOne(
      { _id: objectId },
      { $push: { theatre: theatreData } } // Ensure field name matches your schema
    );

    console.log('Update result:', result);

    if (result.modifiedCount === 0) {
      return res.status(404).send({ message: "Movie not found or no update performed" });
    }

    res.send({ message: "Theatre added successfully" });
  } catch (error) {
    console.error('Error updating movie:', error);
    res.status(400).send({ message: "Invalid movie ID or other error occurred" });
  }


}));

module.exports = router;