import { SectionTitle } from "@/components/atoms/SectionTitle";
import classNames from "@/helpers/classNames";
import { GuestType } from "@/types/GuestType";
import AllDayRSVPForm from "./AllDayRSVPForm";
import OnlyNightRSVPForm from "./OnlyNightRSVPForm";

type Props = {
  className: string;
  type: GuestType;
};

export default function RsvpForm({ className, type }: Props) {
  if (type === GuestType.AllDay) {
    return <section className={classNames(className, "grid gap-4")}>
      <div>
        <SectionTitle className="text-center mb-2">R. S. V. P.</SectionTitle>
        <p className="mb-2 text-center">
          De samenstelling van het menu is nog niet definitief. Deze keuze (met je R.S.V.P) kun je later doorgeven.
        </p>
      </div>
    </section>
  }

  return (
    <section className={classNames(className, "grid gap-4 md:grid-cols-2")}>
      <div>
        <SectionTitle className="text-center mb-2">R. S. V. P.</SectionTitle>
        <p className="text-center mb-4 text-gray-500 font-bold">Laat ons weten of je erbij bent!</p>
        <p className="mb-2">
          Wij vinden het fijn om te weten of we op je kunnen rekenen. In het naam veld graag maar één naam invullen. 
          Als je met meer dan één persoon komt kan je dit formulier vaker invullen.
        </p>
        {/* {type === GuestType.AllDay && (
          <p className="mb-2">Geef ook direct je menu keuzen en eventuele allergiën door.</p>
        )} */}
      </div>
      <Form type={type} />
    </section>
  );
}

function Form({ type }: { type: GuestType }) {
  switch (type) {
    case GuestType.AllDay:
      return <AllDayRSVPForm />;
    case GuestType.OnlyNight:
      return <OnlyNightRSVPForm />;
  }
}
