import { Avatar } from "../Avatar";
import { HeaderSub } from "../HeaderSub";
import { IconButtonBell } from "../IconButtonBell";
import { IconButtonSearch } from "../IconButtonSearch";
import { Space } from "../Space";
import { className } from "./HeaderMobile.css";

type HeaderMobileProps = {
  avatar: React.ReactNode;
};

export const HeaderMobile: React.FC<HeaderMobileProps> = ({ avatar }) => {
  return (
    <header className={className}>
      <Space alignItems="center" justifyContent="space-between">
        <div>LOGO</div>

        <HeaderSub>
          <div>
            <IconButtonSearch />
            <IconButtonBell />
          </div>

          <Avatar width={40} height={40}>
            {avatar}
          </Avatar>
        </HeaderSub>
      </Space>
    </header>
  );
};
