// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Backend Optimom Conseil fonctionne ! 🚀');
});

app.listen(PORT, () => {
  console.log(`Serveur backend en ligne sur http://localhost:${PORT}`);
});
