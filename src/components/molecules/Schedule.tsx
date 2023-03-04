import classNames from "@/helpers/classNames";
import { SectionTitle } from "../atoms/SectionTitle";

export type ScheduleProps = {
  time: string;
  description: string;
}[];

const date = "2023-09-08";
const timezone = "+2GMT";

type Props = {
  schedule: ScheduleProps;
  className: string;
};

export default function Schedule({ schedule, className }: Props) {
  return (
    <section className={classNames(className, "grid")}>
      <SectionTitle className="text-center">
        De planning voor <time dateTime={date}>8 September 2023</time>
      </SectionTitle>
      <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
        {schedule.map(({ time, description }) => (
          <li key={time} className="group w-full space-x-4 rounded-xl px-4">
            <div className="grid grid-cols-2 gap-4 text-xl">
              <p className="mt-0.5 text-right">
                <time dateTime={`${date}T${time}${timezone}`}>{time}</time>
              </p>
              <p className="text-gray-900">{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
