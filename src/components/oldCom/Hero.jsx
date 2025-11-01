import React from 'react';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
      <h1 className="text-5xl font-bold mb-4">مرحبا، أنا [اسمك]</h1>
      <p className="text-xl mb-6">متعلم تطوير التطبيقات | Frontend & Backend</p>
      <a href="#projects" className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-200">
        شاهد مشاريعي
      </a>
    </section>
  );
}
