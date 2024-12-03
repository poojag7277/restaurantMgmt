import React from "react";

const Reviews = () => {
  const reviews = [
    { name: "John Doe", comment: "Amazing food and service!" },
    { name: "Jane Smith", comment: "Loved the ambiance." },
    { name: "Michael Brown", comment: "Best restaurant in town!" },
  ];

  return (
    <section id="reviews" style={styles.reviews}>
      <h2>Customer Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} style={styles.review}>
          <h4>{review.name}</h4>
          <p>"{review.comment}"</p>
        </div>
      ))}
    </section>
  );
};

const styles = {
  reviews: {
    padding: "20px",
    backgroundColor: "#fff3e0",
    textAlign: "center",
  },
  review: {
    marginBottom: "15px",
    borderBottom: "1px solid #ccc",
    paddingBottom: "10px",
  },
};

export default Reviews;
