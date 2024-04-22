
function Business() {
  return (
    <>
      {/* Large Screens */}
      <div className=" 13inch:flex 3xxS:hidden flex-col w-[85%] justify-between  gap-[70px] items-start">
        <div className=" w-full gap-[40px] flex flex-grow justify-between items-center">
          <div className=" w-full flex flex-1 flex-col justify-between flex-grow  ">
            <img className=" w-full" src={'Images/Explore1.png'} alt="Explore" />
            <div className=" w-full  pl-10 pr-[69px] py-3  rounded-b-[20px] mt-[-150px] bg-white bg-opacity-80 flex-col justify-center items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-2.5 flex">
                <div className="text-sky-950 text-[28px] font-semibold font-['Montserrat'] tracking-tight">EcoChic Boutique</div>
                <div className="w-[490px] text-zinc-800 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">
                  Embrace sustainable fashion with EcoChic Boutique. From trendy attire to accessories, they redefine style while championing eco-friendly practices.
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full flex flex-col flex-1 justify-between flex-grow  ">
            <img className=" w-full" src={'Images/Explore2.png'} alt="Explore" />
            <div className=" w-full h-[150px]  pl-10 pr-[69px] py-3  rounded-b-[20px] mt-[-150px] bg-white bg-opacity-80 flex-col justify-center items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-2.5 flex">
                <div className="text-sky-950 text-[28px] font-semibold font-['Montserrat'] tracking-tight">GreenHarvest Farms</div>
                <div className="w-[490px] text-zinc-800 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">
                  GreenHarvest Farms is committed to organic farming. Dive into their world of fresh produce, cultivating a healthier lifestyle for communities.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Small Screen */}
      <div className=" 13inch:hidden 3xxS:flex flex-col w-full justify-between  gap-[70px] items-start">
        <div className=" w-full gap-[40px] flex-col flex justify-between items-center">
          <div className=" w-full flex flex-col justify-between flex-grow  ">
            <img className=" w-full" src={'Images/Explore1.png'} alt="Explore" />
            <div className=" w-full h-[150px] px-10  py-3  rounded-b-[20px] mt-[-149.5px] bg-white bg-opacity-80 flex-col justify-center items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-2.5 flex">
                <div className="text-sky-950 text-[28px] font-semibold font-['Montserrat'] tracking-tight">EcoChic Boutique</div>
                <div className="w-full text-zinc-800 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">
                  Embrace sustainable fashion with EcoChic Boutique. From trendy attire to accessories, they redefine style while championing eco-friendly practices.
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full flex flex-col justify-between flex-grow  ">
            <img className=" w-full" src={'Images/Explore2.png'} alt="Explore" />
            <div className=" w-full h-[150px] px-10 py-3  rounded-b-[20px] mt-[-150px] bg-white bg-opacity-80 flex-col justify-center items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-2.5 flex">
                <div className="text-sky-950 text-[28px] font-semibold font-['Montserrat'] tracking-tight">GreenHarvest Farms</div>
                <div className="w-full text-zinc-800 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">
                  GreenHarvest Farms is committed to organic farming. Dive into their world of fresh produce, cultivating a healthier lifestyle for communities.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Business;