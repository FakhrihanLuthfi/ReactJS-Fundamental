import { useState } from 'react';
import PropTypes from 'prop-types';

// Komponen Contact
const Contact = ({ initialMessage, contactName }) => {
  // State untuk menyimpan pesan
  const [message, setMessage] = useState(initialMessage);

  // Fungsi untuk mengubah pesan
  const handleChangeMessage = () => {
    setMessage('Pesan baru telah ditetapkan!');
  };

  return (
    <div>
      <h1>Ini adalah halaman Kontak</h1>
      <p>Nama Kontak: {contactName}</p>
      <p>Pesan saat ini: {message}</p>
      <button onClick={handleChangeMessage}>Ubah Pesan</button>
    </div>
  );
};

// Validasi Props
Contact.propTypes = {
  initialMessage: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
};

export default Contact;
