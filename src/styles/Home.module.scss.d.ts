export type Styles = {
  card: string;
  code: string;
  container: string;
  description: string;
  footer: string;
  grid: string;
  logo: string;
  main: string;
  title: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
