'use client'
import { useState } from "react"
import { Button } from "@nextui-org/button"
import { Image } from "@nextui-org/image"

export default function CLaimButton() {
  const [isclaimed, setClaim] = useState<boolean>(false);
  if (isclaimed) {
    return <>
      <div className="flex w-full">
        <Button rounded="md" className="w-full">
          <div>⚡</div>
          <p className="text-lg">Farming</p>
          <div><Image src="/image/blum.png" width="20" /></div>
          <p>9.695</p>
          <p className="absolute right-1 text-gray-400 text-sm">06h 46m</p>
        </Button>
      </div>
    </>
  } else {
    return <>
      <div className="flex w-full">
        <Button rounded="md" className="w-full" onClick={()=>{setClaim(true)}}>
          Claim
        </Button>
      </div>
    </>
  }
}