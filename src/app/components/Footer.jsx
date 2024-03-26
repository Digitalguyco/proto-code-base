import React from "react";
import Image from "next/image";
import Logo from '../../../public/logo.svg';



const Footer = () => {
    return (
        <div className="w-full h-[534px] px-8 py-[49px] bg-sky-950 flex-col justify-center items-center gap-[70px] inline-flex">
        <div className="justify-start items-center gap-[100px] inline-flex">
            <div className="w-[250px] h-[237.73px] relative">
                <div className="w-[250px] h-[237.73px] left-0 top-0 absolute bg-white bg-opacity-10 blur-[100px]" />
                <div className="w-[181px] h-[169px] left-[34.50px] top-[33.66px] absolute flex-col justify-start items-center gap-2.5 inline-flex">
                    <Image alt='logo' src={Logo} width={130} height={130} />
                    <div className="text-yellow-400 text-2xl font-semibold font-['Montserrat'] tracking-tight">The Best of Us</div>
                </div>
            </div>
            <div className="flex-col justify-center items-start gap-5 inline-flex">
                <div className="text-neutral-100 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Get In Touch</div>
                <div className="w-[433px] text-zinc-400 text-lg font-normal font-['Roboto'] leading-[35px] tracking-tight">Have questions, suggestions, or want to collaborate? Reach out to us. Your thoughts matter, and we're here to listen. Contact us for anything you need.</div>
                <div className="justify-start items-center gap-5 inline-flex">
                    <div className="w-[30px] h-[30px] p-1.5 bg-neutral-100 rounded-[40px] justify-center items-center flex">
                        <div className="w-[18px] h-[18px] relative flex-col justify-start items-start flex" />
                    </div>
                    <div className="w-[30px] h-[30px] p-1.5 bg-neutral-100 rounded-[40px] justify-center items-center flex">
                        <div className="w-[18px] h-[18px] relative flex-col justify-start items-start flex" />
                    </div>
                    <div className="w-[30px] h-[30px] p-1.5 bg-neutral-100 rounded-[40px] justify-center items-center flex">
                        <div className="w-[18px] h-[18px] relative flex-col justify-start items-start flex" />
                    </div>
                    <div className="w-[30px] h-[30px] p-1.5 bg-neutral-100 rounded-[40px] justify-center items-center flex">
                        <div className="w-[18px] h-[18px] relative flex-col justify-start items-start flex" />
                    </div>
                    <div className="w-[30px] h-[30px] p-1.5 bg-neutral-100 rounded-[40px] justify-center items-center flex">
                        <div className="w-[18px] h-[18px] relative flex-col justify-start items-start flex" />
                    </div>
                    <div className="w-[30px] h-[30px] p-1.5 bg-neutral-100 rounded-[40px] justify-center items-center flex">
                        <div className="w-[18px] h-[18px] relative flex-col justify-start items-start flex" />
                    </div>
                </div>
            </div>
            <div className="px-[25px] py-10 bg-white bg-opacity-10 rounded-[20px] flex-col justify-start items-center gap-[34px] inline-flex">
                <div className="flex-col justify-start items-center gap-[30px] flex">
                    <div className="flex-col justify-start items-center gap-2.5 flex">
                        <div className="text-neutral-100 text-2xl font-semibold font-['Montserrat'] tracking-tight">Subscribe Now</div>
                        <div className="w-[327px] text-center text-zinc-400 text-sm font-normal font-['Roboto'] leading-[25px] tracking-tight">Stay informed and inspired with our newsletter. Join us for a journey of discovery, celebrating the best of our community. Subscribe now!</div>
                    </div>
                    <div className="w-[330px] pl-8 pr-[216px] py-[11px] bg-neutral-100 rounded-[20px] justify-start items-center inline-flex">
                        <div className="text-neutral-400 text-sm font-normal font-['Montserrat'] leading-[25px] tracking-tight">Enter email</div>
                    </div>
                </div>
                <div className="w-[330px] px-[30px] py-2.5 bg-green-500 rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-sky-950 text-base font-medium font-['Montserrat'] leading-[25px] tracking-tight">Subscribe</div>
                </div>
            </div>
        </div>
        <div className="flex-col justify-center items-center gap-[50px] flex">
            <div className="opacity-40 text-neutral-100 text-sm font-normal font-['Roboto'] tracking-tight">Copyrights @2024 | The Best of Us</div>
        </div>
    </div>
    );
  };
  
  export default Footer;