import { className } from "./CommentCreatedAt.css";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ja";
dayjs.extend(relativeTime);
dayjs.locale("ja");

type CommentCreatedAtProps = {
  createdAt: string;
};

export const CommentCreatedAt: React.FC<CommentCreatedAtProps> = ({
  createdAt,
}) => {
  return <div className={className}>{dayjs(createdAt).from(dayjs())}</div>;
};
