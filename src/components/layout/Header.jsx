import Container from "./PageContainer";
import useLanguage from "@/i18n/useLanguage";

function Header() {
  const { t } = useLanguage();

  return (
    <header className="border-b border-slate-200 bg-white">
      <Container className="flex h-16 items-center justify-between">
        <img
          src="https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/logos/logo-white-online.png"
          alt={t("brand_logo_alt")}
          className="h-12 w-auto object-contain"
        />
        <div className="text-sm text-slate-500">{t("header_placeholder")}</div>
      </Container>
    </header>
  );
}

export default Header;
