import Image from "next/image";

const Article3 = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-green-700 mb-6 text-2xl sm:text-4xl font-bold">
        Pengelolaan Sampah di ITB
      </h1>
      <div className="w-full mb-6 flex justify-center sm:justify-start">
        <Image
          className="relative z-10 object-cover object-top w-full max-w-[500px] rounded-lg"
          src="/tipesampah.png" 
          alt="tempat sampah di itb"
          width={1200}
          height={803}
        />
      </div>
      <p className="text-lg text-gray-700 mb-4">
        Pengelolaan sampah yang efektif dimulai dari pemilahan sampah di sumbernya. Pemilahan ini penting untuk memastikan bahwa setiap jenis sampah dapat dikelola dan diolah dengan cara yang paling sesuai, sehingga mengurangi dampak negatif terhadap lingkungan. Di ITB sendiri, disediakan 4 jenis kategori tempat sampah yang dapat digunakan untuk memilah kategori sampah.  
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Sampah sisa makanan (warna hijau) mencakup semua limbah organik seperti sisa makanan, kulit buah, sayuran, dan limbah dapur lainnya. Sampah jenis ini mudah terurai dan dapat diolah menjadi kompos. Pengolahan sampah sisa makanan melalui kompos memiliki banyak manfaat, termasuk pengurangan limbah yang masuk ke tempat pembuangan akhir (TPA) dan produksi pupuk organik yang bermanfaat untuk pertanian dan taman.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Sampah guna ulang (warna kuning) mencakup bahan-bahan yang masih dapat digunakan kembali tanpa harus melalui proses daur ulang yang kompleks. Contoh sampah guna ulang adalah botol plastik, kaleng, dan wadah kaca. Barang-barang ini dapat dibersihkan dan digunakan kembali untuk berbagai keperluan, seperti penyimpanan atau kerajinan tangan. Pemanfaatan kembali barang-barang ini dapat mengurangi kebutuhan akan produk baru dan menghemat sumber daya alam.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Sampah daur ulang (warna biru) mencakup bahan-bahan yang dapat diproses kembali menjadi produk baru. Contoh sampah daur ulang adalah kertas, kardus, dan karton. Pengumpulan dan daur ulang sampah kertas membantu mengurangi penebangan pohon dan menghemat energi yang digunakan dalam produksi kertas baru. Selain itu, mendaur ulang kertas dan kardus juga membantu mengurangi volume sampah yang berakhir di TPA.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Sampah residu (warna abu-abu) mencakup bahan-bahan yang tidak dapat terurai, digunakan ulang, atau didaur ulang dengan mudah. Contoh sampah residu adalah kaca, kain, baterai, dan limbah elektronik. Pengelolaan sampah residu memerlukan perhatian khusus karena seringkali mengandung bahan berbahaya yang dapat mencemari lingkungan. Sampah residu harus dibuang dengan cara yang aman dan sesuai dengan peraturan yang berlaku untuk menghindari kerusakan lingkungan dan risiko kesehatan.
      </p>
      <p className="text-lg text-gray-700 mb-4">
      Dengan memilah sampah menjadi empat kategori ini, kita dapat meningkatkan efektivitas pengelolaan sampah di ITB, mengurangi dampak negatif terhadap lingkungan, dan memaksimalkan penggunaan kembali dan daur ulang bahan-bahan yang masih bernilai. Upaya ini membutuhkan partisipasi aktif dari seluruh mahasiswa untuk menjaga kelestarian lingkungan demi generasi mendatang.
      </p>
    </div>
  );
};

export default Article3;
