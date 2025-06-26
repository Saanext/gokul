import type { SVGProps } from 'react';

export function HoneyDipperIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m15.13 14.5-3.32 3.32a2.66 2.66 0 0 1-3.76 0l-1.5-1.5a2.66 2.66 0 0 1 0-3.76l3.32-3.32" />
      <path d="M5.4 5.4 2 9l6 6 3.6-3.6" />
      <path d="m17 5-1.5 1.5" />
      <path d="m19 7-1.5 1.5" />
      <path d="m21 9-1.5 1.5" />
      <path d="M12.5 11.5 10 9" />
    </svg>
  );
}
