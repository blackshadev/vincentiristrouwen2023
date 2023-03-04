import classNames from "@/helpers/classNames";
import Image from "next/image";
import LocationImage from "../../images/locationlocationlocation.jpg";
import { SectionTitle } from "../atoms/SectionTitle";

type Props = {
  className: string;
};

export default function LocationWithDate({ className }: Props) {
  return (
    <section className={classNames(className, "grid grid-cols-6 lg:grid-cols-12 gap-6 items-center")}>
      <Image
        src={LocationImage}
        className="col-span-6 rounded hidden lg:block"
        alt="Een impressie van de trouw locatie van Iris en Vincent"
      />
      <div className="col-span-6 mt-4">
        <section className="mb-10">
          <SectionTitle>Wanneer</SectionTitle>
          <p>
            Op <b>Vrijdag, 8 September 2023</b> gaan Iris van Marwijk en Vincent Hagen trouwen.
          </p>
        </section>
        <section>
          <SectionTitle>Waar</SectionTitle>
          <p>
            De kalkovens van Huizen te{" "}
            <a
              className="font-bold hover:underline focus:underline text-purple-700"
              href="https://www.google.com/maps/dir/52.3665408,5.2527104/huizen+kalkovens/"
              target="_blank"
              rel="noreferrer"
            >
              Havenstraat 311, 1271 GD Huizen
            </a>
            . De locatie is te zien op de afbeelding <span className="hidden lg:inline">aan de linker zijde</span>
            <span className="inline lg:hidden">hieronder</span>.
          </p>
        </section>
      </div>
      <Image
        src={LocationImage}
        className="mt-6 col-span-6 rounded block lg:hidden"
        alt="Een impressie van de trouw locatie van Iris en Vincent"
      />
    </section>
  );
}
