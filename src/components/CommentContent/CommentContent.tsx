import { className } from "./CommentContent.css";

type CommentContentProps = React.PropsWithChildren<{}>;

export const CommentContent: React.FC<CommentContentProps> = ({ children }) => {
  return <div className={className}>{children}</div>;
};
