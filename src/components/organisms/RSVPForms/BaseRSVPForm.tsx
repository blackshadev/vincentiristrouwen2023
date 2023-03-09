import { GuestType } from "@/types/GuestType";
import { PropsWithChildren } from "react";
import SubmitButton from "../../atoms/SubmitButton";

type Props = {
  type: GuestType
  formId: string;
};

function translateGuestType(type: GuestType): string {
  switch (type) {
    case GuestType.AllDay: 
      return 'gehele dag';
    case GuestType.OnlyNight: 
      return 'avond';
  }
}

export default function BaseRSVPForm({ type, children }: PropsWithChildren<Props>) {
  const formName = `rsvp_${GuestType[type]}`;

  return <form method="POST" name={formName} data-netlify="true">
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="type" value={translateGuestType(type)} />

      {children}

      <SubmitButton>Versturen</SubmitButton>
    </form>
  ;
}
