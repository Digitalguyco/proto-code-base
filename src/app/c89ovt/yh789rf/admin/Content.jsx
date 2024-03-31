"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// c89ovt/yh789rf/admin


const ContentPage = () => {
    return (
            <div className=" m-12 flex-col w-full ">          
                <div className="w-[1120px] h-[85px] py-5 justify-between items-center inline-flex">
                    <div className="text-sky-950 text-2xl font-normal font-['Montserrat'] leading-[28.80px]">Content Management</div>
                    <Link href="/c89ovt/yh789rf/admin/contentform"  className="px-[30px] py-2.5 cursor-pointer bg-green-500 rounded-[20px] justify-start items-center gap-2.5 flex">
                        <div className="text-sky-950 text-base font-medium font-['Montserrat'] leading-[25px] tracking-tight">New Post</div>
                    </Link>
                </div>




                {/* Nav */}
                <div className="w-full mt-11 h-[90px] pr-[50px] pt-[30px] border-b border-neutral-400 justify-start items-start gap-[50px] inline-flex">
                <div className="h-[60px] flex-col justify-between items-start inline-flex">
                    <div className="justify-center items-center gap-2.5 inline-flex">
                        <div className="w-5 h-5 relative" />
                        <div className="text-green-500 text-base font-normal font-['Montserrat'] tracking-tight">Posts</div>
                    </div>
                    <div className="w-[73px] h-0.5 relative bg-green-500 rounded-sm" />
                </div>
               
                <div className="justify-center items-center gap-2.5 flex">
                    <div className="w-5 h-5 relative" />
                    <div className="text-sky-950 text-base font-normal font-['Montserrat'] tracking-tight">Draft</div>
                </div>
            </div>

            {/* Content */}
            <div className=" mt-12 flex  justify-between overflow-x-auto ">
            <div className="w-[400px] h-[358.16px] flex-col justify-start items-start gap-5 inline-flex">
    <div className="self-stretch grow shrink basis-0 justify-between items-center inline-flex">
        <div className="w-[278px] text-sky-950 text-lg font-medium font-['Montserrat'] leading-[30px] tracking-tight">Tech Innovators: African Diaspora Changing the Game</div>
        <div className="justify-start items-center gap-2.5 flex">
            <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                <div className="w-[17.25px] h-[15.25px] relative" />
            </div>
        </div>
    </div>
    <Image width={400} height={220.16} className=" rounded-[20px]" src="/image2.png" alt="text_logo" />
    <div className="self-stretch justify-between items-center inline-flex">
        <div className="p-2.5 rounded-[40px] justify-center items-center gap-2.5 flex">
            <div className="text-neutral-400 text-xs font-medium font-['Montserrat'] tracking-tight">January  10th, 2024</div>
        </div>
        <div className="p-2.5 bg-emerald-50 rounded-[40px] justify-center items-center gap-[5px] flex">
            <div className="w-3.5 h-3.5 relative" />
            <div className="text-green-500 text-xs font-normal font-['Montserrat'] tracking-tight">Published</div>
        </div>
        <div className="justify-start items-center gap-2.5 flex">
            <div className="p-2.5 bg-zinc-100 rounded-[40px] justify-center items-center gap-2.5 flex">
                <div className="w-[18px] h-[18px] relative" />
            </div>
        </div>
    </div>
</div>

<div className="w-[400px] h-[358.16px] flex-col justify-start items-start gap-5 inline-flex">
    <div className="self-stretch grow shrink basis-0 justify-between items-center inline-flex">
        <div className="w-[278px] text-sky-950 text-lg font-medium font-['Montserrat'] leading-[30px] tracking-tight">Tech Innovators: African Diaspora Changing the Game</div>
        <div className="justify-start items-center gap-2.5 flex">
            <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                <div className="w-[17.25px] h-[15.25px] relative" />
            </div>
        </div>
    </div>
    <Image width={400} height={220.16} className=" rounded-[20px]" src="/image2.png" alt="text_logo" />
    <div className="self-stretch justify-between items-center inline-flex">
        <div className="p-2.5 rounded-[40px] justify-center items-center gap-2.5 flex">
            <div className="text-neutral-400 text-xs font-medium font-['Montserrat'] tracking-tight">January  10th, 2024</div>
        </div>
        <div className="p-2.5 bg-emerald-50 rounded-[40px] justify-center items-center gap-[5px] flex">
            <div className="w-3.5 h-3.5 relative" />
            <div className="text-green-500 text-xs font-normal font-['Montserrat'] tracking-tight">Published</div>
        </div>
        <div className="justify-start items-center gap-2.5 flex">
            <div className="p-2.5 bg-zinc-100 rounded-[40px] justify-center items-center gap-2.5 flex">
                <div className="w-[18px] h-[18px] relative" />
            </div>
        </div>
    </div>
</div>

<div className="w-[400px] h-[358.16px] flex-col justify-start items-start gap-5 inline-flex">
    <div className="self-stretch grow shrink basis-0 justify-between items-center inline-flex">
        <div className="w-[278px] text-sky-950 text-lg font-medium font-['Montserrat'] leading-[30px] tracking-tight">Tech Innovators: African Diaspora Changing the Game</div>
        <div className="justify-start items-center gap-2.5 flex">
            <div className="p-2.5 bg-zinc-100 bg-opacity-90 rounded-[40px] justify-center items-center gap-2.5 flex">
                <div className="w-[17.25px] h-[15.25px] relative" />
            </div>
        </div>
    </div>
    <Image width={400} height={220.16} className=" rounded-[20px]" src="/image2.png" alt="text_logo" />
    <div className="self-stretch justify-between items-center inline-flex">
        <div className="p-2.5 rounded-[40px] justify-center items-center gap-2.5 flex">
            <div className="text-neutral-400 text-xs font-medium font-['Montserrat'] tracking-tight">January  10th, 2024</div>
        </div>
        <div className="p-2.5 bg-emerald-50 rounded-[40px] justify-center items-center gap-[5px] flex">
            <div className="w-3.5 h-3.5 relative" />
            <div className="text-green-500 text-xs font-normal font-['Montserrat'] tracking-tight">Published</div>
        </div>
        <div className="justify-start items-center gap-2.5 flex">
            <div className="p-2.5 bg-zinc-100 rounded-[40px] justify-center items-center gap-2.5 flex">
                <div className="w-[18px] h-[18px] relative" />
            </div>
        </div>
    </div>
</div>



    
    
    
    </div>
            

        </div>
    )
};

export default ContentPage;