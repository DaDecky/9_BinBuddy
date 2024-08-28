import Image from "next/image";
import { BiBorderRadius } from "react-icons/bi";

const Article2 = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", backgroundColor: "#f0f5ff", color: "black", minHeight: "100vh" }}>
      <h1 style={{fontSize: 20,fontWeight: 200, marginBlockEnd: "20px"}}>
        Benefits of Recycling
        </h1>
      <Image
        src="/recycling-bin.jpeg" 
        alt="daur ulang"
        width={500}
        height={300}
        style= {{alignItems: "flex-start",borderRadius: "10px"}}

      />
      <div className="container" style={{display: "block", padding: "20px"}}>
        <p>Recycle atau daur ulang adalah proses pengumpulan dan pemrosesan bahan yang seharusnya dibuang 
            sebagai limbah dan mengubahnya menjadi produk baru. Recycle termasuk salah satu dari tiga langkah 
            pengolahan limbah yaitu reduce, reuse, dan recycle. Recycle adalah komponen kunci dari pengurangan 
            limbah modern. Produksi limbah bisa ditekan dengan upaya recycle ini. Recycle bertujuan untuk kelestarian 
            lingkungan. Hasil dari recycle juga bisa berguna bagi kehidupan sehari-hari. Recycle mencegah emisi 
            banyak gas rumah kaca dan polutan air, serta menghemat energi. Menggunakan bahan yang didaur ulang 
            menghasilkan lebih sedikit limbah padat. Sebelum membuang sesuatu, pikirkan apakah semua atau sebagian 
            darinya dapat didaur ulang.
        </p>
      </div>
    </div>
  );
};

export default Article2;
