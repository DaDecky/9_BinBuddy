import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExplorePage = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Explore Page</h1>
      <div className="container" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Link href="/explore/article">
            <Image
              src={"/rubbish.jpg" }
              alt="rubbish"
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
