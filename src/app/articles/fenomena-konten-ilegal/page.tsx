import { Metadata } from "next";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Fenomena Konten Ilegal di Ruang Digital",
  description:
    "Analisis etika profesi terhadap maraknya konten ilegal di ruang digital sebagai kegagalan etis kolektif.",
};

export default function Page() {
  return <ArticleClient />;
}
