import type { MDXComponents } from "mdx/types";
import Figure from "./app/_components/Figure";

export function useMDXComponents(components: MDXComponents) : MDXComponents {
    return {
        Figure: (props) => <Figure {...props} />,
        ...components, 
    };
}
