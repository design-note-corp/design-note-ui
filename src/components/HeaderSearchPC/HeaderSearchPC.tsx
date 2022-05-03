import { IconButtonSearch } from "../IconButtonSearch";
import { TextField } from "../TextField";
import type { TextFieldProps } from "../TextField";

type HeaderSearchPcProps = Pick<TextFieldProps, "value" | "onChange">;

export const HeaderSearchPC: React.FC<HeaderSearchPcProps> = ({
  value,
  onChange,
}) => {
  return (
    <TextField
      value={value}
      width={360}
      placeholder="キーワードで検索"
      suffix={<IconButtonSearch />}
      onChange={onChange}
    />
  );
};
