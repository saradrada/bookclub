export const getBookQuotes = async (bookId: string) => {
  const fields = "event.book.id";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items/quotes?filter[book][_eq]=${bookId}`
  );

  const data = (await res.json())["data"];
  return data;
};
