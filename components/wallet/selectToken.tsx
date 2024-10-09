'use client'

import React from "react";
import {Select, SelectItem} from "@nextui-org/react";
import {PetIcon} from "./PetIcon";
import {animals} from "./data";

export default function SelectToken() {
  return (
    <Select
      className="w-[150px]"
      defaultSelectedKeys={["cat"]}
      label="Favorite Animal"
      placeholder="Select an animal"
      startContent={<PetIcon />}
    >
      {animals.map((animal) => (
        <SelectItem key={animal.key}>{animal.label}</SelectItem>
      ))}
    </Select>
  );
}

