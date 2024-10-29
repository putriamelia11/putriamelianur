import React from 'react';

// Objek Hobi
const hobbies = [
  { id: 1, name: "Menonton Film", image: '/hobby1.jpeg' },
  { id: 2, name: "Membersihkan Rumah", image: '/hobby2.jpeg' },
  { id: 3, name: "Motoran", image: '/hobby3.jpeg' },
  { id: 4, name: "Makan", image: '/hobby4.jpeg' },
];

export default function MyGallery() {
  return (
    <div className="container mx-auto p-2 text-center pt-20">
      <h2 className="text-black font-bold text-2xl mb-4">My Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {hobbies.map(hobby => (
          <div key={hobby.id} className="border-2 border-indigo-400/75 rounded-lg bg-blue-300 p-4">
            <img src={hobby.image} alt={hobby.name} className="fotoku" />
            <h3 className="text-lg font-semibold">{hobby.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
