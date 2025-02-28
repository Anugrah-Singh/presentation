// App.jsx
import React, { useState } from 'react';
import SlideContent from './components/SlideContent';
import { slides } from './data/slides';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      goToNextSlide();
    } else if (e.key === 'ArrowLeft') {
      goToPrevSlide();
    }
  };

  return (
    <div 
      className="bg-gray-900 text-white min-h-screen flex flex-col" 
      tabIndex={0} 
      onKeyDown={handleKeyDown}
      autoFocus
    >
      <header className="bg-black p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-400">Matrix Multiplication: A Journey Into Computational Despair</h1>
        <div className="text-sm">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <div className="max-w-5xl w-full bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
          <SlideContent slide={slides[currentSlide]} />
        </div>
      </main>
      
      <footer className="bg-black p-4 flex justify-between">
        <button 
          onClick={goToPrevSlide} 
          disabled={currentSlide === 0}
          className="px-4 py-2 bg-purple-700 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button 
          onClick={goToNextSlide} 
          disabled={currentSlide === slides.length - 1}
          className="px-4 py-2 bg-purple-700 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </footer>
    </div>
  );
}

export default App;