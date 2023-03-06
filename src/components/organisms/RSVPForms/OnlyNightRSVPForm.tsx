import FormInput from "@/components/molecules/FormInput";
import { GuestType } from "@/types/GuestType";
import BaseRSVPForm from "./BaseRSVPForm";

type Props = {
  className: string;
};

export default function OnlyNightRSVPForm({ className }: Props) {
  const formId = 'rsvp';

  return <BaseRSVPForm className={className} formId={formId} type={GuestType.OnlyNight}>
    <FormInput formId={formId} name="naam" label="Naam" placeholder="Vincent Hagen & Iris van Marwijk" className="mb-8" />
  </BaseRSVPForm>;
}