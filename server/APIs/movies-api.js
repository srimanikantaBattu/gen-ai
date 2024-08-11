// moviesApi.js
const exp = require('express');
const router = exp.Router();

router.post('/movies', async (req, res) => {
    try {
        const data = req.body;
        console.log(data);

        if (!data || Object.keys(data).length === 0) {
            return res.status(400).send({ message: "Invalid data submitted" });
        }

        const moviesObj = req.app.get('moviesObj');
        
        const result = await moviesObj.insertOne(data);
        console.log("Hello")
        res.send(result);
    } catch (error) {
        console.error('Error inserting movie:', error);
        res.status(500).send({ message: "Error inserting movie", error: error.message });
    }
});

// moviesApi.js
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

module.exports = router;