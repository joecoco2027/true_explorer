import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: `%s | Tales| TRUE EXPLORER`,
        default: `Tales`,
    },
    description: "Here are Different Tales on African Culture and all over the world",
    openGraph: {
        locale: "en",
        type: "article",
    },
};

export default function Layout({ children } : { children : React.ReactNode }){
    return <main className="mx-auto px-4">{children}</main>;
}
