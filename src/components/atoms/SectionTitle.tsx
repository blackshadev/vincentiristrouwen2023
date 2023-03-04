import classNames from "@/helpers/classNames";
import { PropsWithChildren } from "react";

export function SectionTitle({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <h2 className={classNames(className, "text-fuchsia-700 text-2xl sm:text-4xl mb-2")}>{children}</h2>;
}
