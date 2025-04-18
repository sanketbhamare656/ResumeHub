import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
      </main>
      <footer className="w-full py-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ResumeHub.Developer with &#128400; by <a href="https://sanketbhamare656.github.io/sanketportfolio/" target="_blank">Sanket Bhamare</a></p>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
