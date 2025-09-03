const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/produits', (req, res) => {
    // Retourner la liste des produits
    res.send('Liste des produits');
});

app.listen(PORT, () => {
    console.log(`Service Produit écoutant sur le port ${PORT}`);
});
