import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Camden Webster
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
            Senior Test Engineer
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Dedicated to crafting robust test automation solutions and ensuring software quality.
            Specialized in iOS testing, end-to-end automation frameworks, and comprehensive QA strategies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/camdenwebster"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              View My Work
              <ArrowRight size={20} />
            </a>
            <a
              href="mailto:contact@camdenwebster.dev"
              className="px-8 py-3 border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;