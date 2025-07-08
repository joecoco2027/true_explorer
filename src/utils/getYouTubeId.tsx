// utils/getYouTubeId.ts
export function getYouTubeId(url: string): string | null {
  const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&#?]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
