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
        Fenomena Konten Ilegal di Ruang Digital
      </h1>

      <p className="mt-4 text-slate-400 text-sm">
        Ethics in Digital Space • 7 min read
      </p>

      {/* Content */}
      <div className="mt-10 space-y-6 text-slate-200 leading-relaxed">
        <p>
          Ruang digital telah berkembang menjadi ruang publik baru
          yang memungkinkan masyarakat mengekspresikan pendapat,
          berbagi informasi, serta membangun interaksi sosial secara
          cepat dan luas. Namun, keterbukaan ini juga menghadirkan
          tantangan serius berupa meningkatnya penyebaran konten
          ilegal yang melanggar hukum, norma sosial, dan nilai moral
          masyarakat.
        </p>

        <p>
          Konten ilegal di ruang digital mencakup berbagai bentuk,
          seperti ujaran kebencian, hoaks, pornografi, pencemaran nama
          baik, hingga penipuan daring. Keberadaan konten tersebut
          tidak hanya merugikan individu secara personal, tetapi juga
          berpotensi merusak ketertiban sosial dan menurunkan
          kepercayaan publik terhadap ruang digital sebagai media
          komunikasi.
        </p>

        <p>
          Dari perspektif etika profesi, fenomena ini tidak dapat
          dipahami semata-mata sebagai pelanggaran hukum. Penyebaran
          konten ilegal mencerminkan lemahnya internalisasi nilai
          tanggung jawab moral dalam pemanfaatan teknologi informasi.
          Kebebasan berekspresi yang dimiliki pengguna ruang digital
          kerap tidak diiringi dengan kesadaran etis atas dampak
          sosial dari konten yang diproduksi dan disebarkan.
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-slate-300">
          “Konten ilegal bukan hanya persoalan hukum, tetapi juga
          cerminan kegagalan etis kolektif dalam memanfaatkan
          kebebasan berekspresi secara bertanggung jawab.”
        </blockquote>

        <p>
          Karakteristik ruang digital seperti anonimitas, kecepatan
          distribusi informasi, dan minimnya kontrol sosial turut
          memperparah penyebaran konten ilegal. Banyak pengguna tidak
          menyadari bahwa aktivitas di ruang siber memiliki
          konsekuensi etis yang setara dengan tindakan di dunia
          nyata. Hal ini menunjukkan bahwa perkembangan teknologi
          sering kali melampaui kesiapan etika penggunanya.
        </p>

        <p>
          Oleh karena itu, dalam kerangka etika profesi, fenomena
          konten ilegal harus dipahami sebagai masalah etika
          kolektif. Etika profesi berfungsi sebagai instrumen
          normatif yang mengarahkan pemanfaatan teknologi agar tetap
          selaras dengan nilai kemanusiaan, kepentingan publik, dan
          tanggung jawab sosial. Tanpa penguatan etika profesi,
          ruang digital berisiko terus menjadi sarana reproduksi
          pelanggaran moral meskipun regulasi hukum telah diterapkan.
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
