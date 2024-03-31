
import Image from "next/image";
import Logo from '../../../public/logo.svg';


// http://localhost:3000/c89ovt/yh789rf/admin
const DashNavBar= ({setPage, page}) => {

    return(
        <div className="w-[280px] h-full bg-sky-950  pt-8 flex-col justify-between items-center gap-[50px] inline-flex">
        <div className="w-[100px] h-[87.56px] relative">
            <div className="w-[129px] h-[111px] p-2.5 left-[-13px] top-[-9px] absolute bg-white bg-opacity-10 blur-[100px]" />
            <div className="left-0 top-0 absolute flex-col justify-start items-center gap-[0.47px] inline-flex">
                <Image alt='logo' width={71.09} height={71.09} src={Logo} />
                <div className="text-yellow-400 text-sm font-semibold font-['Montserrat'] tracking-tight">The Best of Us</div>
            </div>
        </div>
        <div className="self-stretch h-auto px-4 flex-col justify-start items-start gap-1 mb-auto flex">
            <div onClick={() => setPage(1)} className={`self-stretch cursor-pointer grow shrink basis-0 px-3 py-2 ${page ===1 && 'bg-gray-300 rounded-md'}  justify-start items-center gap-[105px] inline-flex`}>
                <div className="justify-start items-center gap-3 flex">
                    <div className="w-6 h-6 relative" />
                    <div className={`${page === 1 ? 'text-zinc-800' : 'text-neutral-100' } text-base font-medium font-['Montserrat'] leading-normal`}>Dashboard</div>
                </div>
            </div>
            <div onClick={() => setPage(2)} className={`self-stretch cursor-pointer grow shrink basis-0 px-3 py-2 ${page ===2 && 'bg-gray-300 rounded-md'}  justify-start items-center gap-[105px] inline-flex`}>
                <div  className={"justify-start items-center  cursor-pointer gap-3 flex"}>
                    <div className="w-6 h-6 p-0.5 justify-center items-center flex">
                        <div className="w-5 h-5 relative">
                        </div>
                    </div>
                    <div className={`${page === 2 ? 'text-zinc-800' : 'text-neutral-100' } text-base font-medium font-['Montserrat'] leading-normal`}>Content Management</div>
                </div>
            </div>
       

        </div>


        {/* end */}
        <div className="w-[280px] h-[197px] px-4 pb-8 flex-col justify-start items-start gap-6 inline-flex ">
    <div className="self-stretch h-[76px] py-2.5 justify-between items-start inline-flex">
        <div className="grow shrink basis-0 self-stretch px-3 py-2 bg-sky-950 rounded-md justify-start items-center gap-[105px] flex">
            <div className="justify-start items-center gap-3 flex">
                <div className="w-6 h-6 pl-[2.31px] pr-[2.19px] py-0.5 justify-center items-center flex">
                    <div className="w-[19.50px] h-5 relative">
                    </div>
                </div>
                <div className="text-neutral-100 text-base font-medium font-['Montserrat'] leading-normal">Settings</div>
            </div>
        </div>
    </div>
    <div className="self-stretch px-2 justify-between items-center inline-flex">
        <div className="justify-start items-center gap-3 flex">
            <img className="w-10 h-10 rounded-[200px]" src="https://via.placeholder.com/40x40" />
            <div className="flex-col justify-start items-start inline-flex">
                <div className="text-white text-sm font-medium font-['Montserrat'] leading-tight">Olivia Rhye</div>
                <div className="text-neutral-400 text-sm font-normal font-['Roboto'] leading-tight">olivia@untitledui.com</div>
            </div>
        </div>
        <div className="justify-center items-center flex">
            <div className="rounded-lg justify-start items-start inline-flex">
                <div className="p-2 rounded-lg justify-center items-center gap-2 flex">
                    <div className="w-5 h-5 relative" />
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
    )
};


export default DashNavBar;