import { useEffect, useRef, useState } from "react";
import {
  FaUsers,
  FaCarSide,
  FaRoute,
  FaUserTie,
  FaStar,
} from "react-icons/fa";


const statIcons = {
  users: <FaUsers className="text-3xl text-secondary" />,
  vehicles: <FaCarSide className="text-3xl text-secondary" />,
  bookings: <FaRoute className="text-3xl text-secondary" />,
  owners: <FaUserTie className="text-3xl text-secondary " />,
};

const SPEED = 2; 

const Testimonials = () => {
  const [stats, setStats] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        setStats(data.stats || []);
        setTestimonials(data.testimonials || []);
      });
  }, []);


  useEffect(() => {
    let raf;

    const animate = () => {
      if (!pausedRef.current && trackRef.current) {
        posRef.current -= SPEED;

        const halfWidth = trackRef.current.scrollWidth / 2;
        if (Math.abs(posRef.current) >= halfWidth) {
          posRef.current = 0;
        }

        trackRef.current.style.transform = `translateX(${posRef.current}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Static card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="border border-pink-500 rounded-xl p-6 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-3">
                {statIcons[stat.id]}
              </div>
              <h3 className="text-3xl font-bold">
                {stat.value}+
              </h3>
              <p className=" font-medium text-gray-700 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Slider */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What People <span className="text-secondary">Say</span>
          </h2>
          <p className="text-gray-700 mt-3 font-medium max-w-xl mx-auto">
            Real feedback from passengers & car owners
          </p>
        </div>

    
        <div className="overflow-hidden border-x-2 border-gray-400">
          <div
            ref={trackRef}
            className="flex gap-6 w-max "
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => (pausedRef.current = true)}
                onMouseLeave={() => (pausedRef.current = false)}
                onClick={() =>
                  (pausedRef.current = !pausedRef.current)
                }
                className="w-[300px] sm:w-[340px] shrink-0 border border-purple-500 rounded-xl p-6 bg-white hover:shadow-xl transition cursor-pointer"
              >
                {/* card */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">
                      {item.name}
                    </h4>
                    <p className="text-sm font-medium text-gray-800">
                      {item.role}
                    </p>
                  </div>
                </div>

                <p className=" font-semibold mb-4 leading-relaxed">
                  “{item.quote}”
                </p>

                <div className="flex gap-1 text-yellow-500">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
