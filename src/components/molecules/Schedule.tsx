export type ScheduleProps = {
  time: string;
  description: string;
}[]

const date = '2023-09-08';
const timezone = "+2GMT";

export default function Schedule({ schedule }: { schedule: ScheduleProps }) {
  return <section className="mt-12 mx-auto max-w-6xl sm:px-12 py-4 mb-6 grid">
    <h2 className="text-fuchsia-700 text-2xl sm:text-4xl mb-2 text-center">De planning voor <time dateTime={date}>8 September 2023</time></h2>
    <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500"> 
      {schedule.map(({time, description}) => (
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
}