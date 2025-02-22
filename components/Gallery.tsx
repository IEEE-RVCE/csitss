import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Image links array
  const imgLinks = [
    '/gallery/image_1.webp',
    '/gallery/image_2.webp',
    '/gallery/image_3.webp',
    '/gallery/image_4.webp',
    '/gallery/image_5.webp',
    '/gallery/image_6.webp',
    '/gallery/image_7.webp',
    '/gallery/image_8.webp',
    '/gallery/image_9.webp',
    '/gallery/image_10.webp',
    '/gallery/image_11.webp',
    '/gallery/image_12.webp',
    '/gallery/image_13.webp',
    '/gallery/image_14.webp',
    '/gallery/image_15.webp',
    '/gallery/image_16.webp',
    '/gallery/image_17.webp',
    '/gallery/image_18.webp',
    '/gallery/image_19.webp',
    '/gallery/image_20.webp',
    '/gallery/image_21.webp',
    '/gallery/image_22.webp',
    '/gallery/image_23.webp',
    '/gallery/image_24.webp',
    '/gallery/image_25.webp',
    '/gallery/image_26.webp',
    '/gallery/image_27.webp'
  ];

  // Organize images into columns for masonry layout
  const columns = [
    imgLinks.slice(0, Math.ceil(imgLinks.length / 3)),
    imgLinks.slice(Math.ceil(imgLinks.length / 3), Math.ceil(imgLinks.length / 3) * 2),
    imgLinks.slice(Math.ceil(imgLinks.length / 3) * 2)
  ];

  const handleImageClick = (link: string | React.SetStateAction<null>) => {
    if (typeof link === 'string') {
      setSelectedImage(link);
    }
  };

  // Extract image number from link
  const getImageNumber = (link: string) => {
    const match = link.match(/image_(\d+)\.webp/);
    return match ? match[1] : '';
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
        <div className="h-1 w-20 bg-blue-500"></div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="space-y-8">
              {column.map((link, imgIndex) => (
                <div
                  key={link}
                  className={`
                    relative group overflow-hidden rounded-lg shadow-lg
                    transform transition-all duration-300 hover:scale-[1.02]
                    ${imgIndex % 2 === 0 ? 'translate-y-0' : 'translate-y-12'}
                  `}
                  onClick={() => handleImageClick(link)}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={link}
                      alt={`Gallery image ${getImageNumber(link)}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="
                    absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  ">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm">
                        Image {getImageNumber(link)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full">
            <img
              src={selectedImage}
              alt={`Selected gallery image ${getImageNumber(selectedImage)}`}
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2
                hover:bg-black/75 transition-colors duration-200"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;