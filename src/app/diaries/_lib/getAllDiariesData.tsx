import { readdir } from "fs/promises";
import { getDiariesMetadata } from "./getDiariesMetaData";
import type { DiariesPostData } from "./getDiariesMetaData";
import type { Dirent } from "fs";

const isMDXFile = (dirent: Dirent) => !dirent.isDirectory() && dirent.name.endsWith(".mdx");
const getSlugFromFilename = (dirent: Dirent) => dirent.name.substring(0, dirent.name.lastIndexOf("."));


export async function getAllDiariesData(): Promise<DiariesPostData[]> {
    try {
        const dirents = await readdir("./src/diaries/", {
            withFileTypes: true, 
        }); 
        const slugs = dirents.filter(isMDXFile).map(getSlugFromFilename)
        const result = await Promise.all(
            slugs.map((slug) => {
                return getDiariesMetadata(slug);
            }),
        );
        return result; 
    }catch (error) {
        console.error(error); 
        return [];
    }
}