// src/app/diaries/[slug]/page.tsx

import dynamic from "next/dynamic";
import { getDiariesMetadata } from "@/app/diaries/_lib/getDiariesMetaData";
import { getAllDiariesData } from "@/app/diaries/_lib/getAllDiariesData";
import type { Metadata } from "next";
import markdownStyles from "@/app/_components/markdown/markdown.module.css";
import Image from "next/image";

// ✅ Correct inline typing
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const { metadata } = await getDiariesMetadata(params.slug);
  return metadata;
}

// ✅ Static paths (for SSG)
export async function generateStaticParams() {
  const diaries = await getAllDiariesData();
  return diaries.map((diary) => ({
    slug: diary.slug,
  }));
}

// ✅ Correct page function with inline prop typing
export default async function DiariesPage({
  params,
}: {
  params: { slug: string };
}) {
  const { metadata } = await getDiariesMetadata(params.slug);
  const cover = metadata.cover ?? "";

  const DiariesMarkdown = dynamic(() =>
    import(`@/diaries/${params.slug}.mdx`)
  );

  return (
    <div
      className={`prose lg:prose-xl dark:prose-invert container mx-auto p-4 ${markdownStyles.markdown}`}
    >
      <Image src={cover} height={200} width={200} alt="cover image" />
      <DiariesMarkdown />
    </div>
  );
}
