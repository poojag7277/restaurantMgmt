import React from "react";

const FeaturedDishes = () => {
  const featuredDishes = [
    { name: "Lobster Bisque", description: "A creamy and delicious lobster soup.", image: "/images/lobster.jpg" },
    { name: "Steak Diane", description: "Juicy steak with a creamy sauce.", image: "/images/steak.jpg" },
    { name: "Chocolate Lava Cake", description: "Rich chocolate dessert with a molten center.", image: "/images/lava-cake.jpg" },
  ];

  return (
    <section id="featured" style={styles.section}>
      <h2>Featured Dishes</h2>
      <div style={styles.dishes}>
        {featuredDishes.map((dish, index) => (
          <div key={index} style={styles.card}>
            <img src={dish.image} alt={dish.name} style={styles.image} />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "20px",
    backgroundColor: "#fff8e1",
    textAlign: "center",
  },
  dishes: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    width: "200px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
};

export default FeaturedDishes;
