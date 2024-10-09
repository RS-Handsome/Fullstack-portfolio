import { Avatar } from "@nextui-org/avatar";
import { Image } from "@nextui-org/image";

export default function UserInfo() {
  return <>
    <div className="flex flex-col gap-4 justify-center items-center p-5">
      <Avatar src="/hero.png" className="w-40 h-40 text-large" />
      <div className="text-xl text-center">begraaNawab</div>
      <div className="flex text-3xl text-center gap-1 p-5">
        <div><Image src="/image/blum.png" width="40" /></div>
        <p>168,763</p>
      </div>
    </div>
  </>
}