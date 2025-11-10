import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCarAlt } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const StaticSections = () => {
  const categories = [
    {
      title: "Sedans",
      desc: "Stylish and comfortable 4-seaters for your daily city rides.",
      img: "https://i.ibb.co.com/1ffYFLj8/What-is-Hatchback-web-insider-sedan-vs-hatchback.jpg",
    },
    {
      title: "SUVs",
      desc: "Perfect for family trips, off-road adventures, and long drives.",
      img: "https://i.ibb.co.com/0RbCp6ng/DARCARS-Toyota-of-Frederick-Small-SUV-model-ls3.webp",
    },
    {
      title: "Electric",
      desc: "Go green with efficient and eco-friendly electric vehicles.",
      img: "https://i.ibb.co.com/pjvDYK8M/Ford-Mach-E-awd.webp",
    },
    {
      title: "Vans",
      desc: "Spacious and reliable vans for group travel and cargo transport.",
      img: "https://i.ibb.co.com/W4zwy2dd/15-1716549592.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 text-text overflow-hidden font-sans">
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-700"
        >
          <div className="flex items-center justify-center gap-3">
            Top Vehicle Categories{" "}
            <span className="text-secondary h-8">
              <FaCarAlt size={40} />
            </span>
          </div>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white shadow-md hover:shadow-lg rounded-2xl overflow-hidden transition transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-40">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-700">{cat.title}</h3>
                <p className="text-base text-gray-600 mt-2">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 border-t-2 border-gray-400">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-700"
          >
            About <span className="text-secondary">TravelEase</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-base md:text-lg mb-10"
          >
            <span className="text-secondary font-semibold">TravelEase</span> is
            your trusted companion for vehicle booking and trip management.
            Whether you're planning a short drive or a long road trip, you can
            find, list, and manage vehicles effortlessly. Our platform ensures a
            seamless experience, verified owners, and easy booking—so you can
            focus on your journey, not the hassle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="flex w-full max-w-md rounded-full overflow-hidden shadow-lg">
              <input
                type="text"
                placeholder="Search for Cars..."
                className="flex-1 px-5 py-3 text-gray-700 border rounded-l-full "
              />
              <button className="bg-linear-to-r from-[#6A11CB] to-[#2575FC] text-white px-5 py-3">
                <BiSearch size={22} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StaticSections;
