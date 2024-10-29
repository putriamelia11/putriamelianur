import React from 'react';

// Skill data
const skills = [
  "React",
  "HTML",
  "CSS",
  "Flutter",
  "UI/UX Design",
];

// Komponen untuk menampilkan daftar skill
export default function Skill() {
  return (
    <div className="container mx-auto p-2 text-center pt-20">
      <h2 className="text-black font-bold text-2xl mb-4">Skills</h2>
      <div className="container mx-auto">
        {skills.map((skill, index) => (
          <RowSkill 
            key={index} 
            skill={skill} 
          />
        ))}
      </div>
    </div>
  );
}

// Tipe data untuk skill
interface RowSkillProps {
  skill: string;
}

// Komponen untuk menampilkan setiap skill
function RowSkill(props: RowSkillProps) {
  return (
    <div className="border-2 border-indigo-400/75 rounded-lg bg-blue-300 p-2 my-2 max-w-xs mx-auto"> {/* Memperpendek bingkai */}
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 flex justify-center">
            {props.skill}
          </div>
        </div>
      </div>
    </div>
  );
}
