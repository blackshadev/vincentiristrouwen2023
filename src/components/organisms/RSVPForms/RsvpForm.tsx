import { GuestType } from "@/types/GuestType";
import AllDayRSVPForm from "./AllDayRSVPForm";
import OnlyNightRSVPForm from "./OnlyNightRSVPForm";

type Props = {
  className: string;
  type: GuestType;
};

export default function RsvpForm({ className, type }: Props) {
  switch (type) {
    case GuestType.AllDay:
      return <AllDayRSVPForm className={className} />
    case GuestType.OnlyNight:
      return <OnlyNightRSVPForm className={className} />
  }
}