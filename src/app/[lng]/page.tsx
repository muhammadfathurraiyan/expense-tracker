import Link from "next/link";
import { useTranslation } from "../i18n";
import HeroSection from "@/components/home/HeroSection";
import About from "@/components/home/About";

export default async function Page({ params }: { params: { lng: string } }) {
  const { t } = await useTranslation(params.lng);
  return (
    <main className="md:max-w-screen-md mx-auto max-md:px-2">
      <HeroSection />
      <About />
      {/* <h1>{t("title")}</h1>
      <Link href={`/${params.lng}/second-page`}>second page</Link> */}
    </main>
  );
}
