"use client";

import { useState } from "react";
import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import RiwayatPekerjaan from "./components/riwayatpekerjaan";
import Skill from "./components/skill";
import Info from "./components/myinfo";
import Hobbies from "./components/hobbies";
import FormKontak from "./components/contactform";
import FavColor from "./components/favColor";
import "./putri-style.css";

export default function MyApp() {
    const [warna, setWarna] = useState("Light");

    return (
        <section className={`min-h-screen p-4 ${warna === "Dark" ? "bg-black text-black" : warna === "Light" ? "bg-white text-black" : "bg-pink-500 text-black"}`}>
            <Hero />
            <RiwayatPendidikan />
            <RiwayatPekerjaan />
            <Skill />
            <Info />
            <Hobbies />
            <FormKontak />
            <FavColor setWarna={setWarna} />
        </section>
    );
}
