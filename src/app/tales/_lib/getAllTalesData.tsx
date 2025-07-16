import { readdir } from "fs/promises";
import { getTalesMetadata } from "./getTalesMetaData";
import type { TalesPostData } from "./getTalesMetaData";
import type { Dirent } from "fs";

const isMDXFile = (dirent: Dirent) => !dirent.isDirectory() && dirent.name.endsWith(".mdx");
const getSlugFromFilename = (dirent: Dirent) => dirent.name.substring(0, dirent.name.lastIndexOf("."));


export async function getAllTalesData(): Promise<TalesPostData[]> {
    try {
        const dirents = await readdir("./src/tales/", {
            withFileTypes: true, 
        }); 
        const slugs = dirents.filter(isMDXFile).map(getSlugFromFilename)
        const result = await Promise.all(
            slugs.map((slug) => {
                return getTalesMetadata(slug);
            }),
        );
        return result; 
    }catch (error) {
        console.error(error); 
        return [];
    }
}