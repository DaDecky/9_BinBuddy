import Image from "next/image";

const Article = () => {
  return (
    <div className="container mx-auto p-6 w-[90%]">
      <h1 className="text-green-700 mb-6 text-2xl sm:text-4xl font-bold">
        Pengelolaan Sampah di Indonesia
      </h1>
      <div className="relative w-full max-h-96 mb-6">
        <Image
          className="object-cover object-top w-full max-h-96 rounded-lg shadow-md"
          src="/tpa-indo.jpg" 
          alt="tpa indonesia"
          width={960}
          height={640}
        />

      </div>
      <p className="text-lg text-gray-700 mb-4">
        Persoalan sampah di Indonesia menjadi tantangan yang berat di masa depan mengingat terbatasnya jumlah TPA berikut daya tampungnya. Apalagi pada tahun 2030, pemerintah menargetkan tidak ada lagi pembangunan TPA sebagai upaya mengurangi emisi karbon dari sumber sampah. Pun jika akan dibangun, penyediaan TPA akan terkendala dengan lahan yang sangat terbatas.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Oleh karena itu, perlu mengoptimalkan pengelolaan sampah yang melibatkan berbagai pihak. Hal ini membutuhkan kerja sama dari kalangan masyarakat, pemerintah, dan juga sektor privat. Masyarakat perlu diarahkan untuk mengoptimalkan pengurangan, pemilahan, dan pengolahan sampah. Upaya ini sudah terwujud dalam bentuk bank sampah yang mulai banyak diterapkan di lingkungan RT/RW, desa, ataupun kelurahan. Hanya saja kegiatan ini masih terbatas pada pengolahan sampah jenis tertentu saja seperti plastik maupun kertas. Untuk sampah jenis lainnya belum dapat tertampung karena belum adanya sarana pengelolaan lebih lanjut.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Sektor privat bisa membantu dengan menyediakan produk-produk dengan kemasan yang ramah lingkungan. Hal ini diperlukan agar sampah yang dihasilkan mudah diolah sehingga tidak dimanfaatkan untuk kegunaan lainnya.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Untuk mendukung itu semua, ada baiknya pemerintah dapat menyediakan fasilitas dan teknologi yang mampu dimanfaatkan masyarakat untuk mengolah sampah di lingkup perumahan. Jadi, mendorong partisipasi kesadaran masyarakat untuk mengolah sampahnya secara mandiri di sekitar lingkungan permukiman. Selain itu, pemerintah juga terus berupaya semaksimalnya untuk mendorong keberhasilan program pemanfaatan sampah untuk pembangkit listrik tenaga sampah (PLTSa), waste to energy, dan daur ulang sampah agar menjadi lebih berdaya guna. Dengan demikian, rencana pemerintah untuk meniadakan pembangunan TPA pada tahun 2030 dapat terealisasi. (LITBANG KOMPAS)
      </p>
    </div>
  );
};

export default Article;
