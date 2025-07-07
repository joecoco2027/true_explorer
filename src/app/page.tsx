"use client";
import Image from "next/image";
import TopSection from "@/components/topSection";
import SecondSection from "@/components/secondSection";

export default function Home(){
  return(
    <main>  
      <TopSection />
      <SecondSection />
      <SecondSection />
    </main>
  )
}