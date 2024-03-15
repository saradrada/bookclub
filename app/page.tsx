import Image from "next/image";
import { WaitingList } from "../components/waitlist/waitlist";

export default function Home() {
  return (
    <div>
      <WaitingList />
    </div>
  );
}
