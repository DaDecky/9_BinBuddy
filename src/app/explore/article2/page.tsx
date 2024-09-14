import Image from "next/image";

const Article2 = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-green-700 mb-6 text-2xl sm:text-4xl font-bold">
        The Benefits of 3R: Reduce, Reuse, Recycle
      </h1>
      <div className="relative w-full max-h-96 mb-6 flex justify-center">
        <div className="absolute inset-0 w-full rounded-lg bg-white shadow-md"></div>
        <Image
          className="relative z-10 object-cover object-top w-full max-w-[500px] max-h-96 rounded-lg"
          src="/r3.jpg" 
          alt="3R"
          width={1200}
          height={803}
        />

      </div>
      <p className="text-lg text-gray-700 mb-4">
        Konsep 3R (Reduce, Reuse, Recycle) merupakan salah satu pendekatan yang paling efektif dalam pengelolaan sampah dan pelestarian lingkungan. Dengan menerapkan prinsip-prinsip 3R, kita dapat mengurangi dampak negatif terhadap lingkungan dan membantu menciptakan dunia yang lebih bersih dan sehat.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Mengurangi atau reduce berarti meminimalisir jumlah sampah yang kita hasilkan dari awal. Manfaat dari mengurangi antara lain mengurangi tekanan pada tempat pembuangan akhir (TPA) yang sering kali sudah terlalu penuh. Selain itu, mengurangi konsumsi barang-barang juga menghemat sumber daya alam yang terbatas dan mengurangi polusi. Produksi barang-barang baru memerlukan energi dan menghasilkan polusi, sehingga dengan mengurangi konsumsi, kita bisa mengurangi emisi gas rumah kaca dan polusi lainnya yang dihasilkan selama proses produksi.  
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Menggunakan kembali atau reuse berarti memanfaatkan barang-barang yang masih bisa digunakan daripada membuangnya. Manfaat dari menggunakan kembali antara lain mengurangi volume sampah yang harus dibuang. Selain itu, barang-barang yang masih layak pakai tidak perlu dibeli lagi, sehingga kita bisa menghemat uang. Dengan menggunakan kembali barang-barang, kita juga mengurangi kebutuhan untuk memproduksi barang baru, yang berarti mengurangi penggunaan bahan mentah dan energi.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Daur ulang atau recycle berarti mengolah kembali bahan-bahan yang dapat didaur ulang menjadi produk baru. Manfaat dari daur ulang antara lain menghemat sumber daya alam dengan mengurangi kebutuhan akan bahan mentah baru, seperti kayu, logam, dan minyak bumi. Proses daur ulang biasanya membutuhkan lebih sedikit energi dibandingkan dengan produksi barang dari bahan mentah, sehingga mengurangi polusi udara dan air yang dihasilkan dari proses produksi barang baru. Dengan mendaur ulang, kita juga mengurangi jumlah sampah yang berakhir di TPA, sehingga mengurangi dampak negatif terhadap lingkungan.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Penerapan konsep 3R (Reduce, Reuse, Recycle) membawa banyak manfaat bagi lingkungan, ekonomi, dan masyarakat. Dengan mengurangi jumlah sampah yang kita hasilkan, menggunakan kembali barang-barang yang masih layak pakai, dan mendaur ulang bahan-bahan yang dapat didaur ulang, kita dapat membantu melestarikan sumber daya alam, mengurangi polusi, dan menghemat energi. Oleh karena itu, sangat penting bagi kita semua untuk menerapkan prinsip-prinsip 3R dalam kehidupan sehari-hari demi masa depan yang lebih hijau dan berkelanjutan.
      </p>
    </div>
  );
};

export default Article2;
