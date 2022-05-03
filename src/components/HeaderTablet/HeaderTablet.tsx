import { Avatar } from "../Avatar";
import { ButtonEdit } from "../ButtonEdit";
import { HeaderSub } from "../HeaderSub";
import { IconButtonBell } from "../IconButtonBell";
import { IconButtonSearch } from "../IconButtonSearch";
import { Gap, Space } from "../Space";
import { className } from "./HeaderTablet.css";

type HeaderTabletProps = {
  avatar: React.ReactNode;
};

export const HeaderTablet: React.FC<HeaderTabletProps> = ({ avatar }) => {
  return (
    <header className={className}>
      <Space alignItems="center" justifyContent="space-between">
        <div>LOGO</div>

        <HeaderSub>
          <Space>
            <IconButtonSearch />
            <IconButtonBell />
          </Space>

          <Space columnGap={Gap.Large} alignItems="center">
            <Avatar width={40} height={40}>
              {avatar}
            </Avatar>

            <ButtonEdit />
          </Space>
        </HeaderSub>
      </Space>
    </header>
  );
};
