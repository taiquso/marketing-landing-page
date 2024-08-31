import Image from "next/image";

import logo1 from "../../../public/images/download-2-line.svg";
import logo2 from "../../../public/images/brush-line.svg";
import logo3 from "../../../public/images/exchange-dollar-line.svg";
import logo4 from "../../../public/images/team-line.svg";
import logo5 from "../../../public/images/refresh-line.svg";
import logo6 from "../../../public/images/copyright-line.svg";

const icons = [
  {
    src: logo1,
    title: "Infinite Download",
    para: "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.",
  },
  {
    src: logo2,
    title: "Purely Handcrafted",
    para: "No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.",
  },
  {
    src: logo6,
    title: "All Are Under licensed",
    para: "The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or pints on paper)",
  },
  {
    src: logo3,
    title: "Cancel Anytime",
    para: "Subscribe at your own pace, and cancel when you feel it's enough.",
  },
  {
    src: logo4,
    title: "Empowering For Team",
    para: "We support multiple seats at once, requiring only a single payment.",
  },
  {
    src: logo5,
    title: "No Limitations",
    para: "Use as many as you want, from Dribbble presnetations to PowerPoint presentations.",
  },
];

export default function Features() {
  return (
    <section className="py-12 px-5 md:px-12 lg:px-24 flex flex-col gap-12">
      <div className="flex flex-col gap-5">
        <p className="text-indigo-800 text-center h-full font-semibold">
          Premium abstract images
        </p>
        <h1 className="text-3xl lg:text-5xl text-center font-semibold">
          Easy access to top quality images
        </h1>
        <p className="text-center text-neutral-600">
          In a world where storytelling constantly evolves, we lead woth
          groundbreaking images designed for your presentation excellence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-* items-center gap-8">
        {icons.map((icon, index) => (
          <div className="flex flex-col items-center gap-5" key={index}>
            <Image
              src={icon.src}
              alt="alt"
              width={45}
              height={0}
              className="shadow-md rounded-full p-2"
            />
            <h2 className="font-semibold text-lg">{icon.title}</h2>
            <p className="text-center text-neutral-600">{icon.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
