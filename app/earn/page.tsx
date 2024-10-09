'use client'
import { title } from "@/components/primitives";
import { Tabs, Tab } from "@nextui-org/tabs";
import {Listbox, ListboxItem} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/button";
import { Image } from "@nextui-org/image";

export default function EarnPage() {
  return (
    <div>
      <h1 className={title()}>Earn</h1>
      <div className="flex flex-col w-full">
      <Tabs variant={"light"} aria-label="Tabs variants">
          <Tab key="new" title="New" className="p-5">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between w-full gap-3">
                <div className="flex gap-5">
                  <Image src="/svgs/videoIcon.svg" width="40" />
                  <div className="flex flex-col gap-2 items-start">
                    <p className="text-md">What's DAO?</p>
                    <p className="text-sm text-gray-500">+250 BP</p>
                  </div>
                </div>
                <div className="flex">
                  <Button className="text-md rounded-full">Start</Button>
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="flex justify-between w-full gap-3">
                <div className="flex gap-5">
                  <Image src="/svgs/videoIcon.svg" width="40" />
                <div className="flex flex-col gap-2 items-start">
                  <p className="text-md">How to analyze Crypto?</p>
                  <p className="text-sm text-gray-500">+250 BP</p>
                </div>
                </div>
                <div className="flex">
                  <Image src="/svgs/checkIcon.svg" width="30" />
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="flex justify-between w-full gap-3">
                <div className="flex gap-5">
                  <Image src="/svgs/videoIcon.svg" width="40" />
                <div className="flex flex-col gap-2 items-start">
                  <p className="text-md">Bull & Bear 101</p>
                  <p className="text-sm text-gray-500">+250 BP</p>
                </div>
                </div>
                <div className="flex">
                  <Image src="/svgs/checkIcon.svg" width="30" />
                </div>
              </div>
              {/* --------------------------------- */}
            </div>
          </Tab>
          <Tab key="onchain" title="OnChain">
            <div className="flex justify-between w-full gap-3">
              <div className="flex gap-5">
                <Image src="/svgs/blum.svg" width="40"/>
                <div className="flex flex-col gap-2 items-start justify-center">
                  <p className="text-md">Connect TON Wallet</p>
                  {/* <p className="text-sm text-gray-500">+250 BP</p> */}
                </div>
              </div>
              <div className="flex">
                <Button className="text-md rounded-full">Start</Button>
              </div>
            </div>
            {/* --------------------------------- */}
          </Tab>
          <Tab key="socials" title="Socials">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between w-full gap-3">
                <div className="flex gap-5">
                  <Image src="/svgs/blum.svg" width="40" />
                <div className="flex flex-col gap-2 items-start">
                  <p className="text-md">Backing from Binance Labs</p>
                  <p className="text-sm text-gray-500">+111 BP</p>
                </div>
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="flex justify-between w-full gap-3">
                <div className="flex gap-5">
                  <Image src="/svgs/blum.svg" width="40" />
                <div className="flex flex-col gap-2 items-start">
                  <p className="text-md">Follow Blum on Coinmarketcap</p>
                  <p className="text-sm text-gray-500">+90 BP</p>
                </div>
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="flex justify-between w-full gap-3">
                <div className="flex gap-5">
                  <Image src="/svgs/TG.svg" width="40" />
                  <div className="flex flex-col gap-2 items-start">
                    <p className="text-md">Follow Blum CEO on IG</p>
                    <p className="text-sm text-gray-500">+90 BP</p>
                  </div>
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="flex justify-between w-full gap-3">
                <div className="flex gap-5">
                  <Image src="/svgs/TG.svg" width="40" />
                <div className="flex flex-col gap-2 items-start">
                  <p className="text-md">Follow Blum CMO on IG</p>
                  <p className="text-sm text-gray-500">+90 BP</p>
                </div>
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="flex justify-between w-full gap-3">
                <div className="flex gap-5">
                  <Image src="/svgs/TG.svg" width="40" />
                <div className="flex flex-col gap-2 items-start">
                  <p className="text-md">Follow VP of Design on IG</p>
                  <p className="text-sm text-gray-500">+90 BP</p>
                </div>
                </div>
              </div>
              {/* --------------------------------- */}
            </div>
          </Tab>
          <Tab key="academy" title="Academy">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between w-full gap-3">
                <div className="flex gap-5">
                  <Image src="/svgs/videoIcon.svg" width="40" />
                  <div className="flex flex-col gap-2 items-start">
                    <p className="text-md">Forks Explained</p>
                    <p className="text-sm text-gray-500">+250 BP</p>
                  </div>
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="flex justify-between w-full gap-3">
                <div className="flex gap-5">
                  <Image src="/svgs/videoIcon.svg" width="40" />
                  <div className="flex flex-col gap-2 items-start">
                    <p className="text-md">TON Voices Live w/ Blum CEO</p>
                    <p className="text-sm text-gray-500">+250 BP</p>
                  </div>
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="flex justify-between w-full gap-3">
                <div className="flex gap-5">
                  <Image src="/svgs/videoIcon.svg" width="40" />
                  <div className="flex flex-col gap-2 items-start">
                    <p className="text-md">What's DAO?</p>
                    <p className="text-sm text-gray-500">+250 BP</p>
                  </div>
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="flex justify-between w-full gap-3">
                <div className="flex gap-5">
                  <Image src="/svgs/videoIcon.svg" width="40" />
                <div className="flex flex-col gap-2 items-start">
                  <p className="text-md">How to analyze Crypto?</p>
                  <p className="text-sm text-gray-500">+250 BP</p>
                </div>
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="flex justify-between w-full gap-3">
                <div className="flex gap-5">
                  <Image src="/svgs/videoIcon.svg" width="40" />
                <div className="flex flex-col gap-2 items-start">
                  <p className="text-md">Bull & Bear 101</p>
                  <p className="text-sm text-gray-500">+250 BP</p>
                </div>
                </div>
              </div>
              {/* --------------------------------- */}
              <div className="flex justify-between w-full gap-3">
                <div className="flex gap-5">
                  <Image src="/svgs/videoIcon.svg" width="40" />
                  <div className="flex flex-col gap-2 items-start">
                    <p className="text-md">What's Web3?</p>
                    <p className="text-sm text-gray-500">+200 BP</p>
                  </div>
                </div>
              </div>
              {/* --------------------------------- */}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
