import dynamic from "next/dynamic";
import { getDiariesMetadata } from "../_lib/getDiariesMetaData";
import type { Metadata } from "next/types";
import { getAllDiariesData } from "../_lib/getAllDiariesData";
import markdownStyles from "@/app/_components/markdown/markdown.module.css";
import Image from "next/image";

export async function generateMetadata({
    params,
}: PageProps) : Promise<Metadata> {
    const { metadata } = await getDiariesMetadata(params.slug);
    if (metadata) {
        return metadata;
    } else {
        throw new Error(`No Metadata Found for blog post: ${params.slug}`);
    }
}
export async function generateStaticParams(){
    const diaries = await getAllDiariesData();      //FIXME: Read from file System
    const diariesStaticParams = diaries.map((diary) => ({
        slug: diary.slug,
    }));
    return diariesStaticParams;
}


type PageProps = { params : {
    slug: string 
}}; 

export default async function DiariesPage({ params } : PageProps){
    const { metadata } = await getDiariesMetadata(params.slug);
    const cover = `${metadata.cover ?? ""}`
    const DiariesMarkdown = dynamic(() => import("@/diaries/" + params.slug + ".mdx"));
    return (
        <div className={`prose lg:prose-xl dark:prose-invert container mx-auto p-4 ${markdownStyles.markdown} mx-auto px-4 flex flex-col justify-center align-middle self-center w-200 text-center items-center`}>
            <Image src={cover} height={200} width={200} alt="cover image"/>
            <DiariesMarkdown />
        </div>
    );
}