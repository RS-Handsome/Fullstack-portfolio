import { title } from "@/components/primitives";
import SelectToken from "@/components/wallet/selectToken";
import TokenList from "@/components/wallet/tokenlist/TokenList";
import TokenSelect from "@/components/wallet/tokenselect/TokenSelect";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Link} from "@nextui-org/link";

export default function WalletPage() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className={title()}>Wallet</h1>
      <div className="flex w-full text-2xl text-center min-h-[100px] p-5">
        Get real crypto, Earn and buy tokens with TON
      </div>
      <Button className="w-[200px]">Connect Wallet</Button>
      <Button className="w-[200px]">
        <Link href="/boostearning">Boost Earning</Link>
      </Button>
    </div>
  );
}
