import { readdir } from "fs/promises";
import { getWisdomMetadata } from "./getWisdomMetaData";
import type { WisdomPostData } from "./getWisdomMetaData";
import type { Dirent } from "fs";

const isMDXFile = (dirent: Dirent) => !dirent.isDirectory() && dirent.name.endsWith(".mdx");
const getSlugFromFilename = (dirent: Dirent) => dirent.name.substring(0, dirent.name.lastIndexOf("."));


export async function getAllWisdomData(): Promise<WisdomPostData[]> {
    try {
        const dirents = await readdir("./src/wisdom/", {
            withFileTypes: true, 
        }); 
        const slugs = dirents.filter(isMDXFile).map(getSlugFromFilename)
        const result = await Promise.all(
            slugs.map((slug) => {
                return getWisdomMetadata(slug);
            }),
        );
        return result; 
    }catch (error) {
        console.error(error); 
        return [];
    }
}