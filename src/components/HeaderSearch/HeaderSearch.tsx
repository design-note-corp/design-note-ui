import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { IconButtonSearch } from "../IconButtonSearch";
import { HeaderSearchPC } from "../HeaderSearchPC";

type HeaderSearchProps = {};

export const HeaderSearch: React.FC<HeaderSearchProps> = (props) => {
  const [value, setValue] = useState("");

  const isPC = useMediaQuery({ query: "(min-width: 905px)" });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  if (!isPC) return <IconButtonSearch />;

  return <HeaderSearchPC value={value} onChange={handleChange} />;
};
