import { SVGProps } from "react";

const SvgAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.833 13.667v9h-1.958v-9H2.833v-1.959h9.042V2.667h1.958v9.041h9v1.959h-9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAdd;
