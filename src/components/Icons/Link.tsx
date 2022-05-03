import { SVGProps } from "react";

const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 9h-4V7h4a5 5 0 0 1 0 10h-4v-2h4a3 3 0 1 0 0-6ZM11 7v2H7a3 3 0 1 0 0 6h4v2H7A5 5 0 0 1 7 7h4Z"
      fill="currentColor"
    />
    <path d="M8 13h8v-2H8v2Z" fill="currentColor" />
  </svg>
);

export default SvgLink;
