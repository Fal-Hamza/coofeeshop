import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", name: "Home" },
  { href: "/", name: "Explore" },
  { href: "/", name: "About" },
  { href: "/menu", name: "Menu" },
  { href: "/contact", name: "Contact" },
];

// icons
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-footer bg-cover bg-no-repeat pt-16 relative">
      {/* overlaY */}
      <div className=" absolute w-full h-full bg-black/[0.90] z-10 top-0"></div>

      <div className="container mx-auto relative z-20">
        <div className="flex flex-col items-center justify-center gap-14">
          {/* logo */}
          <Link href="/" className=" relative w-[120px] h-[50px] mx-auto">
            <Image
              src="/assets/logo.svg"
              fill
              alt="logo"
              quality={100}
              className=" object-contain"
            />
          </Link>
          {/* nav */}
          <nav className=" flex flex-col xl:flex-row gap-8 xl:gap-12 justify-center items-center">
            {links.map((link, index) => {
              return (
                <Link
                  href={link.href}
                  key={index}
                  className=" uppercase text-white tracking-widest hover:text-accent transition-all"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          {/* social */}
          <ul className=" flex text-white text-xl gap-4">
            <Link
              href="/"
              className=" w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="/"
              className=" w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
            >
              <FaInstagram />
            </Link>
            <Link
              href="/"
              className=" w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
            >
              <FaTwitter />
            </Link>
            <Link
              href="/"
              className=" w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
            >
              <FaWhatsapp />
            </Link>
          </ul>
          {/* copyright */}
          <div className=" border-t border-white/10 text-[15px] text-white/70 font-light w-full flex items-center justify-center py-9 ">
            <p>
              &copy; copyright 2025 -{" "}
              <span className=" text-accent font-semibold">Zenbrow</span> . All
              right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
