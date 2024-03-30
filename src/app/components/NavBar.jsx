import React from "react";

import Logo from '../../../public/logo.svg';
import pencil from '../../../public/pencil-edit-02.svg';
import Image from "next/image";
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="w-[1440px] h-[120px] px-[89px] py-[30px] justify-between items-center inline-flex">
        <Image width={70} height={60} src={Logo} alt='logo'/>
        <div className="h-[42px] px-5 py-3 bg-zinc-100 bg-opacity-90 rounded-[40px] border border-neutral-400 justify-start items-center gap-2.5 flex">
            <div className="w-[18px] h-[18px] relative" />
            <div className="text-neutral-400 text-sm font-normal font-['Montserrat']">Search Articles.......</div>
        </div>
        <div className="justify-start items-center gap-[50px] flex">
            <div className="text-sky-950 text-lg font-normal font-['Montserrat'] tracking-tight">Stories</div>
            <div className="text-sky-950 text-lg font-normal font-['Montserrat'] tracking-tight">About Us</div>
            <div className="text-sky-950 text-lg font-normal font-['Montserrat'] tracking-tight">Spotlight</div>
            <div className="text-sky-950 text-lg font-normal font-['Montserrat'] tracking-tight">Contact Us</div>
        </div>
        <Link href='/write' className="justify-start items-center gap-2.5 flex">
            <Image className="w-[30px] h-[30px] relative"  width={30} height={30} src={pencil} alt='pencil'/>
            <div className="text-sky-950 text-lg font-normal font-['Montserrat'] tracking-tight">Write</div>
        </Link>
    </nav>
    );
  };
  
  export default Navbar;