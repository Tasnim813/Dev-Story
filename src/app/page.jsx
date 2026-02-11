import Banner from "@/Components/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" text-center space-y-5 bg-linear-60 to-sky-100 from-sky-300 p-10 rounded">
      <Banner></Banner>
      <button className="px-4 py-2 rounded bg-sky-500 text-white text-2xl cursor-pointer hover:bg-black duration-200 ">Share-story</button>
    </div>
  );
}
 