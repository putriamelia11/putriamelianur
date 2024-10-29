"use client";

import { useState } from "react";

interface FavColorProps {
    setWarna: (warna: string) => void; // Tipe untuk setWarna
}

export default function FavColor({ setWarna }: FavColorProps) {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
      <h2 className="text-blue font-bold text-2xl mb-4">Change Theme</h2>

            <button
                className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setWarna("Dark")}
            >
                Dark
            </button>

            <button
                className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded"
                onClick={() => setWarna("Light")}
            >
                Light
            </button>

            <button
                className="bg-pink-500 hover:bg-pink-700 text-black font-bold py-2 px-4 rounded"
                onClick={() => setWarna("Pink")}
            >
                Pink
            </button>
        </div>
    );
}
