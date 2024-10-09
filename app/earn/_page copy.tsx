"use client";

import { title } from "@/components/primitives";
import { useState } from "react";

const tabs = [
  {
    id: 1,
    name: "New"
  },
  {
    id: 2,
    name: "OnChain"
  },
  {
    id: 3,
    name: "Socials"
  },
  {
    id: 4,
    name: "Academy"
  },
  {
    id: 5,
    name: "Facebook"
  },
]

export default function EarnPage() {
  const [tabIndex, setIndex] = useState<number>(1);

  return (
    <div className="flex flex-col gap-4">
      <h1 className={title()}>Earn</h1>
      <div className="grid grid-cols-5 space-x-2">
        {
          tabs.map((item: any) => (
            <div key={item?.id} className={`cursor-point ${tabIndex == item.id ? 'bg-[#555]' : ''}`} onClick={() => setIndex(item.id)}>
              {item.name}
            </div>
          ))
        }
      </div>
      
    </div>
  );
}
