import { FaWhatsappSquare, FaFacebookSquare,  FaInstagramSquare, FaYoutubeSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"
import { SiGmail } from "react-icons/si"
import Link from "next/link";

export default function About(){
    return(
        <div className="lg:h-200 md:h-,175 sm:h-175 h-170 bg-[url(/images/bg4.png))] lg:bg-cover bg-cover bg-center bg-no-repeat bg-white dark:bg-gray-900 top-0 relative text-center flex flex-col">
            <h2 className="text-gray-400 text-2xl">Learn More</h2>
            <h1 className="font-bold text-6xl text-cyan-700">ABOUT ME</h1>
            <p className="text-center text-wrap mx-100 text-gray-500">
            I am <span className="text-white font-bold text-2xl">Abdulaziz Hemed Mafita</span> and 
            I was born on 11th December, Tanzanian youth. 
            The smart, gorgeous, mercies face and the hard-to-poke smile on
             somebody’s face except for a short period of time are my easily
              seen physical appearances. Those who do not know me might actually 
              think that I’m very self-assured, arrogant, bumptious, egotistical,
               and maybe overweening but it’s not like that and for sure they got
                it all wrong because once I start a relationship with someone,
                 I usually tell what I feel about it, what I like and what I dislike, 
                 things that make me happy and things that get me off my mood so that
                  I and them can meet each other halfway.</p>
        <div className="border-l-3 border-red-400 absolute w-80 p-4 text-left top-70 left-150 text-xs">
            <h1 className="text-white font-bold">Introduction</h1>
            <p>
               I am very passionate about feeding the community with nutrition, knowledge, truth and experience. Always in search of something, seeking to learn about new cultures, meet new people, and have a worldly perspective. 
            </p>
        </div>
        <div className="border-l-3 border-red-400 absolute w-80 p-4 text-left top-90 right-50 text-xs">
            <h1 className="text-white font-bold">Personality</h1>
            <p>
               I’m a patient; a meticulous person who enjoys working on very detailed systematized things such as Computers and science. I do my best when there is no disruption as I do not easily adjust to interference and changes once I start a project. Also, I like to work step by step at my own speed.
            </p>
        </div>
        <div className="border-l-3 border-red-400 absolute w-80 p-4 text-left top-120 left-130 text-xs">
            <h1 className="text-white font-bold">True Me</h1>
            <p>
               As Abdulaziz, I scatter my efforts and find it difficult to concentrate except for a short period of time, and then only as long as my interest lasts. My well-being destroys patience and stability that makes me unsystematic, restless, and reliable. I want to act spontaneously, I’m governed by my feelings and I do things when and how I please myself without any restriction or advice from others.
            </p>
        </div>
        <div className="border-l-3 border-red-400 absolute  text-left top-150 right-40 text-xs p-2">
            <h1 className="font-bold text-2xl">Let's Connect</h1>
            <ul className="flex">
                <li><Link href="https://wa.me/+255656792939"><FaWhatsappSquare className="size-10 hover:scale-120 p-2"/></Link></li>
                <li><Link href="https://www.instagram.com/amafitta/"><FaInstagramSquare className="size-10 hover:scale-120 p-2"/></Link></li>
                <li><Link href="https://www.linkedin.com/in/abdulaziz-mafita-86b561178/"><FaLinkedin className="size-10 hover:scale-120 p-2"/></Link></li>
                <li><Link href="https://www.youtube.com/@trueexplorer894"><FaYoutubeSquare className="size-10 hover:scale-120 p-2"/></Link></li>
                <li><Link href="https://twitter.com/amafitta"><FaXTwitter className="size-10 hover:scale-120 p-2"/></Link></li>
                <li><Link href="https://mail.google.com/mail/u/?authuser=amafitta@gmail.com"><SiGmail className="size-10 hover:scale-120 p-2"/></Link></li>
                <li><Link href="https://web.facebook.com/amafitta?ref=bookmarks"><FaFacebookSquare className="size-10 hover:scale-120 p-2"/></Link></li>
            </ul>
        </div>
    </div>
    )
}