import React from "react";

const Gallery = () => {
  const images = [
    "/images/interior1.jpg",
    "/images/interior2.jpg",
    "/images/food1.jpg",
    "/images/food2.jpg",
    "/images/event.jpg",
  ];

  return (
    <section id="gallery" style={styles.gallery}>
      <h2>Gallery</h2>
      <div style={styles.imageGrid}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery Image ${index + 1}`} style={styles.image} />
        ))}
      </div>
    </section>
  );
};

const styles = {
  gallery: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#fff8e1",
  },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "10px",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export default Gallery;
