// index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Route d'envoi du formulaire
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  // Configurer le transporteur Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // depuis le fichier .env
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // tu reçois le mail à la même adresse
    subject: `📩 Nouveau message de ${name}`,
    text: `Email : ${email}\n\nMessage :\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message envoyé avec succès ✅' });
  } catch (error) {
    console.error('Erreur lors de l’envoi :', error);
    res.status(500).json({ error: 'Une erreur est survenue.' });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`✅ Backend en ligne : http://localhost:${PORT}`);
});
