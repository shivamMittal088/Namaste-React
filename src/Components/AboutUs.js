import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-white">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">Welcome to Yumzzy</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nestled in the heart of [City/Locality], we bring you a curated menu of delicious [e.g., North Indian / Italian / Fusion] dishes crafted with passion and tradition.
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-16">
        {/* Our Story Section */}
        <section>
          <div className="border-l-4 border-amber-500 pl-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded in [Year], our journey started as a humble kitchen with a simple goal: serve wholesome, flavorful meals that feel like home. Over the years, we've grown into a community favorite, known for our warm service and unforgettable flavors.
          </p>
        </section>

        {/* What Makes Us Special Section */}
        <section>
          <div className="border-l-4 border-amber-500 pl-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes Us Special</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every dish we serve is made from fresh, locally sourced ingredients. Our chefs blend traditional techniques with modern twists to bring you a one-of-a-kind dining experience — whether you're ordering online or visiting us in person.
          </p>
        </section>

        {/* Our Commitment Section */}
        <section>
          <div className="border-l-4 border-amber-500 pl-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe in quality, transparency, and delighting our customers with every bite. From carefully selected produce to hygienic preparation and eco-friendly packaging — we go the extra mile so you can enjoy every meal with peace of mind.
          </p>
        </section>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <p className="text-lg font-medium text-gray-900 mb-6">Experience the Yumzzy difference today!</p>
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          View Our Menu
        </button>
      </div>
    </div>
  );
};

export default About;