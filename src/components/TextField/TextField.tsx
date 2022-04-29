import clsx from "clsx";
import { Space } from "../Space";
import * as styles from "./TextField.css";

type TextFieldProps = React.ComponentProps<"input"> & {
  suffix?: React.ReactNode;
};

export const TextField: React.FC<TextFieldProps> = ({ suffix, ...rest }) => {
  return (
    <Space
      {...rest}
      className={clsx(styles.container, !!suffix && styles.withSuffix)}
      placeholder="キーワードで検索"
      inline
    >
      <input className={styles.input} />
      {suffix}
    </Space>
  );
};
