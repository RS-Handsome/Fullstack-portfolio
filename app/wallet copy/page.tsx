import { title } from "@/components/primitives";
import SelectToken from "@/components/wallet/selectToken";
import TokenList from "@/components/wallet/tokenlist/TokenList";
import TokenSelect from "@/components/wallet/tokenselect/TokenSelect";
import {Button, ButtonGroup} from "@nextui-org/button";

export default function WalletPage() {
  return (
    <div>
      <h1 className={title()}>Wallet</h1>
      <div className="flex flex-col gap-5 mt-5 min-h-[150px] justify-center items-center">
        <SelectToken />
        <div className="flex gap-3">
          <div>$</div><div className="text-xl">0.23</div>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center gap-5">
        <div className="flex flex-col relative">
          <Button radius="full" size="lg" isIconOnly isDisabled>👇</Button>
          <p className="absolute text-gray-500 -bottom-7 -left-1 text-sm">Recieve</p>
        </div>
        <div className="flex flex-col relative">
          <Button radius="full" size="lg" isIconOnly isDisabled>👆</Button>
          <p className="absolute text-gray-500 -bottom-7 left-1 text-sm">Send</p>
        </div>
        <div className="flex flex-col relative">
          <Button radius="full" size="lg" isIconOnly>🕘</Button>
          <p className="absolute text-gray-500 -bottom-7 text-sm">History</p>
        </div>
        <div className="flex flex-col relative">
          <Button radius="full" size="lg" isIconOnly>✨</Button>
          <p className="absolute text-gray-500 -bottom-7 left-1 text-sm">Points</p>
        </div>
      </div>
      <div className="flex mt-10 justify-center items-center mb-5">
        <TokenSelect />
      </div>
      <div className="flex justify-center items-center">
        <TokenList />
      </div>
    </div>
  );
}
