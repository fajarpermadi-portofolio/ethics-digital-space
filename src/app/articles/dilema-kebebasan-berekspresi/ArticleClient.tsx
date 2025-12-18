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
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight">
        Dilema Kebebasan Berekspresi di Era Digital
      </h1>

      {/* Meta */}
      <p className="mt-4 text-slate-400 text-sm">
        Ethics in Digital Space • 6 min read
      </p>
      {/* Content */}
      <div className="mt-10 space-y-6 text-slate-200 leading-relaxed">
        <p>
          Kebebasan berekspresi merupakan hak fundamental yang
          dijamin dalam masyarakat demokratis dan menjadi salah satu
          pilar utama dalam kehidupan publik modern. Di ruang
          digital, kebebasan ini mengalami perluasan yang signifikan
          karena setiap individu dapat menyampaikan pendapat dan
          informasi secara terbuka tanpa hambatan geografis maupun
          struktural.
        </p>

        <p>
          Namun, kebebasan berekspresi pada dasarnya tidak bersifat
          absolut. Dalam praktiknya, kebebasan ini sering kali
          digunakan sebagai pembenaran atas penyebaran konten yang
          merugikan pihak lain, seperti ujaran kebencian, fitnah, dan
          disinformasi. Situasi ini menunjukkan adanya kesalahpahaman
          dalam memaknai kebebasan berekspresi sebagai kebebasan tanpa
          batas.
        </p>

        <p>
          Dilema etis muncul ketika upaya pembatasan terhadap konten
          ilegal dianggap sebagai ancaman terhadap kebebasan
          berekspresi. Penanganan konten ilegal melalui instrumen
          hukum sering kali memicu polemik, terutama ketika
          bersinggungan dengan kritik terhadap kebijakan publik atau
          pihak berkuasa. Di satu sisi, regulasi diperlukan untuk
          melindungi masyarakat dari dampak negatif konten ilegal.
          Di sisi lain, penerapan hukum yang tidak proporsional
          berpotensi mengekang hak berekspresi yang sah.
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-slate-300">
          “Kebebasan berekspresi hanya dapat bermakna jika dijalankan
          bersama kesadaran etis dan tanggung jawab sosial.”
        </blockquote>

        <p>
          Dari sudut pandang etika profesi, dilema tersebut menuntut
          adanya keseimbangan antara hak dan kewajiban. Etika profesi
          menegaskan bahwa kebebasan berekspresi harus disertai
          dengan kesadaran moral atas dampak sosial dari setiap
          ekspresi yang disampaikan. Tanpa kesadaran tersebut,
          kebebasan justru berpotensi menimbulkan kerugian sosial
          yang lebih luas dibandingkan manfaat yang dihasilkan.
        </p>

        <p>
          Oleh karena itu, etika profesi berperan sebagai kompas
          moral dalam menentukan batas etis kebebasan berekspresi di
          ruang digital. Dengan menjadikan etika sebagai landasan,
          kebebasan berekspresi dapat tetap terlindungi tanpa
          mengorbankan nilai kemanusiaan, keadilan, dan ketertiban
          sosial. Pendekatan ini menempatkan kebebasan berekspresi
          bukan sebagai hak tanpa batas, melainkan sebagai kebebasan
          yang bertanggung jawab.
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
