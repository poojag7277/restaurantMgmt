import React, { useEffect, useState } from 'react';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch(`${process.env.REACT_APP_API_URL}/restaurant`) // API URL from .env
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to fetch data only once when component mounts

  return (
    <div>
    <h2>Restaurant Menu</h2>
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant._id}>{restaurant.name}</li>
      ))}
    </ul>
  </div>
  );
};

export default Menu;

// const Menu = () => {
//   const dishes = [
//     { name: "Spaghetti Carbonara", price: "$12.99", description: "Classic Italian pasta dish." },
//     { name: "Margherita Pizza", price: "$10.99", description: "Fresh tomato sauce and mozzarella." },
//     { name: "Caesar Salad", price: "$8.99", description: "Crispy romaine with Caesar dressing." },
//     { name: "Grilled Salmon", price: "$15.99", description: "Served with roasted vegetables." },
//   ];

//   return (
//     <section id="menu" style={styles.menu}>
//       <h2>Our Menu</h2>
//       <div style={styles.dishContainer}>
//         {dishes.map((dish, index) => (
//           <div key={index} style={styles.dishCard}>
//             <h3>{dish.name}</h3>
//             <p>{dish.description}</p>
//             <p style={styles.price}>{dish.price}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   menu: {
//     padding: "20px",
//     backgroundColor: "#fff8e1",
//     textAlign: "center",
//   },
//   dishContainer: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//     flexWrap: "wrap",
//   },
//   dishCard: {
//     backgroundColor: "#ffffff",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     padding: "10px",
//     width: "200px",
//   },
//   price: {
//     fontWeight: "bold",
//     color: "#ff5733",
//   },
// };

// export default Menu;
