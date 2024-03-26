import Image from "next/image";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />

    {/* about */}
    <div className="w-[1234px] h-[464px] justify-start items-center gap-[60px] inline-flex">
    <div className="flex-col justify-center items-start gap-5 inline-flex">
        <div className="text-sky-950 text-4xl font-semibold font-['Montserrat'] tracking-tight">About Us</div>
        {/* <div className="w-[626px]"><span style="text-neutral-500 text-2xl font-normal font-['Roboto'] leading-[50px] tracking-tight">Explore the rich tapestry of stories that define "</span><span style="text-yellow-400 text-2xl font-normal font-['Roboto'] leading-[50px] tracking-tight">The Best of Us.</span><span style="text-neutral-500 text-2xl font-normal font-['Roboto'] leading-[50px] tracking-tight">" Our narrative is woven from the threads of exceptional individuals, innovative businesses, and vibrant communities across Africa and the diaspora. Join us on a journey of discovery as we celebrate the diverse and extraordinary facets of our shared identity. Together, let's elevate and showcase the best that emanates from our continent and beyond.</span></div> */}
    </div>
    {/* <Image  src={"/aboutimg.png"} /> */}
    </div>

    <Footer />
    </>

  );
}
