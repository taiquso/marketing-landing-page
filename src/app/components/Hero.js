import img from "../../../public/images/prism.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-full py-24 bg-white rounded px-5 flex flex-col gap-10 lg:flex-row lg:items-center">
      <div className="lg:w-1/2 lg:h-full lg:justify-center flex flex-col gap-8 lg:px-14">
        <div className="flex flex-col gap-5 w-full">
          <h1 className="font-semibold text-4xl lg:text-5xl">
            Well crafted abstract images
          </h1>
          <p className="text-neutral-600 text-xl">
            High quality abstract images for your projects, wallpaper and
            presentations.
          </p>
        </div>
        <div className="flex justify-between gap-8 md:justify-start">
          <button className="bg-white px-5 border border-neutral-400 border-opacity-30 py-3 rounded shadow-md hover:opacity-75 w-full max-w-[200px]">
            Learn more
          </button>
          <button className="text-white bg-indigo-700 px-5 py-3 rounded shadow-md hover:opacity-85 w-full max-w-[200px]">
            See pricing
          </button>
        </div>
      </div>
      <div className="lg:w-1/2">
        <Image src={img} alt="alt" width={5000} height={0} />
      </div>
    </section>
  );
}
