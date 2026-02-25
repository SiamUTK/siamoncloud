import Container from "./PageContainer";

function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex h-8 items-center sm:h-9 lg:h-11">
          <img
            src="https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/logos/logo-web.png"
            alt="Siam On Cloud Logo"
            width="320"
            height="80"
            className="block h-auto max-h-full w-auto max-w-full object-contain"
            loading="eager"
          />
        </div>
        <div className="text-sm text-slate-500">Header Placeholder</div>
      </Container>
    </header>
  );
}

export default Header;
