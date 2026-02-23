import Container from "./PageContainer";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="flex h-16 items-center justify-between">
        <div className="text-sm text-slate-500">© 2026 Siam On Cloud</div>
        <div className="text-sm text-slate-500">Footer Placeholder</div>
      </Container>
    </footer>
  );
}

export default Footer;
