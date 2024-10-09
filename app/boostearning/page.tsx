import TxnPakage from "@/components/boostearning/txnpakage";
import { title } from "@/components/primitives";
import SelectToken from "@/components/wallet/selectToken";
import TokenList from "@/components/wallet/tokenlist/TokenList";
import TokenSelect from "@/components/wallet/tokenselect/TokenSelect";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import { Image } from "@nextui-org/image";

export default function BoostEarning() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className={title()}>Boost Earning</h1>
      <div className="flex flex-col">
        <div className="flex flex-row justify-center items-center">
          <TxnPakage token={10000} TON={0.1} isFree={false}/>
          <Image src="/svgs/darrow.svg"width="30"/>
          <TxnPakage  token={10000} TON={0} isFree={true}/>
        </div>
        <div className="flex justify-end items-center px-10">
          <Image src="/svgs/ddownarrow.svg" width="30" />
        </div>
        {/* --------------------------------------- */}
        <div className="flex flex-row justify-center items-center">
          <TxnPakage token={25000} TON={0} isFree={true}/>
          <Image src="/svgs/dleftarrow.svg"width="30"/>
          <TxnPakage  token={25000} TON={0.2} isFree={false}/>
        </div>
        <div className="flex justify-start items-center px-10">
          <Image src="/svgs/ddownarrow.svg" width="30" />
        </div>
        {/* --------------------------------------- */}
        <div className="flex flex-row justify-center items-center">
          <TxnPakage token={50000} TON={0.4} isFree={false}/>
          <Image src="/svgs/darrow.svg"width="30"/>
          <TxnPakage  token={50000} TON={0} isFree={true}/>
        </div>
        <div className="flex justify-end items-center px-10">
          <Image src="/svgs/ddownarrow.svg" width="30" />
        </div>
        {/* --------------------------------------- */}
        <div className="flex flex-row justify-center items-center">
          <TxnPakage token={100000} TON={0} isFree={true}/>
          <Image src="/svgs/dleftarrow.svg"width="30"/>
          <TxnPakage  token={100000} TON={0.8} isFree={false}/>
        </div>
        <div className="flex justify-start items-center px-10">
          <Image src="/svgs/ddownarrow.svg" width="30" />
        </div>
      </div>
    </div>
  );
}
