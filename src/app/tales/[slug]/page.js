// src/app/diaries/[slug]/page.js

import dynamic from "next/dynamic";
import { getTalesMetadata } from "../_lib/getTalesMetaData"
import { getAllTalesData } from "../_lib/getAllTalesData";
import markdownStyles from "@/app/_components/markdown/markdown.module.css";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { metadata } = await getTalesMetadata(params.slug);
  if (metadata) {
    return metadata;
  } else  {
    throw new Error(`No metadata found for Tales post: ${params.slug}`);
  }
}

export async function generateStaticParams() {
  const tales= await getAllTalesData();
  return tales.map(( tale ) => ({
    slug: tale.slug,
  }));
}

export default async function TalesPage({ params }) {
  const { metadata } = await getTalesMetadata(params.slug);
  const cover = metadata.cover ?? "";

  const TalesMarkdown = dynamic(() =>
    import(`@/tales/${params.slug}.mdx`)
  );

  return (
    <div
      className={`prose lg:prose-xl dark:prose-invert container mx-auto p-4 ${markdownStyles.markdown} flex flex-col w-200 self-center items-center`}
    >
      <Image src={cover} width={200} height={200} alt="cover image" />
      < TalesMarkdown />
    </div>
  );
}
