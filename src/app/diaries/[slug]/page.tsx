// src/app/diaries/[slug]/page.tsx

import dynamic from "next/dynamic";
import { getDiariesMetadata } from "@/app/diaries/_lib/getDiariesMetaData";
import { getAllDiariesData } from "@/app/diaries/_lib/getAllDiariesData";
import type { Metadata } from "next";
import markdownStyles from "@/app/_components/markdown/markdown.module.css";
import Image from "next/image";

type BlogPageProps = { params: { slug : string }};

// ✅ Fix typing here — use inline type
export async function generateMetadata(
  { params, }: BlogPageProps
): Promise<Metadata> {
  const { metadata } = await getDiariesMetadata(params.slug);
  if (metadata){
    return metadata;
  } else {
    throw new Error(`No metadata Found for blog post: ${params.slug}`)
  }
}

// ✅ This is for SSG
export async function generateStaticParams() {
  const posts = await getAllDiariesData();
  const blogStaticParams = posts.map((post) => ({
    slug: post.slug,
  }));
  return blogStaticParams;
}

// ✅ Page component — use inline type, not custom one!
export default async function DiariesPage({ params }: BlogPageProps){
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
