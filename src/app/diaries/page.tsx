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
                {blogs.map(({ slug, metadata: { title, cover }}) => (
                    <li key={slug} className="p-5 hover:scale-110">
                            <Link prefetch={false} href={`/diaries/${slug}`}>
                                <h1>{`${title}`}</h1>
                                <Image src={cover} width={100} height={100} alt="Cover Image"/>
                            </Link>
                    </li> 
                ))}
            </ul>
        </div>
    );
}