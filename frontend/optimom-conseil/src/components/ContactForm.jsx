import { useState } from 'react';
import axios from 'axios';
import './ContactForm.scss';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [statusColor, setStatusColor] = useState('green');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      // Remplace cette URL par l'endpoint réel de ton backend
      await axios.post('http://localhost:3000/api/contact', formData);

      setStatus('Message envoyé avec succès !');
      setStatusColor('green');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus("Erreur lors de l'envoi. Veuillez réessayer.");
      setStatusColor('red');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-form">
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom :
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email :
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message :
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Envoi en cours...' : 'Envoyer'}
        </button>
      </form>

      {status && <p style={{ color: statusColor }}>{status}</p>}
    </div>
  );
}

export default ContactForm;
