import Container from "./PageContainer";
import useLanguage from "@/i18n/useLanguage";
import BrandLogo from "@/components/common/BrandLogo";

function Header() {
  const { t } = useLanguage();

  return (
    <header className="border-b border-slate-200 bg-white">
      <Container className="flex h-16 items-center justify-between">
        <BrandLogo alt={t("brand_logo_alt")} variant="dark" size="header" />
        <div className="text-sm text-slate-500">{t("header_placeholder")}</div>
      </Container>
    </header>
  );
}

export default Header;
