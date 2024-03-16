import { getUpcoming } from "@/lib/services/upcoming.service";
import { CoverBook } from "./cover-book";
import { pt_serif } from "./fonts";

export default async function Upcoming() {
  const upcoming_event = await getUpcoming();

  return (
    <div className="h-screen">
      <div className="flex w-full h-4/5">
        <div className="w-2/5 bg-orange-100 flex justify-center items-center">
          <CoverBook src={upcoming_event.book.cover}/>
        </div>
        <div className="w-3/5 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-10 px-28">
            <h1 className="text-5xl font-serif">
              <p className={pt_serif.className}>{upcoming_event.title}</p>
            </h1>
            <p className="text-2xl font-serif">
              {upcoming_event.description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full h-1/5 bg-green-500"></div>
    </div>
  );
}
