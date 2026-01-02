// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "User Authentication",
    desc:
      "Users securely register and log in using Firebase Authentication. Protected routes ensure private data stays safe.",
    img: "https://i.ibb.co.com/6JwbWWQ1/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection-115.avif", 
  },
  {
    id: 2,
    title: "Explore or Add Vehicles",
    desc:
      "Customers browse available vehicles. Vehicle owners can add, update, and manage their own listings.",
    img: "https://i.ibb.co.com/DfgQDHt4/people-holding-different-transportation-icons-53876-66143.avif",
  },
  {
    id: 3,
    title: "Request & Manage Bookings",
    desc:
      "Users request vehicles and track booking details. Owners manage availability and booking requests.",
    img: "https://i.ibb.co.com/TxfRY4J2/Chat-GPT-Image-Jan-2-2026-10-18-58-PM.png",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
     
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
            How It Works
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto font-medium">
            A simple and transparent process for both customers and vehicle owners.
          </p>
        </div>

      
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
            
              <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                <span className="inline-block mb-3 px-4 py-1 rounded-full text-sm font-semibold bg-pink-100 text-pink-600">
                  Step {step.id}
                </span>
                <h3 className="text-3xl font-bold text-purple-700 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed max-w-md text-lg">
                  {step.desc}
                </p>
              </div>

              <div className={`flex justify-center ${index % 2 !== 0 ? "md:order-1" : ""}`}>
                <div className="border border-purple-200 rounded-2xl p-3 shadow-sm bg-white">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-[300px] max-w-sm rounded-xl object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        <div className="grid md:grid-cols-2 gap-10 mt-24">
          <div className="border rounded-xl p-6 bg-white shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-purple-700">
              For Customers
            </h3>
            <ul className="space-y-2 text-gray-700 ">
              <li>• Browse and book available vehicles</li>
              <li>• Secure authentication</li>
              <li>• View booking details anytime</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6 bg-white shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-purple-700">
              For Vehicle Owners
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Add and manage your vehicles</li>
              <li>• Control availability</li>
              <li>• Track booking requests</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-16">
          <Link
            to="/allVehicles"
            className="px-6 py-3 bg-pink-500 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-purple-700 hover:scale-105 transition hover:text-white "
          >
            Browse Vehicles <FaArrowRight />
          </Link>

          <Link
            to="/login"
            className="px-6 py-3 border bg-white rounded-lg font-semibold text-purple-700 hover:bg-purple-500 hover:text-white hover:scale-105 transition text-center"
          >
            Login to Book
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
