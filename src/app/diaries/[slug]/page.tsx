import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { metadata } = await getDiariesMetadata(params.slug);
  if (metadata) {
    return metadata;
  }
  throw new Error(`No Metadata Found for blog post: ${params.slug}`);
}

export async function generateStaticParams() {
  const blogPosts = await getAllDiariesData();
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

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
      className={`prose lg:prose-xl dark:prose-invert container mx-auto p-4 ${markdownStyles.markdown} mx-auto px-4 flex flex-col justify-center align-middle self-center w-200 text-center items-center`}
    >
      <Image src={cover} height={200} width={200} alt="cover image" />
      <DiariesMarkdown />
    </div>
  );
}
