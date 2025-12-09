import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { LinkHTMLAttributes } from "react";

type LogoProps = React.HTMLAttributes<LinkHTMLAttributes<HTMLAnchorElement>>;

const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center justify-center gap-3.5 select-none",
        className,
      )}
    >
      <Image src="/svgs/logo.svg" alt="Auro" width={30} height={31} priority />
      <span className="text-xl leading-normal font-semibold text-black dark:text-white">
        Auro
      </span>
    </Link>
  );
};

export default Logo;
