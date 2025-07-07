import type { Metadata } from "next/types";
import { notFound } from "next/navigation";

export type PostMetadata = Metadata & {
    title: string;
    description: string; 
};

export type DiariesPostData = {
    slug: string;
    metadata: Metadata; 
};

export async function getDiariesMetadata(slug: string): Promise<DiariesPostData>{
    try {
        const file = await import("@/diaries/" + slug + ".mdx"); 
        if (file?.metadata){
            if (!file.metadata.title || !file.metadata.description){
                throw new Error(`Missing some required metadata Fields in : ${slug}`);
            }
            return {
                slug,
                metadata: file.metadata, 
            }; 
        } else {
            throw new Error(`Unable to Find Metadata for ${slug}.mdx`);
        }
    } catch (error: any){
        console.error(error?.message);
        return notFound();
    }
}