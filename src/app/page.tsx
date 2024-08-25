import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from 'next/link';
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen font-inter">
      <div className="relative w-full flex flex-col items-center text-white justify-center bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: "url('/bg_home.jpeg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center p-8 w-full max-w-8xl mx-auto">
          <h1 className="text-8xl font-bold mb-4">Waste bin MAP locations and recycling</h1>
          <p className="text-xl font-light mb-8">Find nearby waste bin locations and learn how to recycle</p>
          <div className="flex flex-col items-center space-y-4 mb-8 gap-8">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold italic py-5 px-20 rounded-full inline-block text-2xl">
              Find Waste Bins
            </button>
            <button className="bg-transparent border border-white hover:bg-gray-700 text-white font-bold italic py-5 px-20 rounded-full inline-block text-2xl">
              Learn Recycling
            </button>
          </div>
        </div>
      </div>
      {/* Nanti yang bagian explore di bawah diganti sama yg ngerjain explore */}
      <div className="w-full bg-blue-300 p-8 text-green-600">
        <div className="text-left w-full max-w-9xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Featured Articles</h2>
          <div className="mb-4">
            <img src="/path/to/image1.jpg" alt="How to Properly Dispose of Different Types of Waste" className="w-full h-auto mb-2 rounded" />
            <h3 className="text-xl font-semibold">How to Properly Dispose of Different Types of Waste</h3>
            <p className="text-sm text-gray-500">Read more</p>
          </div>
          <div>
            <img src="/path/to/image2.jpg" alt="Beginner's Guide to Recycling at Home" className="w-full h-auto mb-2 rounded" />
            <h3 className="text-xl font-semibold">Beginner's Guide to Recycling at Home</h3>
            <p className="text-sm text-gray-500">Read more</p>
          </div>
        </div>
      </div>
      {/* sampe sini */}
      <div className="w-full bg-white p-8 text-green-600">
        <div className="text-left w-full max-w-9xl mx-auto">
          <h2 className="text-7xl font-bold mb-10">Public Waste Disposal Education</h2>
          <div className="mb-9">
            <h3 className="text-4xl font-lg leading-normal">Learn about waste recycling and proper disposal methods</h3>
            <div className="flex justify-center video-container my-8">
              <iframe width="840" height="472" src="https://www.youtube.com/embed/_rQxXFgKfF0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="flex justify-center mt-8 max-w-2xl mx-auto border-4 border-green-500 py-5 px-20 rounded-lg">
              <div>
                <h3 className="flex flex-row text-2xl font-semibold justify-center">
                  <img src="/interaktif.png" alt="Leaf Icon" className="w-6 h-6 mr-2" />
                  Interactive Waste Bin Map
                </h3>
                <p className="text-lg text-center">Explore a map showing the locations of waste bins along with their types (organic, recyclable).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-green-200 p-8 text-green-600">
        <div className="flex flex-col justify-center mt-10 max-w-6xl mx-auto bg-white py-10 px-40">
          <div className="flex flex-col text-left w-full max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold mb-6">Map of Waste Bin Locations</h3>
            <div className="mb-6">
              <p className="text-lg font-lg leading-normal">Find nearby waste bins and learn how to dispose of waste correctly.</p>
            </div>
          </div>
          <div className="flex flex-col text-center text-gray-600 w-2/3 max-w-9xl mx-auto bg-white p-8 rounded-lg">
                <input type="text" placeholder="Search for waste bin locations" className="p-4 mb-4 border border-green-600 rounded-lg" />
                <button className="bg-green-600 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full">Explore</button>
          </div>
            <p className="text-sm font-base leading-normal">By using this app, you agree to follow the waste disposal guidelines.</p>
        </div>

      </div>
    </main>
  );
}
