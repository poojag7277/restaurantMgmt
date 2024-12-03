import React from "react";

const MeetTheChef = () => {
  return (
    <section id="chef" style={styles.section}>
      <h2>Meet Our Chef</h2>
      <div style={styles.card}>
        <img src="/images/chef.jpg" alt="Chef" style={styles.image} />
        <h3>Chef John Doe</h3>
        <p>
          With over 15 years of experience, Chef John brings passion and artistry to every dish. His culinary journey includes working at some of the world's top restaurants.
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "20px",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
  },
  card: {
    maxWidth: "400px",
    margin: "0 auto",
    textAlign: "center",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
  },
};

export default MeetTheChef;
