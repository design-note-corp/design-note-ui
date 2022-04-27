import { SVGProps } from "react";

const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.939 3.21a1.958 1.958 0 0 0-2.741.032L2.78 16.702a1.958 1.958 0 0 0-.572 1.382v2.623c0 1.082.877 1.959 1.959 1.959h2.606c.52 0 1.02-.208 1.387-.576L21.638 8.559a1.958 1.958 0 0 0-.033-2.797L18.939 3.21Zm-1.354 1.415 2.666 2.552-2.011 2.019-2.636-2.585 1.98-1.986Zm-3.363 3.373L4.167 18.084v2.623h2.606l10.085-10.124-2.636-2.585Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEdit;
