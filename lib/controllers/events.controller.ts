export const getUpcomingEvent = async () => {
  const fields = "event.*, event.book.cover";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items/upcoming?fields=${fields}`
  );
  const data = (await res.json())["data"];
  return data;
};
