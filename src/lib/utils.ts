import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

interface OrderedCollectionPage {
  id: string;
  type: string;
  partOf: string;
  orderedItems: Edition[];
  "@context": string;
}

interface Edition {
  id: string;
  type: string;
  openlibraryKey: string;
  lastEditedBy?: string;
  title: string;
  sortTitle: string;
  subtitle?: string;
  description: string;
  languages: string[];
  series?: string;
  seriesNumber?: string;
  subjects: string[];
  subjectPlaces: string[];
  authors: string[];
  firstPublishedDate?: string;
  publishedDate: string;
  fileLinks: string[];
  cover: Cover;
  work: string;
  isbn10: string;
  isbn13: string;
  oclcNumber?: string;
  pages: number;
  physicalFormat?: string;
  physicalFormatDetail?: string;
  publishers: string[];
  editionRank: number;
  "@context": string;
}

interface Cover {
  type: string;
  url: string;
  name: string;
  "@context": string;
}
interface BookInfo {
  name: string;
  link: string;
  imageUrl: string;
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export async function fetchBooks(): Promise<BookInfo[]> {
  const url = "https://ramblingreaders.org/user/hans/shelf/read.json?page=1"
  const response = await fetch(url);
  const data: OrderedCollectionPage = await response.json();

  return data.orderedItems.map(item => ({
    name: item.title,
    link: item.id,
    imageUrl: item.cover.url
  }));
}
