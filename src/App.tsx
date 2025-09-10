import { BrowserRouter, Routes, Route } from "react-router-dom";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Import page components
import Home from "@/pages/Home";

const App = () => (
  <BrowserRouter>
    <LenisProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LenisProvider>
  </BrowserRouter>
);

export default App;