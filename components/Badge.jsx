import Image from "next/image";

function Badge({ containerStyles }) {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image
        src="/assets/badge.svg"
        fill
        sizes="(min-width: 1280px) 180px"
        alt=""
        className="object-contain"
      />
    </div>
  );
}

export default Badge;
