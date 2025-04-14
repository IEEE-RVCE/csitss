import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Image links array - using only a subset of the original images
  const imgLinks = [
    '/gallery/image_1.webp',
    '/gallery/image_3.webp',
    '/gallery/image_5.webp',
    '/gallery/image_8.webp',
    '/gallery/image_10.webp',
    '/gallery/image_15.webp',
    '/gallery/image_18.webp',
    '/gallery/image_21.webp',
    '/gallery/image_24.webp',
  ];

  // Handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    setAutoplay(false);
  };

  // Handle modal open
  const handleModalOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage(imgLinks[currentIndex]);
  };

  // Handle navigation
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === imgLinks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imgLinks.length - 1 : prevIndex - 1
    );
  };

  // Extract image number from link
  const getImageNumber = (link: string) => {
    const match = link.match(/image_(\d+)\.webp/);
    return match ? match[1] : '';
  };

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, currentIndex]);

  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8" id="gallery">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Gallery
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
          Highlights from our previous conferences
        </p>
      </div>

      {/* Main Carousel */}
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Main Image Display */}
          <div className="aspect-w-16 aspect-h-9 md:aspect-h-7 lg:aspect-h-6 xl:h-[600px] bg-gray-200 rounded-xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-full">
              {imgLinks.map((link, index) => (
                <div
                  key={link}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={link}
                    alt={`Gallery image ${getImageNumber(link)}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                    <div 
                      className="absolute bottom-6 left-6 right-6 flex justify-between"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        className="bg-white/30 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/50 transition-colors"
                        onClick={handleModalOpen}
                      >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
                      <div className="px-6 py-3 bg-white/30 backdrop-blur-sm rounded-full text-white text-lg font-medium">
                        Image {parseInt(getImageNumber(link))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/70 text-gray-800 p-4 rounded-full shadow-lg hover:bg-white transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
              setAutoplay(false);
            }}
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/70 text-gray-800 p-4 rounded-full shadow-lg hover:bg-white transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
              setAutoplay(false);
            }}
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Thumbnails */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-4 overflow-x-auto p-3 max-w-full">
            {imgLinks.map((link, index) => (
              <button
                key={link}
                className={`relative flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-lg overflow-hidden transition-all duration-200 ${
                  index === currentIndex
                    ? 'ring-4 ring-blue-500 scale-105'
                    : 'opacity-70 hover:opacity-100'
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={link}
                  alt={`Thumbnail ${getImageNumber(link)}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <button
            className="inline-flex items-center px-8 py-4 text-lg border border-transparent rounded-lg shadow-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(imgLinks[currentIndex]);
            }}
          >
            View Full Gallery
            <svg className="ml-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal Gallery */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full w-[90vw] h-[90vh]">
            <img
              src={selectedImage}
              alt={`Selected gallery image ${getImageNumber(selectedImage)}`}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="absolute top-6 right-6 flex space-x-4">
              <button
                className="text-white bg-black/60 rounded-full p-4 hover:bg-black/80 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIdx = imgLinks.indexOf(selectedImage);
                  const prevIdx = currentIdx === 0 ? imgLinks.length - 1 : currentIdx - 1;
                  setSelectedImage(imgLinks[prevIdx]);
                }}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="text-white bg-black/60 rounded-full p-4 hover:bg-black/80 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIdx = imgLinks.indexOf(selectedImage);
                  const nextIdx = currentIdx === imgLinks.length - 1 ? 0 : currentIdx + 1;
                  setSelectedImage(imgLinks[nextIdx]);
                }}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                className="text-white bg-black/60 rounded-full p-4 hover:bg-black/80 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;