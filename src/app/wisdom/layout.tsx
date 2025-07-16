import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: `%s | Diaries| TRUE EXPLORER`,
        default: `Diaries`,
    },
    description: "This Diary is about Exploring the World",
    openGraph: {
        locale: "en",
        type: "article",
    },
};

export default function Layout({ children } : { children : React.ReactNode }){
    return <main className="mx-auto px-4">{children}</main>;
}
