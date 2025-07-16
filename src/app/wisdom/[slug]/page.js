// src/app/diaries/[slug]/page.js

import dynamic from "next/dynamic";
import { getWisdomMetadata } from "../_lib/getWisdomMetaData";
import { getAllWisdomData } from "../_lib/getAllWisdomData";
import markdownStyles from "@/app/_components/markdown/markdown.module.css";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { metadata } = await getWisdomMetadata(params.slug);
  if (metadata) {
    return metadata;
  } else  {
    throw new Error(`No metadata found for Wisdom post: ${params.slug}`);
  }
}

export async function generateStaticParams() {
  const wisdoms = await getAllWisdomData();
  return wisdoms.map((wisdom) => ({
    slug: wisdom.slug,
  }));
}

export default async function WisdomPage({ params }) {
  const { metadata } = await getWisdomMetadata(params.slug);
  const cover = metadata.cover ?? "";

  const WisdomMarkdown = dynamic(() =>
    import(`@/wisdom/${params.slug}.mdx`)
  );

  return (
    <div
      className={`prose lg:prose-xl dark:prose-invert container mx-auto p-4 ${markdownStyles.markdown} flex flex-col w-200 self-center items-center`}
    >
      <Image src={cover} width={200} height={200} alt="cover image" />
      <WisdomMarkdown />
    </div>
  );
}
