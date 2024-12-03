import React from "react";

const FAQ = () => {
  const faqs = [
    { question: "Do you offer vegan options?", answer: "Yes, we have a variety of vegan-friendly dishes on our menu." },
    { question: "Can I book a private event?", answer: "Absolutely! Contact us for private event reservations." },
    { question: "Do you offer delivery?", answer: "Yes, we provide delivery through our website and popular apps." },
  ];

  return (
    <section id="faq" style={styles.section}>
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} style={styles.faq}>
          <h4>{faq.question}</h4>
          <p>{faq.answer}</p>
        </div>
      ))}
    </section>
  );
};

const styles = {
  section: {
    padding: "20px",
    backgroundColor: "#e3f2fd",
    textAlign: "center",
  },
  faq: {
    marginBottom: "15px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "10px",
  },
};

export default FAQ;
