import { pt_serif, pt_serif_italic } from "./fonts";

export default function Hero() {
  return (
    <div className="h-screen">
      <div className="h-[80vh] bg-pink-50 flex justify-center items-center">
        <div>
          <Title></Title>
          <Subtitle></Subtitle>
        </div>
      </div>
      <div className="bg-slate-600 h-[20vh]"></div>
    </div>
  );
}

const Title = () => {

  return <div className="md:text-7xl text-3xl text-center"><p className={pt_serif_italic.className}>The Sunday Times</p></div>;
};

const Subtitle = () => {
  return (
    <div className="md:text-8xl text-5xl text-center"><p className={pt_serif.className}>Number One Bestseller</p></div>
  );
};
