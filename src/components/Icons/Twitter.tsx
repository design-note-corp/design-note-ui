import { SVGProps } from "react";

const SvgTwitter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-4.97-1.585c0 3.185-2.425 6.86-6.86 6.86-1.36 0-2.63-.4-3.685-1.09a4.847 4.847 0 0 0 3.57-.995 2.407 2.407 0 0 1-2.25-1.675 2.403 2.403 0 0 0 1.09-.04A2.414 2.414 0 0 1 6.96 11.11v-.03c.325.18.695.29 1.09.3a2.4 2.4 0 0 1-1.075-2.005c0-.44.12-.855.325-1.21a6.84 6.84 0 0 0 4.97 2.52 2.411 2.411 0 0 1 4.105-2.2c.55-.11 1.065-.31 1.53-.585a2.41 2.41 0 0 1-1.06 1.335c.49-.06.955-.19 1.385-.38a4.94 4.94 0 0 1-1.205 1.25c.005.1.005.205.005.31Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTwitter;
