type BrandLogoBaseProps = {
  alt: string;
  variant?: "auto" | "dark" | "light";
  darkClassName?: string;
  lightClassName?: string;
  loading?: "eager" | "lazy";
  decoding?: "async" | "auto" | "sync";
};

type BrandLogoPresetSize = "nav" | "header" | "footer" | "homeFooter";

type BrandLogoPresetProps = BrandLogoBaseProps & {
  size?: BrandLogoPresetSize;
  className?: string;
};

type BrandLogoCustomProps = BrandLogoBaseProps & {
  size: "custom";
  className: string;
};

type BrandLogoProps = BrandLogoPresetProps | BrandLogoCustomProps;

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function sizeClassName(size: BrandLogoPresetSize | "custom") {
  switch (size) {
    case "nav":
      return "h-8 w-auto object-contain md:h-9";
    case "header":
      return "h-12 w-auto object-contain";
    case "footer":
      return "h-9 w-auto object-contain";
    case "homeFooter":
      return "h-12 w-auto object-contain";
    case "custom":
      return "";
    default:
      return "h-10 w-auto object-contain";
  }
}

export default function BrandLogo({
  alt,
  variant = "auto",
  size = "header",
  className,
  darkClassName = "dark:hidden",
  lightClassName = "hidden dark:block",
  loading,
  decoding,
}: BrandLogoProps) {
  const showDark = variant !== "light";
  const showLight = variant !== "dark";
  const baseClassName = joinClasses(sizeClassName(size), className);

  const darkLogoClassName =
    variant === "auto"
      ? joinClasses(baseClassName, darkClassName)
      : baseClassName;
  const lightLogoClassName =
    variant === "auto"
      ? joinClasses(baseClassName, lightClassName)
      : baseClassName;

  return (
    <>
      {showDark && (
        <img
          src="/images/logo/logo-dark.svg"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = "/images/logo/logo-dark.png";
          }}
          alt={alt}
          className={darkLogoClassName}
          loading={loading}
          decoding={decoding}
        />
      )}
      {showLight && (
        <img
          src="/images/logo/logo-dark.svg"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = "/images/logo/logo-dark.png";
          }}
          alt={alt}
          className={lightLogoClassName}
          loading={loading}
          decoding={decoding}
        />
      )}
    </>
  );
}
