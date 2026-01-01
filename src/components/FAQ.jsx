import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    q: "How does vehicle booking work on TravelEase?",
    a: "Users can browse available vehicles, view detailed information, and request bookings. Once approved by the owner, the vehicle becomes reserved for the selected dates."
  },
  {
    q: "Can I list and manage my own vehicles?",
    a: "Yes. Registered users can add vehicles, update details, manage availability, and track bookings through their dashboard."
  },
  {
    q: "Is authentication required to book a vehicle?",
    a: "Yes. To ensure security and trust, users must be logged in to book vehicles or access booking details."
  },
  {
    q: "Is TravelEase mobile-friendly?",
    a: "Absolutely. TravelEase is fully responsive and optimized for mobile, tablet, and desktop devices."
  },
  {
    q: "What makes TravelEase different from other platforms?",
    a: "TravelEase focuses on simplicity, clean UI, secure authentication, and a smooth booking experience with modern web technologies."
  }
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="relative py-20 bg-gray-100 overflow-hidden">
      <div className="absolute -top-40 right-0 w-96 h-96 bg-pink-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-secondary">
              Questions
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Clear answers to common questions about booking, managing vehicles, <br />
            and using TravelEase efficiently.
          </p>
        </motion.div>

        {/* FAQ Cards */}
        <div className="grid gap-5 max-w-5xl mx-auto">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {item.q}
                </span>

                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-100 text-purple-600">
                  {active === i ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-pink-50 px-6 py-4 text-gray-600 leading-relaxed"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
