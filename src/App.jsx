import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-10 sm:py-14">
          <HomePage />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
