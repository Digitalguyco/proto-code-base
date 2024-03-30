"use client";

import Image from "next/image";
import Logo from '../../../public/logo.svg';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";


const WritePage = () => {

    return(
        <div>

            <div className="mx-32 mt-8 overflow-x-auto">
             <Image width={70} height={60} src={Logo} className="" alt='logo'/>

            <div className="w-full h-[100px] mt-8 pl-[38px]  pr-[1050px] pt-7 pb-[33px] rounded-[20px] border border-neutral-400 justify-start items-center flex">
                <div className="text-neutral-400 text-[32px] font-medium font-['Montserrat'] tracking-tight">Title</div>
            </div>
            <div className="w-full h-[428px] mt-6 pl-[38px] pr-[855px] pt-7 pb-[365px] rounded-[20px] border border-neutral-400 justify-start items-center inline-flex">
            <div className="self-stretch justify-start items-center gap-[25px] inline-flex">
                <div className="w-[35px] h-[35px] relative" />
                <div className="text-neutral-400 text-2xl font-normal font-['Montserrat'] tracking-tight">Tell your story........</div>
            </div>

          
        </div>
             <div className="w-[229px] mt-4 h-[45px] px-[30px] py-2.5 bg-green-500 bg-opacity-30 rounded-[20px]  gap-2.5 self-center">
                <div className="text-neutral-100 text-xl font-medium font-['Montserrat'] leading-[25px] tracking-tight">Share Your Story</div>
            </div>
        </div>
            
        </div>
    )
};


export default WritePage;