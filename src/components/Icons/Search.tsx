import { SVGProps } from "react";

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.843 16.986a8 8 0 1 1 1.414-1.414l5.388 5.388a1 1 0 0 1-1.415 1.414l-5.387-5.387Zm1.095-6.32a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSearch;
