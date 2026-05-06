import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import Footer from "../components/Home/Footer";
import './Home.css';
export default function Home() {
  return (
    <>
      <div className="page" style={{left:0}}>
      <Navbar />
      <Hero/>
      <Footer/>
      </div>
    </>
  );
}