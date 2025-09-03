const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/commande', (req, res) => {
    // Logique de création de commande
    res.send('Commande créée');
});

app.listen(PORT, () => {
    console.log(`Service Commande écoutant sur le port ${PORT}`);
});
