import Image from "next/image";
import { BiBorderRadius } from "react-icons/bi";

const Article = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", backgroundColor: "#f0f5ff", color: "black", minHeight: "100vh" }}>
      <h1 style={{fontSize: 20,fontWeight: 200, marginBlockEnd: "20px"}}>
        Pengelolaan Sampah di Indonesia
        </h1>
      <Image
        src="/rubbish.jpg" 
        alt="rubbish"
        width={500}
        height={300}
        style= {{alignItems: "flex-start",borderRadius: "10px"}}

      />
      <div className="container" style={{display: "block", padding: "20px"}}>
        <p>Persoalan sampah di Indonesia menjadi tantangan yang berat di masa depan mengingat terbatasnya jumlah TPA berikut daya tampungnya. Apalagi pada tahun 2030, pemerintah menargetkan tidak ada lagi pembangunan TPA sebagai upaya mengurangi emisi karbon dari sumber sampah. Pun jika akan dibangun, penyediaan TPA akan terkendala dengan lahan yang sangat terbatas.
        Oleh karena itu, perlu mengoptimalkan pengelolaan sampah yang melibatkan berbagai pihak. Hal ini membutuhkan kerja sama dari kalangan masyarakat, pemerintah, dan juga sektor privat. Masyarakat perlu diarahkan untuk mengoptimalkan pengurangan, pemilahan, dan pengolahan sampah. Upaya ini sudah terwujud dalam bentuk bank sampah yang mulai banyak diterapkan di lingkungan RT/RW, desa, ataupun kelurahan. Hanya saja kegiatan ini masih terbatas pada pengolahan sampah jenis tertentu saja seperti plastik maupun kertas. Untuk sampah jenis lainnya belum dapat tertampung karena belum adanya sarana pengelolaan lebih lanjut.
        Sektor privat bisa membantu dengan menyediakan produk-produk dengan kemasan yang ramah lingkungan. Hal ini diperlukan agar sampah yang dihasilkan mudah diolah sehingga tidak dimanfaatkan untuk kegunaan lainnya.
        Untuk mendukung itu semua, ada baiknya pemerintah dapat menyediakan fasilitas dan teknologi yang mampu dimanfaatkan masyarakat untuk mengolah sampah di lingkup perumahan. Jadi, mendorong partisipasi kesadaran masyarakat untuk mengolah sampahnya secara mandiri di sekitar lingkungan permukiman. Selain itu, pemerintah juga terus berupaya semaksimalnya untuk mendorong keberhasilan program pemanfaatan sampah untuk pembangkit listrik tenaga sampah (PLTSa), waste to energy, dan daur ulang sampah agar menjadi lebih berdaya guna. Dengan demikian, rencana pemerintah untuk meniadakan pembangunan TPA pada tahun 2030 dapat terealisasi. (LITBANG KOMPAS)
        </p>
      </div>
    </div>
  );
};

export default Article;
