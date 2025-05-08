import React from 'react';

const testimonials = [
  {
    name: 'Jenny Wilson',
    handle: '@jennywilson',
    avatar: 'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-3.jpg',
    text: 'This is a top quality product. No need to think twice before making it live on web.',
    tag: '#make_it_fast',
    rating: 5,
  },
  {
    name: 'Rahul Sharma',
    handle: '@rahulsharma',
    avatar: 'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-2.jpg',
    text: 'The support is incredible and the design is exactly what we needed.',
    tag: '#professional',
    rating: 4,
  },
  {
    name: 'Sophia Lee',
    handle: '@sophialee',
    avatar: 'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-4.jpg',
    text: 'Fast, clean, and reliable. Would definitely collaborate again.',
    tag: '#efficiency',
    rating: 5,
  },
  {
    name: 'Mark Peters',
    handle: '@marktech',
    avatar: 'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg',
    text: 'Absolutely fantastic experience from start to finish.',
    tag: '#reliable',
    rating: 4,
  },
];

const StarRating = ({ rating }) => {
  const stars = Array(5).fill(false).map((_, index) => index < rating);
  return (
    <div className="flex">
      {stars.map((star, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${star ? 'text-yellow-400' : 'text-gray-400'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 01.68.42l2.415 4.896 5.405.786a.75.75 0 01.416 1.28l-3.915 3.817.924 5.419a.75.75 0 01-1.088.792l-4.87-2.565-4.87 2.565a.75.75 0 01-1.088-.792l.924-5.419-3.915-3.817a.75.75 0 01.416-1.28l5.405-.786L11.32 2.67a.75.75 0 01.68-.42z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="relative px-6 md:px-12 py-16 w-full bg-[#030014] text-white overflow-hidden">
      <h1 className="text-4xl font-semibold mb-12">Testimonials</h1>

      <div className="relative w-full overflow-hidden group">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#030014] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#030014] to-transparent z-10 pointer-events-none" />

        <div className="whitespace-nowrap flex scroll-track">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div
              key={i}
              className="w-[260px] min-w-[260px] mx-6 rounded-xl p-4 sm:p-6 backdrop-blur-md bg-white/10 border border-white/10 shadow-xl hover:scale-105 transition-transform duration-300 text-white sm:w-[320px] sm:min-w-[320px] md:w-[400px] md:min-w-[400px]"
              style={{ height: '250px' }}
            >
              <div className="flex items-center justify-between">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div className="ml-3 mr-auto">
                  <p className="text-base font-semibold truncate">{testimonial.name}</p>
                  <p className="text-sm text-gray-300 truncate">{testimonial.handle}</p>
                </div>
                <a href="#" title="" className="text-sky-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
                  </svg>
                </a>
              </div>
              <blockquote className="mt-5 overflow-hidden">
                <p className="text-base text-gray-200 leading-relaxed break-words">
                  {testimonial.text}
                  <span className="block text-sky-400 mt-2">{testimonial.tag}</span>
                </p>
              </blockquote>
              <div className="mt-4">
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .scroll-track {
          animation: scroll 15s linear infinite;
          will-change: transform;
        }

        .group:hover .scroll-track {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
