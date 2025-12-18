import { Metadata } from "next";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Tanggung Jawab Etika Profesi di Ruang Digital",
  description:
    "Peran individu, profesional TI, platform digital, dan pemerintah dalam menjaga etika ruang digital.",
};

export default function Page() {
  return <ArticleClient />;
}
