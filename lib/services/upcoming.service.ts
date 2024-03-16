import { getUpcomingEvent } from "@/lib/controllers/events.controller";

export const getUpcoming = async () => {
  const event = (await getUpcomingEvent())["event"];
  const imageSrc = `${process.env.NEXT_PUBLIC_API_URL}/assets/${event.book.cover}`;
  event.book.cover = imageSrc;
  return event;
};
