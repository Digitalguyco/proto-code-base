"use client";

import Image from "next/image";
import Logo from '../../../../../public/logo.svg';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {

    return(
        <div className=" m-12 flex-col w-full ">
        <div className="text-sky-950 text-2xl font-normal font-['Montserrat'] leading-[28.80px]">Dashboard</div>

        <div className="flex ml-16 mt-16">
                <div className="w-[267.50px] mr-4 h-[117px] px-5 py-[21px] rounded-[10px] shadow border border-neutral-200 justify-between items-center inline-flex">
            <div className="py-[5px] flex-col justify-start items-start gap-5 inline-flex">
                <div className="text-neutral-400 text-sm font-medium font-['Montserrat'] tracking-tight">Total Visitors</div>
                <div className="text-zinc-800 text-2xl font-medium font-['Roboto'] tracking-tight">45, 346</div>
            </div>
            <div className="p-2.5 bg-zinc-200 rounded-[100px] justify-center items-center gap-2.5 flex">
                <div className="w-5 h-5 relative" />
            </div>
        </div>
                <div className="w-[267.50px] mr-4 h-[117px] px-5 py-[21px] rounded-[10px] shadow border border-neutral-200 justify-between items-center inline-flex">
            <div className="py-[5px] flex-col justify-start items-start gap-5 inline-flex">
                <div className="text-neutral-400 text-sm font-medium font-['Montserrat'] tracking-tight">Total Comments</div>
                <div className="text-zinc-800 text-2xl font-medium font-['Roboto'] tracking-tight">5, 346</div>
            </div>
            <div className="p-2.5 bg-zinc-200 rounded-[100px] justify-center items-center gap-2.5 flex">
                <div className="w-5 h-5 relative" />
            </div>
        </div>
                <div className="w-[267.50px] mr-4 h-[117px] px-5 py-[21px] rounded-[10px] shadow border border-neutral-200 justify-between items-center inline-flex">
            <div className="py-[5px] flex-col justify-start items-start gap-5 inline-flex">
                <div className="text-neutral-400 text-sm font-medium font-['Montserrat'] tracking-tight">Returning Visitors</div>
                <div className="text-zinc-800 text-2xl font-medium font-['Roboto'] tracking-tight">15, 346</div>
            </div>
            <div className="p-2.5 bg-zinc-200 rounded-[100px] justify-center items-center gap-2.5 flex">
                <div className="w-5 h-5 relative" />
            </div>
        </div>
                <div className="w-[267.50px] h-[117px] px-5 py-[21px] rounded-[10px] shadow border border-neutral-200 justify-between items-center inline-flex">
            <div className="py-[5px] flex-col justify-start items-start gap-5 inline-flex">
                <div className="text-neutral-400 text-sm font-medium font-['Montserrat'] tracking-tight">New Visitors</div>
                <div className="text-zinc-800 text-2xl font-medium font-['Roboto'] tracking-tight">5, 346</div>
            </div>
            <div className="p-2.5 bg-zinc-200 rounded-[100px] justify-center items-center gap-2.5 flex">
                <div className="w-5 h-5 relative" />
            </div>
        </div>
        </div>



        {/* Content */}
        <div className="w-[1100px] h-[526px] mx-16 mt-20 overflow-y-auto  p-6 rounded-lg shadow border border-gray-200 flex-col justify-start items-start gap-5 inline-flex">
    <div className="self-stretch h-12 pb-px flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch justify-start items-start gap-4 inline-flex">
            <div className="grow shrink basis-0 text-sky-950 text-lg font-semibold font-['Montserrat'] leading-relaxed">Top Posts</div>
        </div>
        <div className="self-stretch h-px bg-neutral-200" />
    </div>
    <div className="self-stretch justify-start items-center inline-flex">
        <div className="flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-11 px-5 py-3 justify-start items-center gap-3 inline-flex">
                <div className="text-neutral-500 text-xs font-normal font-['Montserrat'] leading-[18px]">Rank</div>
            </div>
            <div className="self-stretch h-px bg-neutral-200" />
            <div className="w-[71px] h-[73px] relative">
                <div className="w-[71px] h-[72px] px-6 py-4 left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
                    <div className="text-zinc-800 text-xs font-normal font-['Montserrat'] leading-[18px]">1</div>
                </div>
                <div className="w-[71px] h-px left-0 top-[72px] absolute bg-neutral-200" />
            </div>
            <div className="w-[71px] h-[73px] relative">
                <div className="w-[71px] h-[72px] px-6 py-4 left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
                    <div className="text-zinc-800 text-xs font-normal font-['Montserrat'] leading-[18px]">2</div>
                </div>
                <div className="w-[71px] h-px left-0 top-[72px] absolute bg-neutral-200" />
            </div>
            <div className="w-[71px] h-[73px] relative">
                <div className="w-[71px] h-[72px] px-6 py-4 left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
                    <div className="text-zinc-800 text-xs font-normal font-['Montserrat'] leading-[18px]">3</div>
                </div>
                <div className="w-[71px] h-px left-0 top-[72px] absolute bg-neutral-200" />
            </div>
            <div className="w-[71px] h-[73px] relative">
                <div className="w-[71px] h-[72px] px-6 py-4 left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
                    <div className="text-zinc-800 text-xs font-normal font-['Montserrat'] leading-[18px]">4</div>
                </div>
                <div className="w-[71px] h-px left-0 top-[72px] absolute bg-neutral-200" />
            </div>
            <div className="w-[71px] h-[73px] relative">
                <div className="w-[71px] h-[72px] px-6 py-4 left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
                    <div className="text-zinc-800 text-xs font-normal font-['Montserrat'] leading-[18px]">5</div>
                </div>
                <div className="w-[71px] h-px left-0 top-[72px] absolute bg-neutral-200" />
            </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-11 px-6 py-3 justify-start items-center gap-3 inline-flex">
                <div className="text-neutral-500 text-xs font-normal font-['Montserrat'] leading-[18px]">Title</div>
            </div>
            <div className="self-stretch h-px bg-neutral-200" />
            <div className="h-[73px] relative">
                <div className="w-[621px] h-[72px] px-6 py-4 left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-xs font-normal font-['Montserrat'] leading-[18px]">Tech Innovators: African Diaspora Changing the GameTech Innovators: African Diaspora Changing the GameTech Innovators: African Diaspora Changing the Game</div>
                </div>
                <div className="w-[621px] h-px left-0 top-[72px] absolute bg-neutral-200" />
            </div>
            <div className="h-[73px] relative">
                <div className="w-[621px] h-[72px] px-6 py-4 left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-xs font-normal font-['Montserrat'] leading-[18px]">Afro-Fusion Cuisine: Culinary Delights Redefining Taste</div>
                </div>
                <div className="w-[621px] h-px left-0 top-[72px] absolute bg-neutral-200" />
            </div>
            <div className="h-[73px] relative">
                <div className="w-[621px] h-[72px] px-6 py-4 left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-xs font-normal font-['Montserrat'] leading-[18px]">Tech Innovators: African Diaspora Changing the GameTech Innovators: African Diaspora Changing the GameTech Innovators: African Diaspora Changing the Game</div>
                </div>
                <div className="w-[621px] h-px left-0 top-[72px] absolute bg-neutral-200" />
            </div>
            <div className="h-[73px] relative">
                <div className="w-[621px] h-[72px] px-6 py-4 left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-xs font-normal font-['Montserrat'] leading-[18px]">Tech Innovators: African Diaspora Changing the GameTech Innovators: African Diaspora Changing the Game</div>
                </div>
                <div className="w-[621px] h-px left-0 top-[72px] absolute bg-neutral-200" />
            </div>
            <div className="h-[73px] relative">
                <div className="w-[621px] h-[72px] px-6 py-4 left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
                    <div className="grow shrink basis-0 text-zinc-800 text-xs font-normal font-['Montserrat'] leading-[18px]">Tech Innovators: African Diaspora Changing the GameTech Innovators: African Diaspora Changing the GameTech Innovators: African Diaspora Changing the Game</div>
                </div>
                <div className="w-[621px] h-px left-0 top-[72px] absolute bg-neutral-200" />
            </div>
        </div>
        <div className="w-[180px] flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-11 px-6 py-3 justify-start items-center gap-3 inline-flex">
                <div className="text-neutral-500 text-xs font-normal font-['Montserrat'] leading-[18px]">Views</div>
            </div>
            <div className="self-stretch h-px bg-neutral-200" />
            <div className="h-[73px] relative">
                <div className="w-[180px] h-[72px] px-6 py-4 left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
                    <div className="justify-center items-center gap-[5px] flex">
                        <div className="w-4 h-4 p-[3.33px] origin-top-left rotate-180 justify-center items-center flex" />
                        <div className="text-green-600 text-xs font-normal font-['Montserrat'] tracking-tight">98%</div>
                    </div>
                </div>
                <div className="w-[180px] h-px left-0 top-[72px] absolute bg-neutral-200" />
            </div>
            <div className="h-[73px] relative">
                <div className="w-[180px] h-[72px] px-6 py-4 left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
                    <div className="justify-center items-center gap-[5px] flex">
                        <div className="w-4 h-4 p-[3.33px] justify-center items-center flex" />
                        <div className="text-red-700 text-xs font-normal font-['Montserrat'] tracking-tight">40%</div>
                    </div>
                </div>
                <div className="w-[180px] h-px left-0 top-[72px] absolute bg-neutral-200" />
            </div>
            <div className="h-[73px] relative">
                <div className="w-[180px] h-[72px] px-6 py-4 left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
                    <div className="justify-center items-center gap-[5px] flex">
                        <div className="w-4 h-4 p-[3.33px] origin-top-left rotate-180 justify-center items-center flex" />
                        <div className="text-green-600 text-xs font-normal font-['Montserrat'] tracking-tight">98%</div>
                    </div>
                </div>
                <div className="w-[180px] h-px left-0 top-[72px] absolute bg-neutral-200" />
            </div>
            <div className="h-[73px] relative">
                <div className="w-[180px] h-[72px] px-6 py-4 left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
                    <div className="justify-center items-center gap-[5px] flex">
                        <div className="w-4 h-4 p-[3.33px] justify-center items-center flex" />
                        <div className="text-red-700 text-xs font-normal font-['Montserrat'] tracking-tight">40%</div>
                    </div>
                </div>
                <div className="w-[180px] h-px left-0 top-[72px] absolute bg-neutral-200" />
            </div>
            <div className="h-[73px] relative">
                <div className="w-[180px] h-[72px] px-6 py-4 left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
                    <div className="justify-center items-center gap-[5px] flex">
                        <div className="w-4 h-4 p-[3.33px] justify-center items-center flex" />
                        <div className="text-red-700 text-xs font-normal font-['Montserrat'] tracking-tight">40%</div>
                    </div>
                </div>
                <div className="w-[180px] h-px left-0 top-[72px] absolute bg-neutral-200" />
            </div>
        </div>
        <div className="w-[180px] flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-11 px-6 py-3 justify-start items-center gap-3 inline-flex">
                <div className="text-neutral-500 text-xs font-normal font-['Montserrat'] leading-[18px]">Comments</div>
            </div>
            <div className="self-stretch h-px bg-neutral-200" />
            <div className="h-[73px] relative">
                <div className="w-[180px] h-[72px] px-6 py-4 left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
                    <div className="text-zinc-800 text-xs font-normal font-['Montserrat'] leading-[18px]">200, 005</div>
                </div>
                <div className="w-[180px] h-px left-0 top-[72px] absolute bg-neutral-200" />
            </div>
            <div className="h-[73px] relative">
                <div className="w-[180px] h-[72px] px-6 py-4 left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
                    <div className="text-zinc-800 text-xs font-normal font-['Montserrat'] leading-[18px]">12</div>
                </div>
                <div className="w-[180px] h-px left-0 top-[72px] absolute bg-neutral-200" />
            </div>
            <div className="h-[73px] relative">
                <div className="w-[180px] h-[72px] px-6 py-4 left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
                    <div className="text-zinc-800 text-xs font-normal font-['Montserrat'] leading-[18px]">11</div>
                </div>
                <div className="w-[180px] h-px left-0 top-[72px] absolute bg-neutral-200" />
            </div>
            <div className="h-[73px] relative">
                <div className="w-[180px] h-[72px] px-6 py-4 left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
                    <div className="text-zinc-800 text-xs font-normal font-['Montserrat'] leading-[18px]">0</div>
                </div>
                <div className="w-[180px] h-px left-0 top-[72px] absolute bg-neutral-200" />
            </div>
            <div className="h-[73px] relative">
                <div className="w-[180px] h-[72px] px-6 py-4 left-0 top-0 absolute justify-start items-center gap-3 inline-flex">
                    <div className="text-zinc-800 text-xs font-normal font-['Montserrat'] leading-[18px]">5</div>
                </div>
                <div className="w-[180px] h-px left-0 top-[72px] absolute bg-neutral-200" />
            </div>
        </div>
    </div>
</div>

        
    </div>
    )
};


export default Dashboard;