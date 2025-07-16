import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function TopSection(){
    const router = useRouter()  
    return (
        <div className={`lg:h-230 md:h-175 sm:h-175 h-170 bg-[url(/images/bg2.png))] lg:bg-cover bg-cover bg-center bg-no-repeat bg-white dark:bg-gray-900 top-0 relative`}>
            <div className="absolute lg:top-130 lg:left-75 md:top-100 top-120 left-2 text-black">
                <h1 className="text-5xl scale-y-200 font-extrabold fill-transparent text-2xl text-stroke-white">I&apos;M ABDULAZIZ M.</h1>
                <br />
                <p>Explore. Reflect. Evolve</p>
                <p>Real reactions, raw insights and remarkable</p>
                <p>Journeys through Africa and beyond</p>
                <div className="">
                    <button className="bg-amber-300 hover:bg-amber-500 text-black rounded-2xl p-2 m-2" onClick={() => router.push("diaries")}>READ MY DIARIES</button>
                    <button className="bg-blue-950 hover:bg-blue-600 text-gray-300 hover:text-gray-50 rounded-2xl p-2 m-2" onClick={() => router.push("reacts")}>WATCH MY VIDEOS</button>
                </div>
            </div>
            <div className="absolute lg:top-20 lg:right-50 md:top-20 md:right-20 sm:top-30 sm:right-20 top:20 right-7 text-black text-0.3xl">
                <p>I am a Life blogger from Tanzania,</p>
                <p>Specializing in StorryTelling ,Coaching about Life</p>
                <span>and Motivation Speaking. </span><Link href="about" className="text-white ">More here</Link>
            </div>
            <div className="absolute lg:bottom-20 lg:right-50 md:bottom-0 md:right-0  sm:bottom-0 sm:right-0 bottom-0 right-0 flex">
                <Image src={"/images/tz.png"} width={100} height={100} alt="Tanzania Logo"/>
                <div className="self-center">
                    <p className="text-green-500">Based In</p>
                    <p className="text-blue-500">Tanzania</p>
                </div>
            </div>  
        </div>
    )
}