import { getUpcomingEvent } from "@/lib/controllers/events.controller";
import { getBookQuotes } from "@/lib/controllers/quotes.controller";

export const getUpcoming = async () => {
  const event = (await getUpcomingEvent())["event"];
  const imageSrc = `${process.env.NEXT_PUBLIC_API_URL}/assets/${event.book.cover}`;
  event.book.cover = imageSrc;
  return event;
};

export const getUpcomingQuotes = async (bookId: string) => {
  const quotes = await getBookQuotes(bookId);
  const descriptions = quotes.map((quote: any) => quote.description);
  return descriptions;
};
