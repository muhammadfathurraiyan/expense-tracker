import { useTranslation } from "@/app/i18n";
import AuthForm from "@/components/auth/AuthForm";

export default async function Page({ params }: { params: { lng: string } }) {
  const { t } = await useTranslation(params.lng, "auth");
  return (
    <main className="md:container min-h-screen flex items-center justify-center px-4 space-y-24 py-24">
      <AuthForm
        content={{
          login: {
            title: t("login.title"),
            description: t("login.description"),
            devider: t("login.devider"),
            footer: t("login.footer"),
            button: t("login.button"),
            placeholder: {
              email: t("login.placeholder.email"),
              password: t("login.placeholder.password"),
            },
          },
          register: {
            title: t("register.title"),
            description: t("register.description"),
            devider: t("register.devider"),
            footer: t("register.footer"),
            placeholder: {
              name: t("register.placeholder.name"),
              email: t("register.placeholder.email"),
              password: t("register.placeholder.password"),
            },
          },
        }}
      />
    </main>
  );
}
