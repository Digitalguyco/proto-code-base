import Image from "next/image";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./blog/Home";

export default function Main() {
  return (
    <>
    <Navbar />
    <div className="mx-32 overflow-x-hidden ">
        <Home/>
    </div>

    <Footer />
    </>

  );
}
