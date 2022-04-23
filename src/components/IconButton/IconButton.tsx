import styles from "./IconButton.module.scss";

type IconButtonProps = React.ComponentProps<"button">;

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <button {...rest} className={styles["icon-button"]}>
      {children}
    </button>
  );
};
