"use client";

import { motion } from "framer-motion";

export default function ArticleClient() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-4xl font-bold tracking-tight">
        Tanggung Jawab Etika Profesi di Ruang Digital
      </h1>

      <p className="mt-4 text-slate-400 text-sm">
        Ethics in Digital Space • 6 min read
      </p>

      {/* Content */}
      <div className="mt-10 space-y-6 text-slate-200 leading-relaxed">
        <p>
          Tantangan etika di ruang digital tidak dapat diselesaikan
          hanya dengan pendekatan hukum semata. Penyebaran konten
          ilegal menunjukkan bahwa persoalan utama terletak pada
          bagaimana kebebasan berekspresi dijalankan tanpa disertai
          tanggung jawab moral yang memadai. Oleh karena itu,
          etika profesi menjadi landasan penting dalam menyeimbangkan
          kebebasan dan perlindungan masyarakat di ruang digital.
        </p>

        <p>
          Individu sebagai pengguna internet memiliki tanggung jawab
          etis untuk menggunakan kebebasan berekspresi secara bijak.
          Setiap konten yang diproduksi dan disebarkan seharusnya
          mempertimbangkan dampak sosial, psikologis, dan moral
          terhadap pihak lain. Kesadaran etika individu merupakan
          benteng pertama dalam mencegah penyebaran konten ilegal.
        </p>

        <p>
          Selain individu, profesi di bidang teknologi informasi
          memegang peran strategis dalam membentuk ekosistem digital
          yang aman dan bertanggung jawab. Etika profesi menuntut
          para profesional teknologi untuk merancang dan mengelola
          sistem digital dengan mempertimbangkan nilai kemanusiaan,
          keadilan, serta kepentingan publik. Kegagalan menjalankan
          tanggung jawab ini dapat memperluas dampak negatif konten
          ilegal secara sistemik.
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-slate-300">
          “Kebebasan berekspresi di ruang digital hanya dapat
          dipertahankan jika seluruh aktor menjalankan tanggung jawab
          etis profesinya secara konsisten.”
        </blockquote>

        <p>
          Penyelenggara platform digital juga memiliki tanggung jawab
          etis dalam mengelola ruang digital yang sehat dan inklusif.
          Kebijakan moderasi konten yang transparan dan akuntabel
          merupakan wujud komitmen etika profesi untuk menyeimbangkan
          kebebasan berekspresi dengan perlindungan masyarakat. Tanpa
          komitmen tersebut, platform digital berisiko menjadi sarana
          penyebaran konten ilegal secara masif.
        </p>

        <p>
          Pemerintah sebagai regulator memiliki tanggung jawab etis
          untuk merumuskan kebijakan yang adil dan proporsional.
          Pendekatan etika profesi mendorong pemerintah untuk tidak
          hanya mengandalkan sanksi hukum, tetapi juga mengembangkan
          strategi preventif melalui pendidikan etika dan peningkatan
          literasi digital. Dengan pendekatan ini, regulasi dapat
          dipahami sebagai upaya perlindungan bersama, bukan
          pembatasan kebebasan.
        </p>

        <p>
          Secara keseluruhan, keseimbangan antara kebebasan
          berekspresi dan perlindungan masyarakat hanya dapat
          terwujud jika seluruh aktor dalam ekosistem digital
          menjalankan tanggung jawab etika profesinya secara
          konsisten. Sinergi antara individu, profesional teknologi,
          platform digital, dan pemerintah menjadi kunci dalam
          membangun ruang digital yang beretika, aman, dan
          bertanggung jawab.
        </p>
        
<a
  href="/makalah-konten-ilegal.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block text-sm text-indigo-400 hover:text-indigo-300 transition"
>
  → Baca versi lengkap makalah (PDF)
</a>
      </div>
    </motion.article>
  );
}
