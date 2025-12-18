import { Metadata } from "next";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Dilema Kebebasan Berekspresi di Era Digital",
  description:
    "Analisis etika profesi tentang dilema kebebasan berekspresi dan tanggung jawab sosial di ruang digital.",
};

export default function Page() {
  return <ArticleClient />;
}
