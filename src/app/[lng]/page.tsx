import Link from "next/link";
import { useTranslation } from "../i18n";

export default async function Page({ params }: { params: { lng: string } }) {
  const { t } = await useTranslation(params.lng);
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${params.lng}/second-page`}>second page</Link>
    </>
  );
}
