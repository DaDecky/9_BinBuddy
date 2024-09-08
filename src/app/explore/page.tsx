import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExplorePage = () => {
  return (
    <div
      className="w-full bg-blue-300 p-8 text-green-600 min-h-screen"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#F1F5FF",
      }}
    >
      <h1
        className="text-2xl sm:text-xl md:text-3xl font-bold mt-4 mb-6"
        style={{ fontSize: "30px", fontWeight: 600, marginBottom: "20px" }}
      >
        Explore Page
      </h1>
      <div
        className="container"
        style={{ maxWidth: "600px", marginBottom: "20px" }}
      >
        <h2 style={{ marginBottom: "10px" }}>
          Pengelolaan Sampah di Indonesia
        </h2>
        <Link href="/explore/article">
          <Image
            src={"/rubbish.jpg"}
            alt="rubbish"
            width={500}
            height={300}
            style={{ cursor: "pointer", borderRadius: "8px" }}
          />
        </Link>
      </div>
      <div
        className="container"
        style={{ maxWidth: "600px", marginBottom: "20px" }}
      >
        <h2 style={{ marginBottom: "10px" }}>The Benefits of Recycling</h2>
        <Link href="/explore/article2">
          <Image
            src={"/recycling-bin.jpeg"}
            alt="recycling bin"
            width={500}
            height={300}
            style={{ cursor: "pointer", borderRadius: "8px" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default ExplorePage;
