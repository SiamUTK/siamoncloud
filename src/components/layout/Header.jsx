import Container from "./PageContainer";
import useLanguage from "@/i18n/useLanguage";

function Header() {
  const { t } = useLanguage();

  return (
    <header className="border-b border-slate-200 bg-white">
      <Container className="flex h-16 items-center justify-between">
        <img
          src="/images/01-Primary-Logo/siam-on-cloud-logo-primary-light.svg"
          alt={t("brand_logo_alt")}
          className="h-12 w-auto object-contain"
        />
        <div className="text-sm text-slate-500">{t("header_placeholder")}</div>
      </Container>
    </header>
  );
}

export default Header;
