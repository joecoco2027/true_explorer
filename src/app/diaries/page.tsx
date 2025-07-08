import Link from "next/link";
import { getAllDiariesData } from "./_lib/getAllDiariesData";
import Image from "next/image";
export default async function Blogs(){
    const blogs = await getAllDiariesData();
    return (
        <div className="prose prose-xl dark:prose-invert container mx-auto px-4 flex flex-col justify-center align-middle self-center w-max text-center">
            <h1 className="my-4 text-center text-teal-800 text-9xs font-bold ">Diaries</h1>
            <p>Here are some recent Diaries.</p>
            <ul className="px-5 ml-4 flex flex-1/2 flex-wrap">
                {blogs.map(({ slug, metadata: { title}}) => (
                    <li key={slug} className="p-5 hover:scale-110">
                            <Link prefetch={false} href={`/diaries/${slug}`}>
                                <h1>{`${title}`}</h1>
                                <Image src="/images/diaries/diaries3.jpg" width={400} height={400} alt="Cover Image" className="rounded-2xl"/>
                            </Link>
                    </li> 
                ))}
            </ul>
        </div>
    );
}