import FormInput from "@/components/molecules/FormInput";
import FormSelect from "@/components/molecules/FormSelect";
import FormTextarea from "@/components/molecules/FormTextarea";
import { GuestType } from "@/types/GuestType";
import BaseRSVPForm from "./BaseRSVPForm";

type Props = {};

export default function AllDayRSVPForm({ }: Props) {
  const formId = 'rsvp';

  return <BaseRSVPForm formId={formId} type={GuestType.AllDay}>
    <FormInput formId={formId} name="naam" label="Naam" placeholder="Vincent Hagen" className="mb-8" required />
    <FormSelect 
      formId={formId}
      placeholder="Hoofd menu - met bijgerecht"
      values={[
        "Diamanthaas - met vanille portsaus en aardappel uit de oven",
        "Kabeljauw filet - met mosterd beurre blanc en aardappel crème",
        "Risotto - met gegrilde groentes, Black Bussumer oude kaas en lente ui",
        "Kinder menu - Friet met snack",
      ]}
      name="menu_keuze" 
      label="Hoofd menu keuze" 
      className="mb-8"
    />
    <FormTextarea formId={formId} name="allergien" label="Allergiën" placeholder={`- Groene verse kruiden\n- Steenvruchten`} className="mb-8" />
  </BaseRSVPForm>;
}