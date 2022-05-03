import { className } from "./CommentAuthor.css";

type CommentAuthorProps = React.PropsWithChildren<{}>;

export const CommentAuthor: React.FC<CommentAuthorProps> = ({ children }) => {
  return <div className={className}>{children}</div>;
};
