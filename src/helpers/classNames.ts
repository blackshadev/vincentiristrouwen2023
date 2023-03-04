export default function classNames(
  ...args: (string | false | null | undefined)[]
): string {
  return args.filter((value) => !!value).join(" ");
}
