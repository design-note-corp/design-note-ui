import clsx from "clsx";
import { Space } from "../Space";
import * as styles from "./TextField.css";

export type TextFieldProps = React.ComponentProps<"input"> & {
  suffix?: React.ReactNode;
};

export const TextField: React.FC<TextFieldProps> = ({
  suffix,
  width,
  ...rest
}) => {
  return (
    <Space
      width={width}
      className={clsx(styles.container, !!suffix && styles.withSuffix)}
      inline
    >
      <input {...rest} className={styles.input} />
      {suffix}
    </Space>
  );
};
