import Image from "next/image"



export default function Home(){


    return(
        <>
        {/* Hero */}
    <div className="w-full h-[551px] py-auto flex justify-between items-center ">
            <div className="flex-col justify-center items-start gap-5 inline-flex">
                <div className="w-[680px]"><span className="text-sky-950 text-[64px] font-semibold font-['Montserrat'] leading-[85px] tracking-wide">Discover the Extraordinary: </span><span className="text-yellow-400 text-[64px] font-semibold font-['Montserrat'] leading-[85px] tracking-wide">The Best of Us</span></div>
                <div className="w-[606px] text-neutral-500 text-2xl font-normal font-['Roboto'] leading-10 tracking-tight">Explore inspiring stories of people, businesses, and innovations originating from Africa and the diaspora. Join us on a journey celebrating excellence, diversity, and success.</div>
            </div>
            <div className="h-[402px] justify-center items-center  flex-col">
                <div className="flex pb-3 ">
                    <Image className="rounded-[30px] mr-2" width={240} height={240} src="/image7.png" alt='HImage1'/>
                    <Image lassName="rounded-[30px]" width={240} height={160} src="/image8.png" alt='HImage2' />
                </div>
               
                <Image className="  rounded-[30px]" width={483} height={232}  src="/image2.png" alt='HImage3'/>
            </div>
    </div>




        {/* EXPLORE */}
        <div className="w-[1234px] h-[684px] flex-col justify-start items-start gap-[60px] inline-flex">
    <div className="flex-col justify-center items-start gap-5 flex">
        <div className="text-sky-950 text-4xl font-semibold font-['Montserrat'] tracking-tight">Explore Extraordinary Businesses</div>
        <div className="w-[667px] text-neutral-500 text-2xl font-normal font-['Roboto'] leading-[35px] tracking-tight">Discover and celebrate remarkable businesses making waves in various industries.</div>
    </div>
    <div className="flex-col justify-end items-end gap-10 flex">
        <div className="w-[1234px] rounded-[20px] justify-start items-center gap-10 inline-flex">
            <div className="w-[612px] h-[490px] relative">
                <img className="w-[612px] h-[490px] left-0 top-0 absolute rounded-[20px]" src="https://via.placeholder.com/612x490" />
                <div className="w-[612px] h-[164px] pl-10 pr-[69px] py-3 left-0 top-[326px] absolute bg-white bg-opacity-80 flex-col justify-center items-start gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-start gap-2.5 flex">
                        <div className="text-sky-950 text-[28px] font-semibold font-['Montserrat'] tracking-tight">EcoChic Boutique</div>
                        <div className="w-[490px] text-zinc-800 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">Embrace sustainable fashion with EcoChic Boutique. From trendy attire to accessories, they redefine style while championing eco-friendly practices.</div>
                    </div>
                </div>
            </div>
            <div className="w-[612px] h-[490px] relative">
                <img className="w-[612px] h-[490px] left-0 top-0 absolute rounded-[20px]" src="https://via.placeholder.com/612x490" />
                <div className="w-[612px] h-[164px] pl-10 pr-[69px] py-3 left-0 top-[326px] absolute bg-white bg-opacity-80 flex-col justify-center items-start gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-start gap-2.5 flex">
                        <div className="text-sky-950 text-[28px] font-semibold font-['Montserrat'] tracking-tight">GreenHarvest Farms</div>
                        <div className="w-[490px] text-zinc-800 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">GreenHarvest Farms is committed to organic farming. Dive into their world of fresh produce, cultivating a healthier lifestyle for communities.</div>
                    </div>
                </div>
            </div>
            <div className="w-[612px] h-[490px] relative">
                <img className="w-[612px] h-[490px] left-0 top-0 absolute rounded-[20px]" src="https://via.placeholder.com/612x490" />
                <div className="w-[612px] h-[164px] pl-10 pr-[69px] py-3 left-0 top-[326px] absolute bg-white bg-opacity-80 flex-col justify-center items-start gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-start gap-2.5 flex">
                        <div className="text-sky-950 text-[28px] font-semibold font-['Montserrat'] tracking-tight">EcoChic Boutique</div>
                        <div className="w-[490px] text-zinc-800 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">Embrace sustainable fashion with EcoChic Boutique. From trendy attire to accessories, they redefine style while championing eco-friendly practices.</div>
                    </div>
                </div>
            </div>
            <div className="w-[612px] h-[490px] relative">
                <img className="w-[612px] h-[490px] left-0 top-0 absolute rounded-[20px]" src="https://via.placeholder.com/612x490" />
                <div className="w-[612px] h-[164px] pl-10 pr-[69px] py-3 left-0 top-[326px] absolute bg-white bg-opacity-80 flex-col justify-center items-start gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-start gap-2.5 flex">
                        <div className="text-sky-950 text-[28px] font-semibold font-['Montserrat'] tracking-tight">GreenHarvest Farms</div>
                        <div className="w-[490px] text-zinc-800 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">GreenHarvest Farms is committed to organic farming. Dive into their world of fresh produce, cultivating a healthier lifestyle for communities.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


          {/* about */}
    <div className="w-full h-[464px] justify-start items-center gap-[60px] inline-flex">
    <div className="flex-col justify-center items-start gap-5 inline-flex">
        <div className="text-sky-950 text-4xl font-semibold font-['Montserrat'] tracking-tight">About Us</div>
        <div className="w-[626px]"><span className="text-neutral-500 text-2xl font-normal font-['Roboto'] leading-[50px] tracking-tight">Explore the rich tapestry of stories that define "</span><span className="text-yellow-400 text-2xl font-normal font-['Roboto'] leading-[50px] tracking-tight">The Best of Us.</span><span className="text-neutral-500 text-2xl font-normal font-['Roboto'] leading-[50px] tracking-tight">" Our narrative is woven from the threads of exceptional individuals, innovative businesses, and vibrant communities across Africa and the diaspora. Join us on a journey of discovery as we celebrate the diverse and extraordinary facets of our shared identity. Together, let's elevate and showcase the best that emanates from our continent and beyond.</span></div>
    </div>
    <Image  src={"/aboutimg.png"} width={550} height={366.67} alt="about_image" />
    </div>
    
    </>
    )

}