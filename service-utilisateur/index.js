const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/inscription', (req, res) => {
    // Logique d'inscription
    res.send('Utilisateur inscrit');
});

app.listen(PORT, () => {
    console.log(`Service Utilisateur écoutant sur le port ${PORT}`);
});
