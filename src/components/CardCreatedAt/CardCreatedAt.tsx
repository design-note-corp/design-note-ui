import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ja";
dayjs.extend(relativeTime);
dayjs.locale("ja");

type CardCreatedAtProps = {
  createdAt: string;
};

export const CardCreatedAt: React.FC<CardCreatedAtProps> = ({ createdAt }) => {
  return <div>{dayjs(createdAt).from(dayjs())}</div>;
};
