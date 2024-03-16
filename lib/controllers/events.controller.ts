export const getUpcomingEvent = async () => {
  const fields = "event.title,event.description,event.book.cover,event.book.id";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items/upcoming?fields=${fields}`
  );
  const data = (await res.json())["data"];
  return data;
};
