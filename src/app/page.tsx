import { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Konten Ilegal di Ruang Digital",
  description:
    "Kajian informatif mengenai konten ilegal, kebebasan berekspresi, dan tanggung jawab etika profesi di era digital.",
};

import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-32">
      {/* ================= HERO SECTION ================= */}
      <Reveal>
      <section className="relative overflow-hidden py-32 text-center">
        {/* background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Konten Ilegal di Ruang Digital
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
          Menelaah dilema kebebasan berekspresi dan tanggung jawab
          etika profesi dalam menghadapi dinamika ruang digital
          modern.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/articles"
            className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition"
          >
            Explore Articles
          </Link>

          <a
            href="/makalah-konten-ilegal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-slate-700 rounded-md text-slate-300 hover:text-white hover:border-slate-500 transition"
          >
            View Makalah (PDF)
          </a>
        </div>
      </section>
      </Reveal>
      {/* ================= CONTEXT SECTION ================= */}
      <Reveal>
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-semibold">
          Why This Topic Matters
        </h2>

        <p className="text-slate-300 leading-relaxed">
          Perkembangan teknologi digital telah menciptakan ruang
          baru bagi kebebasan berekspresi, namun juga memunculkan
          tantangan serius berupa maraknya penyebaran konten ilegal.
          Fenomena ini tidak hanya berkaitan dengan aspek hukum,
          tetapi juga menyentuh dimensi etika profesi dan tanggung
          jawab moral dalam kehidupan bermasyarakat.
        </p>

        <p className="text-slate-300 leading-relaxed">
          Melalui pendekatan etika profesi, website ini berupaya
          menghadirkan refleksi kritis mengenai bagaimana kebebasan
          berekspresi dapat dijalankan secara bertanggung jawab
          tanpa mengorbankan nilai kemanusiaan dan kepentingan
          publik.
        </p>
      </section>
      </Reveal>
{/* ================= KEY ISSUES ================= */}
<Reveal>
<section className="max-w-6xl mx-auto space-y-12">
  <div className="text-center">
    <h2 className="text-3xl font-semibold">
      Key Issues in Digital Space
    </h2>
    <p className="mt-3 text-slate-400">
      Tantangan utama dalam pengelolaan kebebasan berekspresi di ruang digital
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-3">
    <InfoCard
      title="Ujaran Kebencian & Disinformasi"
      content="Konten bermuatan kebencian dan hoaks menyebar cepat melalui media digital, memperbesar konflik sosial dan merusak kepercayaan publik."
    />

    <InfoCard
      title="Anonimitas Pengguna"
      content="Karakter anonim di ruang digital sering melemahkan rasa tanggung jawab moral, sehingga pelanggaran etika lebih mudah terjadi."
    />

    <InfoCard
      title="Pendekatan Hukum yang Terbatas"
      content="Penegakan hukum cenderung bersifat represif dan belum menyentuh akar persoalan etis dalam perilaku pengguna digital."
    />
  </div>
</section>
</Reveal>
{/* ================= ETHICAL INSIGHTS ================= */}
<Reveal>
<section className="max-w-4xl mx-auto space-y-6 text-center">
  <h2 className="text-3xl font-semibold">
    Ethical Insights
  </h2>

  <p className="text-slate-300 leading-relaxed">
    Kajian ini menegaskan bahwa kebebasan berekspresi di ruang digital
    bukanlah kebebasan tanpa batas. Setiap ekspresi membawa
    konsekuensi sosial, moral, dan profesional yang harus
    dipertanggungjawabkan.
  </p>

  <p className="text-slate-300 leading-relaxed">
    Etika profesi berperan sebagai penyeimbang antara hak individu
    dan kepentingan publik. Tanpa kesadaran etis, ruang digital
    berisiko menjadi sarana normalisasi pelanggaran moral meskipun
    regulasi hukum telah diterapkan.
  </p>

  <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-slate-300 max-w-2xl mx-auto">
    “Kebebasan berekspresi hanya bermakna jika dijalankan bersama
    tanggung jawab etis.”
  </blockquote>
</section>
</Reveal>
{/* ================= CASE STUDY ================= */}
<Reveal>
<section className="max-w-6xl mx-auto space-y-12">
  <div className="text-center">
    <h2 className="text-3xl font-semibold">
      Case Study
    </h2>
    <p className="mt-3 text-slate-400">
      Contoh nyata dilema kebebasan berekspresi dan etika di ruang digital
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-3">
    <CaseCard
      title="Hoaks dan Disinformasi"
      problem="Informasi palsu menyebar cepat melalui media sosial dan memicu kepanikan serta konflik sosial."
      ethical="Kurangnya kesadaran etis dalam memverifikasi informasi sebelum menyebarkannya."
      insight="Kebebasan berekspresi harus diiringi tanggung jawab untuk menjaga kebenaran dan kepentingan publik."
    />

    <CaseCard
      title="Ujaran Kebencian Daring"
      problem="Ekspresi kebencian berbasis SARA merusak kohesi sosial dan menormalisasi diskriminasi."
      ethical="Anonimitas digital melemahkan rasa tanggung jawab moral pengguna."
      insight="Etika profesi menuntut penghormatan terhadap martabat manusia dalam setiap ekspresi digital."
    />

    <CaseCard
      title="Kriminalisasi Ekspresi"
      problem="Kritik di media sosial berujung pada proses hukum dan menimbulkan ketakutan berekspresi."
      ethical="Ketegangan antara perlindungan hukum dan kebebasan sipil."
      insight="Pendekatan etika diperlukan agar regulasi bersifat proporsional dan adil."
    />
  </div>
</section>
</Reveal>
{/* ================= TIMELINE ================= */}
<Reveal>
<section className="max-w-4xl mx-auto space-y-10">
  <div className="text-center">
    <h2 className="text-3xl font-semibold">
      Timeline Isu Konten Ilegal
    </h2>
    <p className="mt-3 text-slate-400">
      Perkembangan persoalan konten ilegal dan kebebasan berekspresi
    </p>
  </div>

  <div className="relative border-l border-slate-800 pl-6 space-y-8">
    <TimelineItem
      year="  - -2016"
      title="Meningkatnya Media Sosial"
      description="Pertumbuhan media sosial memperluas ruang kebebasan berekspresi sekaligus mempercepat penyebaran konten bermasalah."
    />

    <TimelineItem
      year="  - -2018"
      title="Lonjakan Hoaks Digital"
      description="Disinformasi politik dan sosial menjadi perhatian serius karena dampaknya terhadap stabilitas publik."
    />

    <TimelineItem
      year="  - -2020"
      title="Penegakan Hukum Intensif"
      description="Pendekatan hukum terhadap konten ilegal diperkuat, namun memunculkan kritik terkait kebebasan berekspresi."
    />

    <TimelineItem
      year="  - -2023"
      title="Fokus Etika dan Literasi Digital"
      description="Kesadaran bahwa solusi jangka panjang memerlukan penguatan etika profesi dan literasi digital."
    />
  </div>
</section>
</Reveal>
{/* ================= ETHICAL PRINCIPLES ================= */}
<Reveal>
<section className="max-w-5xl mx-auto space-y-12">
  <div className="text-center">
    <h2 className="text-3xl font-semibold">
      Ethical Principles
    </h2>
    <p className="mt-3 text-slate-400">
      Prinsip etika yang relevan dalam menghadapi kebebasan berekspresi di ruang digital
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-3">
    <PrincipleCard
      title="Prinsip Tanggung Jawab"
      description="Setiap kebebasan berekspresi membawa konsekuensi moral yang harus dipertanggungjawabkan secara sosial."
    />

    <PrincipleCard
      title="Prinsip Non-Maleficence"
      description="Ekspresi digital tidak boleh menimbulkan kerugian, diskriminasi, atau kekerasan terhadap pihak lain."
    />

    <PrincipleCard
      title="Prinsip Keadilan"
      description="Pengelolaan konten digital harus dilakukan secara adil, proporsional, dan tidak diskriminatif."
    />
  </div>
</section>
</Reveal>
{/* ================= ETHICAL QUOTES ================= */}
<Reveal>
<section className="max-w-4xl mx-auto text-center space-y-6">
  <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-slate-300">
    “Freedom of expression is not only a right but also a responsibility
    to respect the dignity and rights of others.”
  </blockquote>

  <p className="text-sm text-slate-400">
    — Prinsip Etika dalam Kebebasan Berekspresi Digital
  </p>
</section>
</Reveal>

      {/* ================= FEATURED ARTICLES ================= */}
      <Reveal>
      <section className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">
            Featured Discussions
          </h2>
          <p className="mt-3 text-slate-400">
            Tiga bahasan utama dalam kajian etika profesi ruang digital
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <FeatureCard
            title="Fenomena Konten Ilegal"
            description="Konten ilegal sebagai kegagalan etis kolektif di era digital."
            href="/articles/fenomena-konten-ilegal"
          />

          <FeatureCard
            title="Dilema Kebebasan Berekspresi"
            description="Batas antara hak berekspresi dan tanggung jawab sosial."
            href="/articles/dilema-kebebasan-berekspresi"
          />

          <FeatureCard
            title="Tanggung Jawab Etika Profesi"
            description="Peran individu, profesional, platform, dan negara."
            href="/articles/tanggung-jawab-etika-profesi"
          />
        </div>
      </section>
      </Reveal>
      {/* ================= ACADEMIC CTA ================= */}
      <Reveal>
      <section className="border border-slate-800 rounded-xl p-12 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold">
          Academic Reference
        </h2>

        <p className="mt-4 text-slate-300">
          Website ini dikembangkan berdasarkan makalah akademik
          sebagai tugas Ujian Akhir Semester mata kuliah Etika
          Profesi. Untuk pembacaan versi ilmiah lengkap, silakan
          akses dokumen PDF berikut.
        </p>

        <a
          href="/makalah-konten-ilegal.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition"
        >
          Download Makalah PDF
        </a>
      </section>
      </Reveal>
    </div>
  );
}

/* ================= FEATURE CARD ================= */
function FeatureCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group border border-slate-800 rounded-lg p-6 hover:border-slate-600 transition"
    >
      <h3 className="text-xl font-semibold group-hover:text-indigo-400 transition">
        {title}
      </h3>
      <p className="mt-3 text-slate-400 text-sm">
        {description}
      </p>
      <span className="mt-4 inline-block text-sm text-indigo-500">
        Read more →
      </span>
    </Link>
  );
}
function InfoCard({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="border border-slate-800 rounded-lg p-6">
      <h3 className="text-lg font-semibold">
        {title}
      </h3>
      <p className="mt-3 text-slate-400 text-sm leading-relaxed">
        {content}
      </p>
    </div>
  );
}
function CaseCard({
  title,
  problem,
  ethical,
  insight,
}: {
  title: string;
  problem: string;
  ethical: string;
  insight: string;
}) {
  return (
    <div className="border border-slate-800 rounded-lg p-6 space-y-4">
      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="text-sm text-slate-400">
        <strong>Masalah:</strong> {problem}
      </p>

      <p className="text-sm text-slate-400">
        <strong>Dilema Etis:</strong> {ethical}
      </p>

      <p className="text-sm text-slate-300">
        <strong>Insight Etika:</strong> {insight}
      </p>
    </div>
  );
}
function TimelineItem({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative">
      <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-indigo-600" />
      <div className="space-y-1">
        <span className="text-sm text-indigo-400 font-medium">
          {year}
        </span>
        <h3 className="font-semibold">
          {title}
        </h3>
        <p className="text-sm text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}
function PrincipleCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border border-slate-800 rounded-lg p-6">
      <h3 className="text-lg font-semibold">
        {title}
      </h3>
      <p className="mt-3 text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
