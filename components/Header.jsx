"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="absolute top-[48px] left-0 right-0 z-[60]">
      <div className="container ma-auto">
        <div>
          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              fill
              alt=""
              className="object-contain"
            />
          </Link>
          Header
        </div>
      </div>
    </header>
  );
};

export default Header;
