const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/paiement', (req, res) => {
    // Logique de traitement de paiement
    res.send('Paiement effectué');
});

app.listen(PORT, () => {
    console.log(`Service Paiement écoutant sur le port ${PORT}`);
});
