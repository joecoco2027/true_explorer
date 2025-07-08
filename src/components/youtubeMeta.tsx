// components/YouTubeMeta.tsx
'use client';
import { useEffect, useState } from 'react';
import { getYouTubeId } from '../utils/getYouTubeId';

interface Props {
  url: string;
}

export default function YouTubeMeta({ url }: Props) {
  const [meta, setMeta] = useState<{ title: string; thumbnail_url: string } | null>(null);
  const videoId = getYouTubeId(url);

  useEffect(() => {
    if (!videoId) return;

    const fetchMeta = async () => {
      try {
        const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
        if (!res.ok) return;
        const data = await res.json();
        setMeta({ title: data.title, thumbnail_url: data.thumbnail_url });
      } catch (err) {
        console.error('Error fetching YouTube metadata:', err);
      }
    };

    fetchMeta();
  }, [videoId]);

  if (!videoId) return <div>Invalid YouTube URL</div>;
  if (!meta) return <div>Loading...</div>;

  return (
    <div style={{ marginBottom: '2rem' }} className='flex flex-col  m-5 text-center bg-blue-900 rounded-3xl'>
     <h3 className='text-wrap w-100 text-center ml-20 font-bold text-lg'>{meta.title}</h3>
      <iframe
        className='m-10'
        width={500}
        height={500}
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      ></iframe>      
    </div>
  );
}
