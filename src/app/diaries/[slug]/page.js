// src/app/diaries/[slug]/page.js

import dynamic from "next/dynamic";
import { getDiariesMetadata } from "@/app/diaries/_lib/getDiariesMetaData";
import { getAllDiariesData } from "@/app/diaries/_lib/getAllDiariesData";
import markdownStyles from "@/app/_components/markdown/markdown.module.css";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { metadata } = await getDiariesMetadata(params.slug);
  return metadata;
}

export async function generateStaticParams() {
  const posts = await getAllDiariesData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function DiariesPage({ params }) {
  const { metadata } = await getDiariesMetadata(params.slug);
  const cover = metadata.cover ?? "";

  const DiariesMarkdown = dynamic(() =>
    import(`@/diaries/${params.slug}.mdx`)
  );

  return (
    <div
      className={`prose lg:prose-xl dark:prose-invert container mx-auto p-4 ${markdownStyles.markdown}`}
    >
      <Image src={cover} width={200} height={200} alt="cover image" />
      <DiariesMarkdown />
    </div>
  );
}
