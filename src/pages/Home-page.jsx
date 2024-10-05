import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { BackgroundBeams } from "../components/ui/background-beams";
import { SparklesCore } from "../components/ui/sparkles";
import { Link } from "react-router-dom";

const images = [
  "https://www.evisa.gov.et/images/axum.jpg",
  "https://th.bing.com/th/id/R.a2f54f17817fc3c11552c868c4ddbf28?rik=Vqyzh1a%2fKVYrzA&riu=http%3a%2f%2fwww.tresorsdumonde.fr%2fwp-content%2fuploads%2f2014%2f08%2fFasilides_Palace_02.jpg&ehk=lpzCuBeRMpoy1VpIsh7JwBOHY2DTZ6Ey7n8G37nDS0M%3d&risl=&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/R.42f4554c764bd73fb564c7e5ed5dbb38?rik=9jNtAp2n4p2FNw&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.4RRBAbVVRT6MBIq0uohjswHaE7?rs=1&pid=ImgDetMain",
  "https://4.bp.blogspot.com/-fD9Z7LkTx8E/U2SgQ9nwX2I/AAAAAAAAAe8/N7ynMGJtLiA/s1600/simien-wolf-in-simien-national-park-ethiopia-1600x1071.jpg",
];

const testimonials = [
  {
    quote: "Ethiopia changed my life. The landscapes are breathtaking!",
    name: "Sarah Johnson",
    title: "Adventure Enthusiast",
    image: "https://randomuser.me/api/portraits/women/91.jpg",
  },
  {
    quote: "The rich history and culture of Ethiopia are truly captivating.",
    name: "Michael Chen",
    title: "History Buff",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    quote: "I've never felt more alive than when exploring Ethiopia's wonders.",
    name: "Emma Rodriguez",
    title: "Travel Blogger",
    image: "https://randomuser.me/api/portraits/women/83.jpg",
  },
  {
    quote: "Ethiopia's coffee ceremony is an experience like no other.",
    name: "David Smith",
    title: "Food & Culture Explorer",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    quote: "The warmth of Ethiopian people will stay with me forever.",
    name: "Olivia Brown",
    title: "Solo Traveler",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
  },
];

const destinations = [
  {
    name: "Lalibela Churches",
    image:
      "https://www.chargetheglobe.com/wp-content/uploads/lalibela-churchofstgeorgesideview.jpg?height=400&width=600",
  },
  {
    name: "Simien Mountains",
    image:
      "https://imgix.brilliant-ethiopia.com/BRI_4_TOM_SAVAGE_ALL_simien-view.jpg?auto=format,enhance,compress&fit=crop&crop=entropy,faces,focalpoint&w=1880&h=740&q=30?height=400&width=600",
  },
  {
    name: "Danakil Depression",
    image:
      "https://assets.iflscience.com/assets/articleNo/70498/aImg/70381/danakil-depression-o.webp?height=400&width=600",
  },
  {
    name: "Omo Valley Tribes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHePx3wBTw2VvoINU3TBqm_I4LEZJ90_3SZw&s?height=400&width=600",
  },
  {
    name: "Blue Nile Falls",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlSYOqWAToA-04SnWFHrN5CvIW6sYo7Qyn6Q&s?height=400&width=600",
  },
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const videoRef = useRef(null);
  //

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://utfs.io/f/vo0v5IWMut3guCt2Syq9I4fWMtDb8UXl2pNHchYxTz7oqy0s"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          ></video>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl font-bold mb-4">Explore Ethiopia</h1>
          <p className="text-xl mb-8">Where History Meets Adventure</p>
          <Link
            to="/about"
            className="bg-[#EAE6F6] text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-900 hover:text-white transition duration-300"
          >
            Discover More
          </Link>
        </motion.div>
      </section>
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Go Where You Feel Alive
          </h2>
          <p className="text-xl text-center mb-12">
            Embark on a journey through Ethiopia's stunning landscapes, from the
            Simien Mountains to the Danakil Depression. Experience the thrill of
            discovery and the warmth of Ethiopian hospitality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Ancient Wonders</h3>
              <p>
                Explore rock-hewn churches, ancient obelisks, and hidden
                monasteries.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Natural Beauty</h3>
              <p>
                Witness breathtaking landscapes, from lush highlands to
                otherworldly salt flats.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      </section>{" "}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Ethiopia's Rich History
          </h2>
          <div className="max-w-3xl mx-auto text-white">
            <TextGenerateEffect words="Ethiopia, a land of ancient civilizations and diverse cultures, boasts a history that spans millennia. From the legendary Queen of Sheba to the ancient kingdom of Aksum, Ethiopia's past is filled with fascinating stories and remarkable achievements." />
          </div>
        </div>
      </section>{" "}
      <section className="relative w-full h-[600px] overflow-hidden bg-gray-900 container mx-auto">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            filter: "blur(10px) brightness(0.5)",
            transform: "scale(1.1)",
          }}
        />

        <div className="relative w-full h-full perspective-1000">
          <AnimatePresence initial={false}>
            {[-1, 0, 1].map((offset) => {
              const index =
                (currentIndex + offset + images.length) % images.length;
              return (
                <motion.div
                  key={index}
                  className="absolute top-0 left-0 w-full h-full"
                  initial={{
                    x: `${offset * 100}%`,
                    rotateY: offset * -45,
                    z: offset === 0 ? 0 : -200,
                    opacity: offset === 0 ? 1 : 0.5,
                  }}
                  animate={{
                    x: `${offset * 100}%`,
                    rotateY: offset * -45,
                    z: offset === 0 ? 0 : -200,
                    opacity: offset === 0 ? 1 : 0.5,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={images[index]}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Ethiopia in Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">
                    {destination.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Traveler's Stories
          </h2>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 p-8 rounded-lg shadow-lg"
              >
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <p className="text-lg italic mb-4">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <p className="font-bold">
                  {testimonials[activeTestimonial].name}
                </p>
                <p className="text-sm text-gray-400">
                  {testimonials[activeTestimonial].title}
                </p>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={() =>
                setActiveTestimonial(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() =>
                setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
              }
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-yellow-600 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Explore Ethiopia?
          </h2>
          <p className="text-xl mb-8">
            Start planning your unforgettable journey today!
          </p>
          <Link
            to="/about"
            className="bg-[#EAE6F6] text-black px-8 py-3 rounded-full text-lg font-semibold transition duration-300 transform hover:bg-gray-900 hover:text-white hover:scale-105 hover:shadow-lg"
          >
            Learn More
          </Link>
        </div>
      </section>
    </>
  );
}
