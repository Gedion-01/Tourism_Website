"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { SparklesCore } from "../components/ui/sparkles";

const teamMembers = [
  {
    name: "Abebe Bekele",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Tigist Haile",
    role: "Head of Operations",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Dawit Tadesse",
    role: "Lead Tour Guide",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Hiwot Mengistu",
    role: "Cultural Expert",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://utfs.io/f/vo0v5IWMut3gTtjV6jAfSbeHlYRJL2igy1Q3KZUaVqOd9shX"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        ></video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            About Visit Ethiopia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl mb-8"
          >
            Unveiling the Wonders of the Land of Origins
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-12 h-12 animate-bounce" />
        </motion.div>
      </section>
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
          <div className="max-w-3xl mx-auto">
            <TextGenerateEffect
              words="Visit Ethiopia was born out of a passion for sharing the incredible
              beauty, rich history, and vibrant culture of our homeland. Founded
              by a team of dedicated Ethiopian travel enthusiasts, we set out on
              a mission to showcase the hidden gems of Ethiopia to the world.
              Our journey began with a simple idea: to create immersive,
              authentic experiences that go beyond traditional tourism."
            />
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
      </section>
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Authentic Experiences
              </h3>
              <p>
                We strive to provide genuine, immersive experiences that connect
                travelers with the heart and soul of Ethiopia.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Cultural Preservation
              </h3>
              <p>
                Our tours are designed to support and preserve Ethiopia's rich
                cultural heritage and traditions.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Sustainable Tourism
              </h3>
              <p>
                We are committed to promoting responsible and sustainable
                tourism practices that benefit local communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Local Expertise</h3>
              <p>
                Our team of native Ethiopian guides brings unparalleled
                knowledge and insights to every tour.
              </p>
            </div>
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Tailored Experiences
              </h3>
              <p>
                We craft personalized itineraries to suit your interests,
                whether you're a history buff, nature lover, or culture
                enthusiast.
              </p>
            </div>
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Responsible Travel
              </h3>
              <p>
                We prioritize eco-friendly practices and support local
                communities through our tours.
              </p>
            </div>
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Unforgettable Memories
              </h3>
              <p>
                Our goal is to create life-changing experiences that will stay
                with you long after your journey ends.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-black">
            Ready to Explore Ethiopia?
          </h2>
          <p className="text-xl mb-8 text-black ">
            Join us on an unforgettable journey through the Land of Origins.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold inline-block transition duration-300 hover:bg-gray-900 hover:text-white"
          >
            Start Your Adventure
          </motion.a>
        </div>
      </section>
    </>
  );
}
