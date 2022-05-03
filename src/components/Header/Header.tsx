import { useMediaQuery } from "react-responsive";
import { HeaderMobile } from "../HeaderMobile";
import { HeaderTablet } from "../HeaderTablet";
import { HeaderPC } from "../HeaderPC";
import { useState } from "react";

type HeaderProps = {
  avatar: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = (props) => {
  const [value, setValue] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 599px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 904px)" });

  if (isMobile) return <HeaderMobile {...props} />;
  if (isTablet) return <HeaderTablet {...props} />;
  return <HeaderPC {...props} value={value} onChange={handleChange} />;
};
