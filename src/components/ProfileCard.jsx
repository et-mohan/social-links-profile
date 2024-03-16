export default function ProfileCard(){

    function Profile(){
        return (<>     
             <div className="flex  flex-col items-center">      
                <div className="flex size-20 ">
                    <img className="rounded-full" src="/avatar-jessica.jpeg"/>
                </div>
                <div className="text-white text-bold">Jessica Rendall</div>
                <div className="text-lime-300">London, United Kingdom</div>
            </div>
            <div className="text-white">"Front-end developer and avid reader."</div>
        </>)
    }
    return (<>
        <div className="bg-rose-500">
        <div className="flex flex-col gap-3 bg-zinc-900 items-center rounded border">
            <Profile/>
            <div className="rounded bg-zinc-800 hover:bg-lime-300 hover:text-zinc-800 w-60 text-center text-white">Github</div>
            <div className="rounded bg-zinc-800 hover:bg-lime-300 hover:text-zinc-800 w-60 text-center text-white">Frontend Mentor</div>
            <div className="rounded bg-zinc-800 hover:bg-lime-300 hover:text-zinc-800 w-60 text-center text-white">LinkedIn</div>
            <div className="rounded bg-zinc-800 hover:bg-lime-300 hover:text-zinc-800 w-60 text-center text-white">Twitter</div>
            <div className="rounded bg-zinc-800 hover:bg-lime-300 hover:text-zinc-800 w-60 text-center text-white">Instagram</div>
           
        </div>
        </div>
    </>)


}