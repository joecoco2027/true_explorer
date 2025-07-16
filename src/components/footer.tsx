import { FaWhatsappSquare, FaInstagramSquare, FaLinkedin, FaFacebook} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer(){
    return (
        <div className=" flex flex-row justify-between text-white bg-blue-950 p-5 ">
        <h1>&copy; All Rights Reserved. By JOMAFA</h1>
        <ul className="flex mx-5">
            <li className=""><Link href="https://wa.me/+255613204190"><FaWhatsappSquare className="size-8  fill-green-300 hover:size-9"/></Link></li>
            <li><Link href="https://www.instagram.com/amafitta/"><FaInstagramSquare className="size-8 fill-pink-400 hover:size-9"  /></Link></li>
            <li><Link href="https://twitter.com/amafitta"><FaXTwitter/></Link></li>
            <li><Link href="https://www.linkedin.com/in/abdulaziz-mafita-86b561178/"><FaLinkedin/></Link></li>
            <li><Link href="https://web.facebook.com/amafitta?ref=bookmarks"><FaFacebook/></Link></li>
        </ul>
        <div className="flex mx-2 sm:flex-col lg:flex-row flex-col">
                
        </div>
    </div>
    )
}