import { Button } from "../Button/Button";
import { Edit } from "../Icons";

type ButtonEditProps = {};

export const ButtonEdit: React.FC<ButtonEditProps> = (props) => {
  return <Button startIcon={<Edit />}>投稿</Button>;
};
