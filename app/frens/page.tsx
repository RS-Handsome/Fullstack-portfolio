'use client'

import { title } from "@/components/primitives";
import {Avatar, AvatarGroup} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/button";
import FrensList from "@/components/frens/frensList";
import { Image } from "@nextui-org/image";

export default function FrensPage() {
  return (
    <div>
      <h1 className={title()}>Frens</h1>
      <div className="flex p-5 m-5 justify-center items-center">
        <Image src="/svgs/multiusers.svg" width="30" />
      </div>
      <div className="text-xl">Invite frens</div>
      <div className="flex flex-col gap-3 min-h-[150px] border-gray-600 rounded-md mt-5 p-5 border-[1px] justify-center items-center">
        <div className="flex gap-2">
          <div><Image src="/image/blum.png" width="25" /></div>
          <p className="text-lg">97</p>
        </div>
        <Button className="text-gray-300" isDisabled>Claim in 04h 58m</Button>
      </div>
      <div className="flex text-xs mt-2 text-gray-400 text-center justify-center">
        Score 10% from buddies + 2.5% from thier referrals<br />
        Get a Play Pass  fro each frends
      </div>
      <div className="flex flex-col mt-5">
        <FrensList />
        <Button className="mt-5 bg-[#FFF] text-black">Invite a Fren</Button>
      </div>
    </div>
  );
}
