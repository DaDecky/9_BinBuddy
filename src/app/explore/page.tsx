import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArticleCard } from "../components/ArticleCard";

const ExplorePage = () => {
  return (
    <div
      className="w-full p-8 text-green-600 min-h-screenf flex flex-col items-center ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-10 text-center">
        Explore Page
      </h1>
      <ArticleCard 
      imageSrc="/tpa-indo.jpg" 
      imageAlt="tpa indonesia" 
      title="Pengelolaan Sampah di Indonesia" 
      href="/explore/article">
        Persoalan sampah di Indonesia menjadi tantangan yang berat di masa depan mengingat terbatasnya jumlah TPA berikut daya tampungnya. Apalagi pada tahun 2030, pemerintah menargetkan tidak ada lagi pembangunan TPA sebagai upaya mengurangi emisi karbon dari sumber sampah. Pun jika akan dibangun, penyediaan TPA akan terkendala dengan lahan yang sangat terbatas...
      
      </ArticleCard>
      <ArticleCard imageSrc="/r3.jpg" imageAlt="recycling bin" title="The Benefits of Reduce, Reuse, Recycle" href="/explore/article2">
      Konsep 3R (Reduce, Reuse, Recycle) merupakan salah satu pendekatan yang paling efektif dalam pengelolaan sampah dan pelestarian lingkungan. Dengan menerapkan prinsip-prinsip 3R, kita dapat mengurangi dampak negatif terhadap lingkungan dan membantu menciptakan dunia yang lebih bersih dan sehat...
     
      </ArticleCard>
      <ArticleCard imageSrc="/recycling-bin.jpg" imageAlt="kategori tempat sampah" title="Pengelolaan Sampah di ITB" href="/explore/article3">
      Pengelolaan sampah yang efektif dimulai dari pemilahan sampah di sumbernya. Pemilahan ini penting untuk memastikan bahwa setiap jenis sampah dapat dikelola dan diolah dengan cara yang paling sesuai, sehingga mengurangi dampak negatif terhadap lingkungan. Di ITB sendiri, disediakan 4 jenis kategori tempat sampah yang dapat digunakan untuk memilah kategori sampah.  
     
      </ArticleCard>
    </div>
  );
};

export default ExplorePage;
