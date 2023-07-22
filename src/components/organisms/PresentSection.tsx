import classNames from "@/helpers/classNames";
import { SectionTitle } from "../atoms/SectionTitle";
import ButtonLink from "../atoms/ButtonLink";

export default function PresentSection({ url, className }: { url: string; className?: string }) {
  return (
    <section className={classNames(className, "grid grid-cols-1 gap-y-6 md:grid-cols-12")}>
      <SectionTitle className="text-center md:col-span-12">Cadeau tips</SectionTitle>
      
      <div className="md:col-span-4 flex flex-row align-center justify-center">
        <ButtonLink target="_blank"  rel="noreferrer" className="text-center self-center mt-0" href={url}>
          Ons verlanglijstje
        </ButtonLink>
      </div>
      <div className="md:col-start-5 md:col-span-8">
        <p className="mb-2">Zelf iets leuks verzonnen? Hartstikke leuk! Wij laten ons graag verrassen.</p>
        <p className="mb-2">Je kan ons sowieso blij maken met suggesties voor leuke dingen die we samen, met zijn tweeën, kunnen doen.</p>
        <p className="mb-2">
          Nog inspiratie nodig? Kijk dan op <a href={url} target="_blank" rel="noreferrer">ons verlanglijstje</a>. Je kunt daar afstrepen als je iets hebt gekozen. Zo
          voorkomen we dubbelingen.
        </p>
      </div>
    </section>
  );
}
