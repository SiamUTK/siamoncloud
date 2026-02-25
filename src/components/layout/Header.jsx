import Container from "./PageContainer";

function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container className="flex h-16 items-center justify-between">
        <div className="text-lg font-semibold tracking-tight">
          Siam On Cloud
        </div>
        <div className="text-sm text-slate-500">Header Placeholder</div>
      </Container>
    </header>
  );
}

export default Header;
