import classNames from "@/helpers/classNames";

type Props = {
  className: string;
};

export default function RSVPForm({ className }: Props) {
  return <section className={classNames(className)}></section>;
}
