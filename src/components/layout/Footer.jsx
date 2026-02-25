import Container from "./PageContainer";
import Icon from "../ui/Icon";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-300">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img
                src="https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/logos/logo-white-web.png"
                alt="Siam On Cloud Logo"
                className="w-auto max-h-10 md:max-h-11"
                style={{
                  height: "auto",
                  maxWidth: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              AI-powered travel technology for flight booking, visa support, and
              modern agency operations.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="transition hover:text-cyan-300" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="transition hover:text-cyan-300" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="transition hover:text-cyan-300" href="/services">
                  Services
                </a>
              </li>
              <li>
                <a className="transition hover:text-cyan-300" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="transition hover:text-cyan-300" href="/terms">
                  Terms of Use
                </a>
              </li>
              <li>
                <a className="transition hover:text-cyan-300" href="/privacy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  className="transition hover:text-cyan-300"
                  href="mailto:info@siamon.cloud"
                >
                  info@siamon.cloud
                </a>
              </li>
              <li>
                <a
                  className="transition hover:text-cyan-300"
                  href="tel:+66990009588"
                >
                  +66 99 000 9588
                </a>
              </li>
              <li>Pathumwan, Bangkok 10330</li>
            </ul>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/siamoncloud"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <Icon name="Linkedin" size={16} />
              </a>
              <a
                href="https://www.facebook.com/siamoncloud"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <Icon name="Facebook" size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-5 text-xs text-slate-500">
          © {new Date().getFullYear()} SIAM ON CLOUD CO., LTD. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
