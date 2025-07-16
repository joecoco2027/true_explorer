import Link from "next/link";
import { getAllTalesData } from "./_lib/getAllTalesData";
import Image from "next/image";
export default async function Tales(){
    const tales = await getAllTalesData();
    return (
        <div className="prose prose-xl dark:prose-invert container mx-auto px-4 flex flex-col justify-center align-middle self-center w-max text-center">
            <h1 className="my-4 text-center text-teal-800 text-9xs font-bold ">Tales</h1>
            <p>Here are some recent Tales.</p>
            <ul className="px-5 ml-4 flex flex-1/2 flex-wrap">
                {tales.map(({ slug, metadata: { title}}) => (
                    <li key={slug} className="p-5 hover:scale-110">
                            <Link prefetch={false} href={`/tales/${slug}`}>
                                <h1>{`${title}`}</h1>
                                <Image src="/images/tales/tales3.jpeg" width={400} height={400} alt="Cover Image" className="rounded-2xl"/>
                            </Link>
                    </li> 
                ))}
            </ul>
        </div>
    );
}