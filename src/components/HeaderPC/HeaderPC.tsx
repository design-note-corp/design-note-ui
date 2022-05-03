import { Avatar } from "../Avatar";
import { ButtonEdit } from "../ButtonEdit";
import { HeaderSub } from "../HeaderSub";
import { IconButtonBell } from "../IconButtonBell";
import { IconButtonSearch } from "../IconButtonSearch";
import { Gap, Space } from "../Space";
import { TextField, TextFieldProps } from "../TextField";
import { className } from "./HeaderPC.css";

type HeaderPCProps = Pick<TextFieldProps, "value" | "onChange"> & {
  avatar: React.ReactNode;
};

export const HeaderPC: React.FC<HeaderPCProps> = ({
  value,
  avatar,
  onChange,
}) => {
  return (
    <header className={className}>
      <Space alignItems="center" justifyContent="space-between">
        <div>LOGO</div>

        <HeaderSub>
          <Space columnGap={Gap.Medium}>
            <TextField
              value={value}
              width={360}
              placeholder="キーワードで検索"
              suffix={<IconButtonSearch />}
              onChange={onChange}
            />
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
