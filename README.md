# Bin Buddy
Bin Buddy adalah sebuah aplikasi yang memiliki fitur mencari dan mengarahkan lokasi tong sampah terdekat berdasarkan lokasi pengguna di daerah ITB Ganesha untuk membantu Warga ITB dalam menjaga kebersihan di Kampus.


## Teknologi, bahasa, dan framework yang digunakan.

- Programming Language: Javascript & Typescript
- Framework : Next.Js
- Styling : Tailwind CSS
- Database : Supabase (PostgreSQL)
- ORM : Prisma


## Struktur program.

Secara garis besar, aplikasi BinBuddy ini terbagi menjadi 5 laman tampilan yaitu Homepage, Maps, Review, Explore, dan About Us. Homepage adalah laman tampilan awal saat membuka aplikasi BinBuddy dan sekaligus menjadi gerbang menuju laman lainnya. Maps merupakan laman yang menampilkan lokasi tong sampah yang berada di ITB Ganesha dan dapat menampilkan rute terdekat menuju tong sampah yang diinginkan atau terdekat dengan lokasi kita. Review adalah laman yang menampilkan ulasan dari pengguna serta dapat menampung ulasan baru dari para pengguna BinBuddy. Explore merupakan laman yang berisikan artikel-artikel yang berhubungan dengan kebersihan lingkungan seperti cara mengolah sampah. About Us merupakan laman yang berisikan informasi mengenai aplikasi BinBuddy serta profil dari masing-masing perancangnya, selain itu juga terdapat kontak email yang dapat dihubungi apabila terdapat masalah. 




## Cara menjalankan program
Program dapat dijalankan dengan membuka [tautan ini](https://itb-binbuddy.vercel.app/). Namun, jika ingin menjalankan secara lokal, dapat mengikuti langkah-langkah berikut.


### Prasyarat
Pastikan Git dan Node.js sudah terinstall pada komputer. Berikut adalah sumber installasi untuk kedua kakas tersebut.
- Git : https://git-scm.com/downloads
- Node.js : https://nodejs.org/en/download/package-manager

### Buka Terminal
Buka terminal, seperti CMD, Powershell, atau terminal lainnya.
### Clone Repository dan masuk ke dalam repository
Pada terminal, jalankan perintah berikut baris demi baris
```bash
git clone https://github.com/DaDecky/9_BinBuddy.git
cd 9_BinBuddy
```
### Lakukan instalasi Dependencies
```bash
npm install
```
### Buat file .env
1. Salin file .env.example dan ganti nama file yang tersalin menjadi .env
2. Ganti data DATABASE_URL dan DIRECT_URL berdasarkan database Supabase.
### Push schema Prisma
```bash
npx prisma push
```
### Build website
```bash
npm run build
```
### Jalankan Website secara lokal
```bash
npm run start
```

## Anggota kelompok beserta role-nya

|Nama|NIM TPB/NIM Jurusan|Role|
|---|---|---|
|Muhammad Dicky Isra|19623068/13523075|Software Developer|
|Sharon Darma Putra|19623106/18223107|Software Developer|
|Filbert Engyo|19623251/13523163|Software Developer|
|Muhammad Timur Kanigara|19623038/13523055|Software Developer|
|Kenneth Ricardo Chandra|19623177/13523022|Game Developer/Software Developer|
|Vandega Arozan Musholine|19623231/18223010|Product Manager|
|Indana Aulia Ayundazulfa|19623026/18223100|Product Manager|
|Albertus Christian Poandy|19623210/13523077|Data Scientist|
|Alma Felicia Vielrizki|19623171/18223112|Data Scientist|
|Audy Alicia Renatha Tirayoh|19623169/18223097|Data Scientist|
|Benedictus Nelson|19623104/13523150|UI/UX|


## Referensi belajar
- Next.Js  : https://nextjs.org/docs 
- Tailwind : https://tailwindcss.com/docs/
