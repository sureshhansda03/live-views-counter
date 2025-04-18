// ✅ Vercel-Ready Next.js (App Router) Project with Live Views Counter (Dummy)

// File: app/page.tsx
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<{ channel: string; views: number }[]>([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('/data.json')
        .then((res) => res.json())
        .then((json) => setData(json));
    };
    fetchData();
    const interval = setInterval(fetchData, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Live Channel Views Counter</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-4 shadow-lg text-center"
          >
            <h2 className="text-xl font-semibold">{item.channel}</h2>
            <p className="text-2xl mt-2">{item.views.toLocaleString()} views</p>
          </div>
        ))}
      </div>
    </main>
  );
}

// File: public/data.json (Dummy Data for Testing)
// Paste this manually in the public folder of your project
/*
[
  { "channel": "Santali TV", "views": 1267890 },
  { "channel": "Adivasi Beats", "views": 845670 },
  { "channel": "Tribal Vibes", "views": 309456 }
]
*/

// File: tailwind.config.ts (basic Tailwind setup)
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// File: app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;
