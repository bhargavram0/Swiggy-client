import React, { useState } from 'react';
import  Navbar  from './Navbar';

const faqs = [
  {
    question: "How can I cancel my order?",
    answer: "Go to your orders, click on the order you want to cancel, and tap the 'Cancel Order' button."
  },
  {
    question: "How do I get a refund?",
    answer: "Refunds are processed automatically for canceled or failed orders. It may take 5-7 business days."
  },
  {
    question: "Where is my order?",
    answer: "You can track your order live by going to the orders page and selecting the current order."
  },
  {
    question: "How do I change my delivery address?",
    answer: "Before placing the order, go to your profile and update your address details under 'Saved Addresses'."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can contact our support team via the in-app Help section or call our helpline number available in the app."
  },
  {
    question: "Can I schedule an order for later?",
    answer: "Yes, during checkout, select 'Schedule for later' and pick your preferred date and time."
  },
  {
    question: "My food arrived cold or damaged. What should I do?",
    answer: "We’re sorry! Please raise a complaint via the Help section within 30 minutes of delivery."
  },
  {
    question: "How do I use a promo code?",
    answer: "Apply the promo code at checkout. If valid, the discount will be applied to your order total."
  },
  {
    question: "How do I delete my Swiggy account?",
    answer: "Go to Profile > Account Settings > Delete Account. You will be asked to confirm before it’s removed."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept UPI, debit/credit cards, net banking, and cash on delivery (in selected locations)."
  },
];

const HelpPage = () => {
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="help-container">
        <Navbar/>
      <h1 className="help-title">Help & Support</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search for help..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="faq-list">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleAnswer(index)}
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="no-results">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default HelpPage;
