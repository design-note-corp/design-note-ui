import { className } from "./Title.css";

type TitleProps = React.PropsWithChildren<{
  level?: 1 | 2 | 3 | 4 | 5;
}>;

export const Title: React.FC<TitleProps> = ({ children, level = 1 }) => {
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
  }
};
