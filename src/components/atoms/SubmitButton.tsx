import { PropsWithChildren } from "react";

export default function SubmitButton({ children }: PropsWithChildren) {
  return <button
      type="submit"
      className="rounded bg-purple-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
    >
      {children}
    </button>
}