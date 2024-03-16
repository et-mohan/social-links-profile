// import ProfileCard from "./components/ProfileCard";

export default function App(){
  return (
    <div className="bg-slate-950 h-dvh flex justify-center items-center">
      <div className="bg-zinc-800 w-11/12 h-4/5 rounded-lg flex flex-col items-center pt-7 md:w-3/12 h-3/4">
        <img className="size-20 rounded-full " src="/avatar-jessica.jpeg"/>
        <div className="text-white font-semibold pt-3 pb-1 text-2xl">Jessica Randall</div>
        <div className="text-lime-400 font-medium text-xs">London, United Kingdom</div>
        <div className="text-white font-light text-sm pt-7 pb-6">"Front-end developer and avid reader."</div>
        {/* <div className="text-white font-semibold">Github</div> */}
        {/* ------------------buttons----------------------------- */}
        <div className="flex flex-col space-y-4">
          <div className="bg-zinc-700 h-9 w-80 rounded-md text-white text-center pt-1 font-semibold hover:bg-lime-400 hover:text-slate-950 cursor-pointer">Github</div>
          <div className="bg-zinc-700 h-9 w-80 rounded-md text-white text-center pt-1 font-semibold hover:bg-lime-400 hover:text-slate-950 cursor-pointer ">Frontend Mentor</div>
          <div className="bg-zinc-700 h-9 w-80 rounded-md text-white text-center pt-1 font-semibold hover:bg-lime-400 hover:text-slate-950 cursor-pointer">LinkedIn</div>
          <div className="bg-zinc-700 h-9 w-80 rounded-md text-white text-center pt-1 font-semibold hover:bg-lime-400 hover:text-slate-950 cursor-pointer">Twitter</div>
          <div className="bg-zinc-700 h-9 w-80 rounded-md text-white text-center pt-1 font-semibold hover:bg-lime-400 hover:text-slate-950 cursor-pointer">Instagram</div>
          {/* ------------------------------------------------------ */}
        </div>
      </div>
    </div>
)
}