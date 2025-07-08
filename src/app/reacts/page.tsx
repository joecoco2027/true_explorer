// pages/index.tsx or your main page
'use client';
import YouTubeMeta from '@/components/youtubeMeta';

export default function Home() {
  const videoUrls = [
    "https://www.youtube.com/watch?v=i7WlSwbRu6c",
    "https://www.youtube.com/watch?v=gHCg100GVzU",
    "https://www.youtube.com/watch?v=r9rS0qjnacU&pp=0gcJCcEJAYcqIYzv",
    "https://www.youtube.com/watch?v=iFhHT2Gh6pw",
    "https://www.youtube.com/watch?v=xk_PUQKzlk4",
    "https://www.youtube.com/watch?v=6F_ZeJqshDQ",
    "https://www.youtube.com/watch?v=3hBNfRWL_CY",
    "https://www.youtube.com/watch?v=MH0pMV8Azww",
    "https://www.youtube.com/watch?v=9x4ionBWH-g",
    "https://www.youtube.com/watch?v=asP7yCNKCKc",
    "https://www.youtube.com/watch?v=zFQnz59bQjI",
    "https://www.youtube.com/watch?v=EztPwQeFPfU",
    "https://www.youtube.com/watch?v=iARCGltkof8",
    "https://www.youtube.com/watch?v=iTN5WO5-rjE",
    "https://www.youtube.com/watch?v=BX9qznRjLPI"
  ];

  return (
    <div className='flex flex-row flex-wrap self-center items-center justify-center text-center align-middle bg-black '> 
      {videoUrls.map((url, index) => (
        <YouTubeMeta key={index} url={url} />
      ))}
    </div>
  );
}
