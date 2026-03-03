import { icons } from "lucide-react";

function Icon({ name, size = 24, className, ...props }) {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon size={size} className={className} {...props} />;
}

export default Icon;
