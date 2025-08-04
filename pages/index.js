import React, { useState } from 'react';

const nameData = {
  Elven: [
    'Elarion', 'Faelivrin', 'Thalorien', 'Lúthien', 'Aerendil', 'Galather', 'Celebrian', 'Nimrodel',
    'Eledhwen', 'Laurelin', 'Calenhiril', 'Elensar', 'Anariel', 'Melwasúl', 'Tauriel', 'Althaea'
  ],
  Dwarven: [
    'Thorin', 'Balin', 'Dwalin', 'Fundin', 'Dís', 'Gimli', 'Náin', 'Durin', 'Thráin', 'Gróin',
    'Dori', 'Nori', 'Ori', 'Bofur', 'Bombur', 'Fíli'
  ],
  Orc: [
    'Gorbag', 'Shagrat', 'Uglúk', 'Snaga', 'Lugdush', 'Mauhúr', 'Ghash', 'Nazgûl', 'Bolg', 'Azog',
    'Zugthak', 'Krûg', 'Ghâshruk', 'Thok', 'Urûk', 'Skarr'
  ],
  Hobbit: [
    'Frodo', 'Samwise', 'Pippin', 'Merry', 'Bilbo', 'Rosie', 'Lobelia', 'Primula', 'Hamfast', 'Drogo',
    'Brandybuck', 'Took', 'Gamgee', 'Baggins', 'Chubb', 'Grubb'
  ],
  Wizard: [
    'Gandalf', 'Saruman', 'Radagast', 'Alatar', 'Pallando', 'Curumo', 'Olórin', 'Aiwendil', 'Mithrandir', 'Annatar',
    'Morinehtar', 'Rómestámo', 'Tharkûn', 'Khamûl', 'Aegnor', 'Mahtan'
  ]
};

const categories = Object.keys(nameData);

function getRandomNames(type = 'Elven', count = 10) {
  const pool = nameData[type] || [];
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function Home() {
  const [selectedType, setSelectedType] = useState('Elven');
  const [names, setNames] = useState(getRandomNames('Elven'));

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-4xl font-bold text-center mb-4">Fantasy Name Generator Hub</h1>
      <p className="text-center mb-6 text-lg max-w-2xl mx-auto">
        Generate character names from Tolkien-inspired fantasy races. Select a race and click to generate names. Great for D&D, writing, or gaming!
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {categories.map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded ${
              type === selectedType ? 'bg-blue-600 text-white' : 'border border-gray-300'
            }`}
            onClick={() => {
              setSelectedType(type);
              setNames(getRandomNames(type));
            }}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="flex justify-center mb-6">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => setNames(getRandomNames(selectedType))}
        >
          Generate {selectedType} Names
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {names.map((name, index) => (
          <div key={index} className="border p-4 text-center text-xl font-medium rounded shadow">
            {name}
          </div>
        ))}
      </div>

      <section className="mt-10 max-w-2xl mx-auto text-center text-sm text-gray-600">
        <p>
          This site is supported by ads and affiliate links. As an Amazon Associate, we earn from qualifying purchases — such as fantasy books, dice sets, and naming guides.
        </p>
        <p className="mt-2">
          Looking for more inspiration? Check out <a href="https://www.amazon.com/s?k=tolkien+books" target="_blank" className="underline text-blue-600">Tolkien books</a> and <a href="https://www.amazon.com/s?k=dnd+dice+set" target="_blank" className="underline text-blue-600">D&D dice sets</a> on Amazon.
        </p>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-500">
        MythicNames.com © {new Date().getFullYear()} — Fantasy Name Generators for Every Realm
      </footer>
    </div>
  );
}
