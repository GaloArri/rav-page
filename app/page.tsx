import Header from "./components/Header";
import Carousel from "./components/Carousel";
import FeatureHighlights from "./components/FeatureHighlights";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className=" w-full"></div>
      <Header />
      <main className="flex-grow">
        <Carousel />
        <LandingPage />
        {/* <FeatureHighlights /> */}
      </main>
      <Footer />
    </div>
  );
}
