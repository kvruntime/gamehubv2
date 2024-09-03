import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


import defaultImage from '@/public/images/default-game.jpg';
const getCroppedImageUrl = (url: string) => {
	if (!url) return defaultImage;
	const target = 'media/';
	const index = url.indexOf(target) + target.length;
	return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImageUrl;