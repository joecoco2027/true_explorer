import { FaWhatsappSquare, FaInstagramSquare, FaLinkedin, FaFacebook} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer(){
    return (
        <div className=" flex flex-row justify-between text-white bg-blue-950 p-5 ">
        <h1>&copy; All Rights Reserved. By JOMAFA</h1>
        <ul className="flex mx-5">
            <li className=""><Link href="https://wa.me/+255656792939"><FaWhatsappSquare className="size-8  fill-green-300 hover:size-9"/></Link></li>
            <li><Link href="https://www.instagram.com/amafitta/"><FaInstagramSquare className="size-8 fill-pink-400 hover:size-9"  /></Link></li>
            <li><Link href="https://twitter.com/amafitta"><FaXTwitter className="size-8 fill-white hover:size-9"/></Link></li>
            <li><Link href="https://www.linkedin.com/in/abdulaziz-mafita-86b561178/"><FaLinkedin className="size-8 fill-blue-400 hover:size-9"/></Link></li>
            <li><Link href="https://web.facebook.com/amafitta?ref=bookmarks"><FaFacebook className="size-8 fill-blue-700 hover:size-9"/></Link></li>
        </ul>
        <div className="flex mx-2 sm:flex-col lg:flex-row flex-col">
                
        </div>
    </div>
    )
}