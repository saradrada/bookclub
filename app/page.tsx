import Image from "next/image";
import { WaitingList } from "./waitlist";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <WaitingList />
    </div>
  );
}
