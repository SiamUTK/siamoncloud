import PageContainer from "../components/layout/PageContainer";

function HomePage() {
  return (
    <PageContainer>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          AI-Powered Travel Platform
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
          This is the starter main content area for Siam On Cloud. The
          architecture is prepared for feature modules, service layers, and
          future AI chatbot integration.
        </p>
      </section>
    </PageContainer>
  );
}

export default HomePage;
