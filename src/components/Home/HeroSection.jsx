// import React from 'react'

// const HeroSection = () => {
//     return (
//         <section className="flex flex-col items-center justify-center text-center py-20 px-4">

//             <h1 className="text-5xl font-bold text-primary">Find the Perfect Course for You</h1>

//             <p className="text-lg text-base-content/80 mt-4 max-w-xl">
//                 Explore expert-led courses and take your skills to the next level. Start learning today!
//             </p>

//             <div className="mt-6 w-full max-w-md relative">
//                 <input
//                     type="text"
//                     placeholder="Search for courses..."
//                     className="w-full px-4 py-3 pr-20 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
//                 />
//                 <button className="absolute inset-y-1 right-1 px-5 py-2 bg-primary text-white rounded-full hover:bg-primary-focus transition">
//                     Search
//                 </button>
//             </div>

//             <button className="mt-6 px-6 py-3 bg-secondary text-white rounded-lg shadow-md hover:bg-secondary-focus">
//                 Explore Courses
//             </button>
//         </section>

//     )
// }

// export default HeroSection
"use client";

import { useState } from "react";
import { Search, Play, Star, Users, Award } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium border border-green-500/30">
                <Star className="h-4 w-4 mr-1" />
                #1 Coding Education Platform
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Master
                <span className="text-green-400"> Coding</span>
                <br />
                Skills Online
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Learn programming from industry experts with hands-on projects,
                interactive coding exercises, and real-world applications.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <Input
                type="text"
                placeholder="Search courses (e.g., React, Python, JavaScript)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg bg-gray-800 border-2 border-gray-700 focus:border-green-500 rounded-xl text-white placeholder-gray-400"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-black rounded-lg"
                size="sm"
              >
                Search
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-black text-lg px-8 py-3 font-medium"
              >
                Start Learning Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm text-gray-400">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-sm text-gray-400">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Code Editor Mockup */}
          <div className="relative">
            <div className="bg-gray-950 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
              {/* Editor Header */}
              <div className="bg-gray-900 px-4 py-3 flex items-center space-x-2 border-b border-gray-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-sm ml-4">main.js</div>
              </div>

              {/* Code Content */}
              <div className="p-6 text-sm font-mono">
                <div className="text-green-400">{"// Welcome to CodeBase"}</div>
                <div className="text-blue-400 mt-2">
                  {"function"}{" "}
                  <span className="text-yellow-400">{"learnCoding"}</span>(){" "}
                  {"{"}
                </div>
                <div className="text-gray-300 ml-4 mt-1">
                  {"const"} <span className="text-blue-300">skills</span> = [
                </div>
                <div className="text-green-400 ml-8">{"'JavaScript',"}</div>
                <div className="text-green-400 ml-8">{"'React',"}</div>
                <div className="text-green-400 ml-8">{"'Python',"}</div>
                <div className="text-green-400 ml-8">{"'Node.js'"}</div>
                <div className="text-gray-300 ml-4">];</div>
                <div className="text-gray-300 ml-4 mt-2">
                  {"return"}{" "}
                  <span className="text-green-400">
                    {"'Master coding with us!'"}
                  </span>
                  ;
                </div>
                <div className="text-blue-400 mt-1">{"}"}</div>
                <div className="mt-4 text-yellow-400">{"learnCoding"}();</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-3">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-medium text-white">
                  Certificate Ready
                </span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-3">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium text-white">
                  Live Community
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
