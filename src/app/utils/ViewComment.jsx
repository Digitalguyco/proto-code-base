import React,{ useState } from "react";

function ViewComment({ setViewComments, viewComments }) {
  const [reply, setReply] = useState(false);
  const [reply2, setReply2] = useState(false);
  return (
    <>
      <div className=" w-full z-20  bg-[#000] bg-opacity-30 flex justify-end items-end fixed top-0 left-0  h-full">
        {/* Large Screens */}
        <div className="xl:flex hidden  p-[40px] flex-col overflow-y-scroll bg-[#f5f5f5] w-[741px] h-full">
          <div className="flex justify-end">
            <svg className=" cursor-pointer" onClick={() => setViewComments(false)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5L5 19M5 5L19 19" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className=" gap-[40px] flex flex-col justify-between items-start">
            <div className=" gap-[10px] w-[80%] flex justify-between flex-col items-start">
              <div className="text-sky-950 leading-[36px] text-[24px] font-medium font-['Montserrat'] tracking-tight">Join the Conversation!</div>
              <div className="text-[#787878] text-[20px] leading-[35pxx] font-normal font-['Roboto'] tracking-tight">Leave comments, share your thoughts, and connect with the community. Your voice matters! </div>
            </div>

            <textarea
              className="w-full  flex h-[346px] bg-transparent p-[20px]  rounded-[20px] border gap-[10px] border-neutral-400 outline-none text-[20px] placeholder:text-[14px] font-montserrat font-normal  "
              placeholder="What are your thoughts......."
            ></textarea>
          </div>
          <div className=" flex items-end justify-end">
            <div className="text-neutral-100 text-[16px] font-medium font-montserrat leading-[25px] mt-4 h-[45px] px-[30px] py-2.5 bg-green-500 bg-opacity-30 rounded-[20px]  gap-2.5 self-center tracking-tight">Post Comment</div>
          </div>
          <div className=" gap-[20px] mt-[40px] w-[75%] flex justify-between flex-col items-start">
            <div className="text-sky-950 leading-[36px] text-[18px] font-medium font-['Montserrat'] tracking-tight">Comments</div>
            <div className="flex justify-between flex-col items-start gap-[10px]">
              <div className="text-[#333] text-[16px] leading-[30px] font-normal font-['Roboto'] tracking-tight">SpaceFront Explorations transcends the earthly bounds, venturing into the cosmic expanses of space. </div>
              <div className=" flex gap-[20px] justify-between items-center">
                <div className="text-[#666]  text-sm font-normal font-montserrat tracking-tight p-[10px] bg-[#F0F0F0] bg-opacity-90 rounded-[40px] justify-center items-center gap-[10px] flex">10 Comments</div>
                <div
                  onClick={() => {
                    setReply(!reply);
                    setReply2(false);
                  }}
                  className=" cursor-pointer text-[#666] text-sm font-normal font-montserrat tracking-tight p-[10px] bg-[#F0F0F0] bg-opacity-90 rounded-[40px] justify-center items-center gap-[10px] flex"
                >
                  Reply
                </div>
              </div>
              {reply && (
                <textarea
                  className="w-full  flex h-[146px] bg-transparent p-[20px]  rounded-[20px] border gap-[10px] border-neutral-400 outline-none text-[20px] placeholder:text-[14px] font-montserrat font-normal  "
                  placeholder="What are your thoughts......."
                ></textarea>
              )}
            </div>
            <div className="flex justify-between flex-col items-start gap-[10px]">
              <div className="text-[#333] text-[16px] leading-[30px] font-normal font-['Roboto'] tracking-tight">
                SpaceFront Explorations transcends the earthly bounds, venturing into the cosmic expanses of space.SpaceFront Explorations transcends the earthly bounds, venturing into the cosmic expanses of space.{" "}
              </div>
              <div className=" flex gap-[20px] justify-between items-center">
                <div className="text-[#666]  text-sm font-normal font-montserrat tracking-tight p-[10px] bg-[#F0F0F0] bg-opacity-90 rounded-[40px] justify-center items-center gap-[10px] flex">10 Comments</div>
                <div
                  onClick={() => {
                    setReply2(!reply2);
                    setReply(false);
                  }}
                  className=" cursor-pointer text-[#666] text-sm font-normal font-montserrat tracking-tight p-[10px] bg-[#F0F0F0] bg-opacity-90 rounded-[40px] justify-center items-center gap-[10px] flex"
                >
                  Reply
                </div>
              </div>
              {reply2 && (
                <textarea
                  className="w-full  flex h-[146px] bg-transparent p-[20px]  rounded-[20px] border gap-[10px] border-neutral-400 outline-none text-[20px] placeholder:text-[14px] font-montserrat font-normal  "
                  placeholder="What are your thoughts......."
                ></textarea>
              )}
            </div>
          </div>
        </div>
        {/* Small Screen */}
        <div className=" xl:hidden flex flex-col p-[40px] overflow-x-hidden overflow-y-scroll bg-[#f5f5f5] w-[85%] h-full">
          <div className="flex w-full items-end justify-end">
            <svg className=" cursor-pointer" onClick={() => setViewComments(false)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5L5 19M5 5L19 19" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className=" gap-[40px] mt-[40px] flex flex-col justify-between items-start">
            <div className=" gap-[10px] w-[80%] flex justify-between flex-col items-start">
              <div className="text-sky-950 leading-[36px] text-[24px] font-medium font-['Montserrat'] tracking-tight">Join the Conversation!</div>
              <div className="text-[#787878] text-[20px] leading-[35pxx] font-normal font-['Roboto'] tracking-tight">Leave comments, share your thoughts, and connect with the community. Your voice matters! </div>
            </div>

            <textarea
              className="w-full  flex h-[346px] bg-transparent p-[20px]  rounded-[20px] border gap-[10px] border-neutral-400 outline-none text-[20px] placeholder:text-[14px] font-montserrat font-normal  "
              placeholder="What are your thoughts......."
            ></textarea>
          </div>
          <div className=" flex items-end justify-end">
            <div className="text-neutral-100 text-[16px] font-medium font-montserrat leading-[25px] mt-4 h-[45px] px-[30px] py-2.5 bg-green-500 bg-opacity-30 rounded-[20px]  gap-2.5 self-center tracking-tight">Post Comment</div>
          </div>
          <div className=" gap-[20px] mt-[40px] w-[85%] flex justify-between flex-col items-start">
            <div className="text-sky-950 leading-[36px] text-[18px] font-medium font-['Montserrat'] tracking-tight">Comments</div>
            <div className="flex justify-between flex-col items-start gap-[10px]">
              <div className="text-[#333] text-[16px] leading-[30px] font-normal font-['Roboto'] tracking-tight">SpaceFront Explorations transcends the earthly bounds, venturing into the cosmic expanses of space. </div>
              <div className=" flex gap-[20px] justify-between items-center">
                <div className="text-[#666]  text-sm font-normal font-montserrat tracking-tight p-[10px] bg-[#F0F0F0] bg-opacity-90 rounded-[40px] justify-center items-center gap-[10px] flex">10 Comments</div>
                <div
                  onClick={() => {
                    setReply(!reply);
                    setReply2(false);
                  }}
                  className=" cursor-pointer text-[#666] text-sm font-normal font-montserrat tracking-tight p-[10px] bg-[#F0F0F0] bg-opacity-90 rounded-[40px] justify-center items-center gap-[10px] flex"
                >
                  Reply
                </div>
              </div>
              {reply && (
                <textarea
                  className="w-full  flex h-[146px] bg-transparent p-[20px]  rounded-[20px] border gap-[10px] border-neutral-400 outline-none text-[20px] placeholder:text-[14px] font-montserrat font-normal  "
                  placeholder="What are your thoughts......."
                ></textarea>
              )}
            </div>
            <div className="flex justify-between flex-col items-start gap-[10px]">
              <div className="text-[#333] text-[16px] leading-[30px] font-normal font-['Roboto'] tracking-tight">
                SpaceFront Explorations transcends the earthly bounds, venturing into the cosmic expanses of space.SpaceFront Explorations transcends the earthly bounds, venturing into the cosmic expanses of space.{" "}
              </div>
              <div className=" flex gap-[20px] justify-between items-center">
                <div className="text-[#666]  text-sm font-normal font-montserrat tracking-tight p-[10px] bg-[#F0F0F0] bg-opacity-90 rounded-[40px] justify-center items-center gap-[10px] flex">10 Comments</div>
                <div
                  onClick={() => {
                    setReply2(!reply2);
                    setReply(false);
                  }}
                  className=" cursor-pointer text-[#666] text-sm font-normal font-montserrat tracking-tight p-[10px] bg-[#F0F0F0] bg-opacity-90 rounded-[40px] justify-center items-center gap-[10px] flex"
                >
                  Reply
                </div>
              </div>
              {reply2 && (
                <textarea
                  className="w-full  flex h-[146px] bg-transparent p-[20px]  rounded-[20px] border gap-[10px] border-neutral-400 outline-none text-[20px] placeholder:text-[14px] font-montserrat font-normal  "
                  placeholder="What are your thoughts......."
                ></textarea>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewComment;
