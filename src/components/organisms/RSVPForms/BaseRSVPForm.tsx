import { GuestType } from "@/types/GuestType";
import { PropsWithChildren } from "react";
import { SectionTitle } from "../../atoms/SectionTitle";
import SubmitButton from "../../atoms/SubmitButton";
import FormInput from "../../molecules/FormInput";

type Props = {
  className: string;
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

export default function BaseRSVPForm({ className, type, formId, children }: PropsWithChildren<Props>) {
  return <section className={className}>
    <SectionTitle className="text-center">R. S. V. P.</SectionTitle>
    <form name="rsvp" data-netlify="true">
      <input type="hidden" name="type" value={translateGuestType(type)} />

      {children}

      <SubmitButton>Versturen</SubmitButton>
    </form>
  </section>;
}
