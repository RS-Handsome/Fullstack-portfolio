import CLaimButton from "@/components/home/claimbtn";
import UserInfo from "@/components/home/userInfo";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <UserInfo />
      <div className="flex flex-col w-full rounded-md justify-center items-center">
        <Image src="/image/dropgame.png" />
      </div>
      <Button rounded="md" className="w-full">
        <div>⚡</div>
        <p className="text-lg">Farming</p>
        <div><Image src="/image/blum.png" width="20" /></div>
        <p>9.695</p>
        <p className="absolute right-1 text-gray-400 text-sm">06h 46m</p>
      </Button>
      {/* <CLaimButton /> */}
    </section>
  );
}
