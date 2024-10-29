"use client";

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    rating: 0, // Menyimpan rating
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ratings, setRatings] = useState<number[]>([]); // Menyimpan semua rating

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleStarClick = (starIndex: number) => {
    setFormData(prevData => ({
      ...prevData,
      rating: starIndex + 1 // Update rating ke index + 1
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Menyimpan rating ke dalam array ratings
    setRatings(prevRatings => [...prevRatings, formData.rating]);
  };

  const handleClear = () => {
    setFormData({
      name: '',
      message: '',
      rating: 0,
    });
  };

  // Hitung rata-rata rating
  const averageRating = ratings.length > 0 
    ? (ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length).toFixed(1) 
    : 0;

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh' // membuat konten berada di tengah secara vertikal dan horizontal
    }}>
      {isSubmitted ? (
        <div style={{ color: 'blue' }}> {/* warna teks hitam */}
          <h2>Nama: {formData.name}</h2>
          <p>Komentar: {formData.message}</p>
          <p>Rating: {formData.rating} bintang</p>
          <p>Komentar berhasil terkirim. Terimakasih!</p>
          <p>Rata-rata Rating: {averageRating} bintang</p>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}> {/* Memusatkan konten */}
          <h2 className="text-black font-bold text-2xl mb-4">Contact Form</h2> {/* Judul di luar form */}
          <form 
            onSubmit={handleSubmit} 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px', // jarak antar elemen form
              width: '300px', // lebar form
              padding: '20px', // padding dalam form
              border: '1px solid #ccc', // border form
              borderRadius: '8px', // radius sudut
              backgroundColor: '#ADD8E6' // warna background form
            }}
          >
            <div>
              <label htmlFor="name">Nama:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </div>

            <div>
              <label htmlFor="message">Komentar:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </div>

            <div>
              <label>Rating:</label>
              <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
                {[...Array(5)].map((_, index) => (
                  <span 
                    key={index} 
                    onClick={() => handleStarClick(index)} 
                    style={{
                      cursor: 'pointer',
                      fontSize: '24px',
                      color: index < formData.rating ? 'gold' : 'white',
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
              <button type="button" onClick={handleClear} style={{ padding: '10px 20px' }}>Clear</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
