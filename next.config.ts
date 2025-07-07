import type { NextConfig } from "next";
import createMDX from "@next/mdx"; 
import rehypePrettyCode from "rehype-pretty-code";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true, 
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};


const withMDX = createMDX({
  options: {
  }
});

export default withMDX(nextConfig);
