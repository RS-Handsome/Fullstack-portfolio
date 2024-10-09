import React from "react"
import { Link } from "@nextui-org/link"
import { siteConfig } from "@/config/site";
import { Image } from "@nextui-org/image";

export default function BottomMenuBar() {
  return (
    <>
      <div className="flex gap-3 p-3 justify-center items-center">
        {
          siteConfig.navItems.map((item, index) => (
            <Link href={item.href} key={index} className="text-foreground flex flex-col justify-center items-center">
              <Image src={`/svgs/${item.label}.svg`} width="30" />
              {item.label}
            </Link>
          ))
        }
      </div>
    </>
  );
}
