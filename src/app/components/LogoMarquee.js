import Image from "next/image";
import "./LogoMarquee.scss";

import logo1 from "../../../public/images/logo-1.svg";
import logo2 from "../../../public/images/logo-2.svg";
import logo3 from "../../../public/images/logo-3.svg";
import logo4 from "../../../public/images/logo-4.svg";
import logo5 from "../../../public/images/logo-5.svg";
import logo6 from "../../../public/images/logo-6.svg";
import logo7 from "../../../public/images/logo-7.svg";

export default function LogoMarquee() {
  const logos = [
    { src: logo1, alt: "Logo 1" },
    { src: logo2, alt: "Logo 2" },
    { src: logo3, alt: "Logo 3" },
    { src: logo4, alt: "Logo 4" },
    { src: logo5, alt: "Logo 5" },
    { src: logo6, alt: "Logo 6" },
    { src: logo7, alt: "Logo 7" },

    { src: logo1, alt: "Logo 1" },
    { src: logo2, alt: "Logo 2" },
    { src: logo3, alt: "Logo 3" },
    { src: logo4, alt: "Logo 4" },
    { src: logo5, alt: "Logo 5" },
    { src: logo6, alt: "Logo 6" },
    { src: logo7, alt: "Logo 7" },
  ];
  return (
    <div className="tech-slideshow my-24">
      <p className="text-center text-neutral-600">Used by teams you love</p>
      <div className="mover-1">
        {logos.map((logo, index) => (
          <Image src={logo.src} alt="alt" width={250} height={0} key={index} />
        ))}
      </div>
    </div>
  );
}
