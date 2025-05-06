import React from 'react';
import image21 from '../assets/Events/image21.jpg'
import image20 from '../assets/Events/image20.jpg'
import image22 from '../assets/Events/image22.png'

const events = [
  {
    date: "Feb 4, 2025",
    image: image21,
    desc: "Discover cutting-edge web design strategies tailored for modern businesses and creators."
  },
  {
    date: "March 19, 2025",
    image: image22,
    desc: "Unlock the full potential of your website with expert-led optimization sessions."
  },
  {
    date: "March 22, 2025",
    image: image20,
    desc: "Ignite innovation through hands-on collaboration between designers, developers, and visionaries."
  }
];

const Events = () => {
  return (
    <section id="events" className="w-full py-32 bg-black text-white relative select-none">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#311b3f] to-transparent z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-10">
          Event For PigoPi <br />
          <span className="text-[#810ec8] font-medium">Connect With Customers</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-15">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-[#0d0d0d] rounded-2xl overflow-hidden shadow-md animate-float transition-shadow duration-300"
            >
              <img
                src={event.image}
                alt={`Event ${index + 1}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 space-y-4">
                <p className="inline-block border font-[Host_Grotesk] border-white text-lg px-3 py-1 rounded-md">
                  {event.date}
                </p>
                <p className="text-lg font-[Host_Grotesk] text-gray-300">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
