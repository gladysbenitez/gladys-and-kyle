import React, { useState, useEffect, useRef } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import "./GalleryPage.css";
import images from "./data/galleryImages"; // Your images

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const gridRef = useRef(null);
  const masonryInstance = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const imgLoad = imagesLoaded(grid, () => {
      masonryInstance.current = new Masonry(grid, {
        itemSelector: ".gallery-item",
        columnWidth: ".gallery-sizer", // Defines how wide each column is
        percentPosition: true, // Makes images scale properly
        gutter: 15, // Spacing between images
        fitWidth: true, // Keeps grid centered
      });
    });

    return () => {
      imgLoad.off("progress");
      if (masonryInstance.current) {
        masonryInstance.current.destroy();
      }
    };
  }, []);

  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(images[currentIndex - 1]);
    }
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(images[currentIndex + 1]);
    }
  };

  return (
    <div className="gallery-container">
      {/* Feature image for smooth scroll */}
      <div
        className="feature-image"
        onClick={() =>
          window.scrollTo({
            top: document.querySelector(".gallery-grid").offsetTop,
            behavior: "smooth",
          })
        }
      >
        <img src="/images/engagement/Gladys-Kyle-Aspen-Winter-Proposal-Photography-by-Jacie-Marguerite-9.jpg" alt="Featured" />
      </div>

      {/* Masonry Grid */}
      <div className="gallery-grid" ref={gridRef}>
        <div className="gallery-sizer"></div> {/* Invisible sizer for consistent columns */}
        {images.map((src, index) => (
          <div className="gallery-item" key={index} onClick={() => openModal(index)}>
            <img src={src} alt={`Gallery item ${index}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeModal}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-modal">
              <button className="close-button" onClick={closeModal}>
                ×
              </button>
              {currentIndex > 0 && (
                <button className="prev-button" onClick={prevImage}>
                  ‹
                </button>
              )}
              <img src={selectedImage} alt="Enlarged view" className="lightbox-img" />
              {currentIndex < images.length - 1 && (
                <button className="next-button" onClick={nextImage}>
                  ›
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
