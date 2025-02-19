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

interface PixelfedPost {
  id: string;
  uri: string;
  url: string;
  in_reply_to_id: string | null;
  in_reply_to_account_id: string | null;
  reblog: any | null;
  content: string;
  created_at: string;
  emojis: any[];
  reblogs_count: number;
  favourites_count: number;
  reblogged: boolean;
  favourited: boolean;
  muted: boolean;
  sensitive: boolean;
  spoiler_text: string;
  visibility: 'public' | 'private' | 'unlisted' | 'direct';
  application: {
    name: string;
    website: string | null;
  };
  language: string | null;
  mentions: any[];
  tags: any[];
  poll: any | null;
  edited_at: string | null;
  account: PixelfedAccount;
  replies_count: number;
  media_attachments: MediaAttachment[];
  bookmarked: boolean;
}

interface PixelfedAccount {
  id: string;
  username: string;
  acct: string;
  display_name: string;
  discoverable: boolean;
  locked: boolean;
  followers_count: number;
  following_count: number;
  statuses_count: number;
  note: string;
  url: string;
  avatar: string;
  created_at: string;
  avatar_static: string;
  bot: boolean;
  emojis: any[];
  fields: any[];
  header: string;
  header_static: string;
  last_status_at: string | null;
}

interface MediaAttachment {
  id: string;
  type: 'image' | 'video' | 'gifv' | 'audio';
  url: string;
  remote_url: string | null;
  preview_url: string;
  text_url: string | null;
  meta: {
    focus: {
      x: number;
      y: number;
    };
    original: {
      width: number;
      height: number;
      size: string;
      aspect: number;
    };
  };
  description: string | null;
  blurhash: string;
}

export async function fetchPictures(): Promise<PixelfedPost[]> {
  const accountId = import.meta.env.PIXELFED_ACCOUNT_ID
  const url = `https://pixelfed.tokyo/api/v1/accounts/${accountId}/statuses`
  const headers = new Headers()
  const pixelfedKey = import.meta.env.PIXELFED_KEY
  headers.append("Authorization", `Bearer ${pixelfedKey}`)
  
  const response = await fetch(url, {headers})
  const data = await response.json()
  return data as PixelfedPost[]
}
