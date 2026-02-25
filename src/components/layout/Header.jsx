import Container from "./PageContainer";

function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container className="flex h-16 items-center justify-between">
        <img
          src="https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/logos/logo-white-online.png"
          alt="Siam On Cloud Logo"
          className="h-12 w-auto object-contain"
        />
        <div className="text-sm text-slate-500">Header Placeholder</div>
      </Container>
    </header>
  );
}

export default Header;
