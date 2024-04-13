import HeroSection from "@/components/home/hero/HeroSection";
import { useTranslation } from "../i18n";
import Features from "@/components/home/features/Features";
import About from "@/components/home/about/About";
import Contact from "@/components/home/contact/Contact";

export default async function Page({ params }: { params: { lng: string } }) {
  const { t } = await useTranslation(params.lng, "home");
  return (
    <main className="md:container px-4 space-y-24 py-24">
      <HeroSection
        content={{
          title: t("home.title"),
          description: t("home.description"),
          cta: t("home.cta"),
        }}
      />
      <Features
        content={{
          title: t("features.title"),
          description: t("features.description"),
          card: {
            one: {
              title: t("features.card.one.title"),
              description: t("features.card.one.description"),
            },
            two: {
              title: t("features.card.two.title"),
              description: t("features.card.two.description"),
            },
            three: {
              title: t("features.card.three.title"),
              description: t("features.card.three.description"),
            },
          },
        }}
      />
      <About
        content={{
          title: t("about.title"),
          description: t("about.description"),
        }}
      />
      <Contact
        content={{
          title: t("contact.title"),
          description: {
            one: t("contact.description.one"),
            two: t("contact.description.two"),
            three: t("contact.description.three"),
          },
        }}
      />
    </main>
  );
}
