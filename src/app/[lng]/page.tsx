import Link from "next/link";
import { useTranslation } from "../i18n";
import HeroSection from "@/components/home/HeroSection";

export default async function Page({ params }: { params: { lng: string } }) {
  const { t } = await useTranslation(params.lng);
  return (
    <main className="container max-md:px-2">
      <HeroSection />
      <h1>{t("title")}</h1>
      <Link href={`/${params.lng}/second-page`}>second page</Link>
    </main>
  );
}
