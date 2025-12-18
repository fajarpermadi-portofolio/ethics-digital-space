import ArticleCard from "@/components/ArticleCard";

export default function ArticlesPage() {
  return (
    <section className="flex flex-col gap-12">
      {/* Header */}
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">
          Articles
        </h1>
        <p className="mt-4 text-slate-300">
          Kumpulan artikel reflektif yang membahas dilema etika,
          kebebasan berekspresi, dan tanggung jawab profesional
          di ruang digital.
        </p>
      </header>

      {/* Article List */}
      <div className="grid gap-8 md:grid-cols-2">
        <ArticleCard
          title="Fenomena Konten Ilegal di Ruang Digital"
          description="Membahas meningkatnya konten ilegal sebagai kegagalan etis kolektif di era digital."
          href="/articles/fenomena-konten-ilegal"
        />

        <ArticleCard
          title="Dilema Kebebasan Berekspresi di Era Digital"
          description="Analisis kritis tentang batas kebebasan berekspresi dan implikasi etika sosial."
          href="/articles/dilema-kebebasan-berekspresi"
        />

        <ArticleCard
          title="Tanggung Jawab Etika Profesi di Ruang Digital"
          description="Peran individu, profesional TI, platform, dan negara dalam menjaga ruang digital."
          href="/articles/tanggung-jawab-etika-profesi"
        />
      </div>
    </section>
  );
}
