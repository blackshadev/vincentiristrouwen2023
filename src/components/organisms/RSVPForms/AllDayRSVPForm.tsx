import FormInput from "@/components/molecules/FormInput";
import FormSelect from "@/components/molecules/FormSelect";
import FormTextarea from "@/components/molecules/FormTextarea";
import { GuestType } from "@/types/GuestType";
import BaseRSVPForm from "./BaseRSVPForm";

type Props = {
  className: string;
};

export default function AllDayRSVPForm({ className }: Props) {
  const formId = 'rsvp';

  return <BaseRSVPForm className={className} formId={formId} type={GuestType.AllDay}>
    <FormInput formId={formId} name="naam" label="Naam" placeholder="Vincent Hagen & Iris van Marwijk" className="mb-8" />
    <FormSelect 
      formId={formId}
      placeholder="Hoofd menu - met bijgerecht"
      values={[
        "Diamanthaas - met vanille portsaus en aardappel uit de oven",
        "Kabeljauw filet - met mosterd beurre blanc en aardappel crème",
        "Risotto - met asperges, Black Bussumer oude kaas en lente ui",
      ]}
      name="menu_keuze" 
      label="Hoofd menu keuze" 
      className="mb-8"
    />
    <FormTextarea formId={formId} name="allergien" label="Allergiën" placeholder={`- Groene verse kruiden\n- Steenvruchten`} className="mb-8" />
  </BaseRSVPForm>;
}