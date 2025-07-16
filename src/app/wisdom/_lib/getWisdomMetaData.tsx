import type { Metadata } from "next/types";
import { notFound } from "next/navigation";

export type PostMetadata = Metadata & {
    title: string;
    description: string; 
};

export type WisdomPostData = {
    slug: string;
    metadata: Metadata; 
};

export async function getWisdomMetadata(slug: string): Promise<WisdomPostData>{
    try {
        const file = await import("@/wisdom/" + slug + ".mdx"); 
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
    } catch (error){
        console.error((error as Error)?.message);
        return notFound();
    }
}