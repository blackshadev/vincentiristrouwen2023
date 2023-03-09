import FormInput from "@/components/molecules/FormInput";
import { GuestType } from "@/types/GuestType";
import BaseRSVPForm from "./BaseRSVPForm";

type Props = {};

export default function OnlyNightRSVPForm({}: Props) {
  const formId = 'rsvp';

  return <BaseRSVPForm formId={formId} type={GuestType.OnlyNight}>
    <FormInput formId={formId} name="naam" label="Naam" placeholder="Vincent Hagen" className="mb-8" required />
  </BaseRSVPForm>;
}