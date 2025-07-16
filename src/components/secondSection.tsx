import { FaArrowRight} from "react-icons/fa";
import Image from "next/image"
import Link from "next/link";
import { getAllTalesData } from "@/app/tales/_lib/getAllTalesData";

export default function SecondSection(){
    return (
        <div className="h-dvh bg-white dark:bg-gray-900  text-lg  font-bold flex flex-col justify-center text-center p-2">
            <h1>WHAT DO YOU WANT TO READ?</h1>
            <div className="flex justify-center p-5 m-2 gap-4 text-blue-800">
                <div className="rounded-2xl relative text-center  items-center self-center">
                    <Link href="/reacts">
                    <Image src="/images/reacts1.jpeg" width={300} height={300} alt="reacts hero" className="rounded-2xl"/>
                    <p>Reacts</p>
                    <div className="absolute top-20 left-0 w-auto h-auto opacity-0 hover:opacity-100 ">
                        <h1>Reacts</h1>
                        <p>Here you see different videos from different social medias</p>
                    </div>
                    </Link>
                </div>
                <div className="rounded-2xl relative text-center  items-center self-center">
                    <Link href="/wisdom">
                    <Image src="/images/wisd.jpeg" width={450} height={300} alt="reacts hero" className="rounded-2xl"/>
                    <p>Tales</p>
                    <div className="absolute top-10 left-0 w-auto h-auto opacity-0 hover:opacity-100 ">
                        <h1>Tales</h1>
                        <p>Here you see different videos from different social medias</p>
                    </div>
                    </Link>
                </div>
                <div className="rounded-2xl relative text-center items-center self-center">
                    <Link href="/diaries">
                    <Image src="/images/diari.jpeg" width={230} height={300} alt="reacts hero" className="rounded-2xl"/>
                    <p>Diaries</p>
                    <div className="absolute top-20 left-0 w-auto h-auto opacity-0 hover:opacity-100 ">
                        <h1>Diaries</h1>
                        <p>Here you see different videos from different social medias</p>
                    </div>
                    </Link>
                </div>
                <div className="rounded-2xl relative text-center  items-center self-center">
                    <Link href="/tales">
                    <Image src="/images/talez.jpeg" width={180} height={200} alt="reacts hero" className="rounded-2xl"/>
                    <p>Tales</p>
                    <div className="absolute top-20 left-0 w-auto h-full opacity-0 hover:opacity-100  ">
                        <h1>Reacts</h1>
                        <p>Here you see different videos from different social medias</p>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="">
                <div className="flex flex-row justify-center">
                    <Image src="/images/world-map.svg" width={800} height={800} alt="world map"/>
                    <div className="flex flex-col w-100 justify-center self-center items-center">
                        <h1 className="text-5xl">DISCOVER <span className="text-9xl text-yellow-300">TALES </span>WORLD WIDE</h1>
                        <p>I have written over 100+ tales each picked from different places all over the world. Hope you all enjoy.</p>
                    <button className="">
                        <Link href="/tales" className="flex m-5 p-2 border-2 border-white rounded-full hover:bg-blue-900">
                            EXPLORE TALES <FaArrowRight/> 
                        </Link>
                    </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
