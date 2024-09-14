import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen font-inter sm:w-100 lg:w-100">
      <div
        className="relative w-full flex flex-col items-center text-white justify-center bg-cover bg-center bg-no-repeat min-h-screen"
        style={{ backgroundImage: "url('/bg_home.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center p-8 w-full max-w-8xl mx-auto">
          <h1 className="text-4xl md:text-8xl font-bold mb-4">
            Waste bin MAP locations and recycling
          </h1>
          <p className="text-lg md:text-xl font-light mb-8">
            Find nearby waste bin locations and learn how to recycle
          </p>
          <div className="flex flex-col items-center space-y-4 mb-8 md:gap-8 sm:gap-4">
            <Link href="/maps">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold italic py-3 sm:text-sm sm:py-3 sm:px-5 md:py-5 px-10 md:px-20 rounded-full inline-block text-xl md:text-2xl">
                Find Waste Bins
              </button>
            </Link>
            <Link href="/explore">
              <button className="bg-transparent border border-white hover:bg-gray-700 text-white font-bold italic sm:text-sm sm:py-3 sm:px-5 py-3 md:py-5 px-10 md:px-20 rounded-full inline-block text-xl md:text-2xl">
                Learn Recycling
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-blue-300 p-8 text-green-600"
        style={{ backgroundColor: "#F1F5FF" }}
      >
        <div className="text-left w-full max-w-9xl mx-auto">
          <h2 className="text-4xl sm:text-4xl md:text-7xl font-bold mb-8">
            Featured Articles
          </h2>
          <div
            className="container"
            style={{ maxWidth: "600px", marginBottom: "20px" }}
          >
            <Link href="/explore/article">
              <Image
                src={"/tpa-indo.jpg"}
                alt="tpa indonesia"
                width={500}
                height={300}
                style={{ cursor: "pointer", borderRadius: "8px" }}
              />
            </Link>
            <h2
              className="text-2xl sm:text-xl md:text-3xl font-bold mt-4 mb-6"
              style={{ marginBottom: "10px" }}
            >
              Pengelolaan Sampah di Indonesia
            </h2>
            <p className="text-lg sm:text-sm md:text-xl mb-4">
              Persoalan sampah di Indonesia menjadi tantangan yang berat di masa
              depan mengingat terbatasnya jumlah TPA berikut daya tampungnya.
              Apalagi pada tahun 2030, ...
            </p>
            <Link href="/explore/article">
              <p className="text-base sm:text-sm md:text-lg mb-4 underline">
                Read more
              </p>
            </Link>
          </div>
          <div
            className="container"
            style={{ maxWidth: "600px", marginBottom: "20px" }}
          >
            <Link href="/explore/article2">
              <Image
                src={"/tipesampah.png"}
                alt="tempat sampah di itb"
                width={500}
                height={300}
                style={{ cursor: "pointer", borderRadius: "8px" }}
              />
            </Link>
            <h2
              className="text-2xl sm:text-xl md:text-3xl font-bold mt-4 mb-6"
              style={{ marginBottom: "10px" }}
            >
              Pengelolaan Sampah di ITB
            </h2>
            <p className="text-lg sm:text-sm md:text-xl mb-4">
              Pengelolaan sampah yang efektif dimulai dari pemilahan sampah di sumbernya. 
              Pemilahan ini penting untuk memastikan bahwa setiap jenis sampah dapat dikelola 
              dan diolah dengan cara yang paling sesuai, ...
            </p>
            <Link href="/explore/article3">
              <p className="text-base sm:text-sm md:text-lg mb-4 underline">
                Read more
              </p>
            </Link>
          </div>
          <div className="flex flex-row text-2xl sm:text-xl md:text-3xl mt-8 mb-8 underline">
            <Link href="/explore">
              <p className="flex flex-row">
                More
                <img
                  src="/arrow.png"
                  alt="Arrow"
                  className="w-5 xs:w-10 h-4 md:h-8 mr-2 mt-2 md:mt-1 ml-2 md:ml-3"
                />
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-8 text-green-600">
        <div className="text-left w-full max-w-9xl mx-auto">
          <h2 className="text-4xl sm:text-4xl md:text-7xl font-bold mb-10">
            Public Waste Disposal Education
          </h2>
          <div className="mb-9">
            <h3 className="text-2xl sm:text-2xl md:text-4xl font-lg leading-normal">
              Learn about waste recycling and proper disposal methods
            </h3>
            <div className="flex justify-center video-container my-8">
              <iframe
                width="840"
                height="472"
                src="https://www.youtube.com/embed/Qyu-fZ8BOnI"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex justify-center mt-8 sm:max-w-sm md:max-w-2xl mx-auto border-4 border-green-500 sm:py-4 md:py-5 sm:px-10 md:px-20 rounded-lg">
              <div>
                <h3 className="flex flex-row sm:text-base md:text-xl md:text-2xl font-semibold justify-center">
                  <img
                    src="/interaktif.png"
                    alt="Leaf Icon"
                    className="w-4 md:w-6 h-4 md:h-6 mr-1 md:mr-2 mt-1"
                  />
                  Interactive Waste Bin Map
                </h3>
                <p className="text-base sm:text-xs md:text-lg text-center">
                  Explore a map showing the locations of waste bins along with
                  their types (organic, recyclable).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-green-200 p-8 text-green-600">
        <div className="flex flex-col justify-center mt-10 max-w-6xl mx-auto bg-white py-10 px-4 md:px-40">
          <div className="flex flex-col text-center w-full max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-2xl md:text-4xl font-bold sm:mb-3 md:mb-6 ">
              Map of Waste Bin Locations
            </h3>
            <div className="mb-6">
              <p className="text-base sm:text-sm md:text-lg font-lg leading-normal">
                Find nearby waste bins and learn how to dispose of waste
                correctly.
              </p>
            </div>
          </div>
          <Link href={"/maps"}>
            <div className="flex flex-col text-center text-gray-600 sm:w-1/2 lg:w-2/3 max-w-9xl mx-auto bg-white p-4 md:p-8 rounded-lg">
              <button className="bg-green-600 hover:bg-green-600 text-white font-bold py-2 text-sm md:text-xl md:py-4 px-4 md:px-8 rounded-full w-full">
                EXPLORE
              </button>
            </div>
          </Link>

          <p className="sm:text-xs md:text-sm font-base leading-normal text-center">
            By using this app, you agree to follow the waste disposal
            guidelines.
          </p>
        </div>
      </div>
    </main>
  );
}
