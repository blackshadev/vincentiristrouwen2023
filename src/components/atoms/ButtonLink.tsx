import classNames from "@/helpers/classNames";
import { PropsWithChildren } from "react";
type Props = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
export default function ButtonLink({ children, className, ...props }: PropsWithChildren<Props>) {
  return (
    <a
      className={classNames(
        "mt-6 inline-block rounded-md bg-purple-600 px-4 py-2 text-base font-semibold leading-7 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
