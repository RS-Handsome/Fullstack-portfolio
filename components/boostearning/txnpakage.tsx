'use client'
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/button";

export default function TxnPakage({token,TON,isFree}:{token:number,TON:number,isFree:boolean}) {
  return (
    <Card className="max-w-[200px]">
      <CardHeader className="flex gap-3 bg-primary">
        <div className="flex gap-3 justify-center">
          <span className="text-md">{token}</span>
          <span>$lions</span>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        {
          isFree?<>
            <div className="flex flex-col gap-3">
              <p className="text-success">Free Claim</p>
              <Button>Claim</Button>
            </div>
          </>:<>
            <div className="flex flex-col gap-3">
              <p className="text-sm">Make a Transaction</p>
              <Button>{TON} TON</Button>
            </div>
          </>
        }
      </CardBody>
      <Divider/>
    </Card>
  );
}
