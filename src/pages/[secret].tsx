import LocationWithDate from "@/components/organisms/LocationWithDate";
import PresentSection from "@/components/organisms/PresentSection";
import RSVPForm from "@/components/organisms/RSVPForms/RsvpForm";
import Schedule, { ScheduleProps } from "@/components/organisms/Schedule";
import WeddingHeader from "@/components/organisms/WeddingHeader";
import { GuestType } from "@/types/GuestType";
import Head from "next/head";

type PageProps = {
  schedule: ScheduleProps;
  type: GuestType;
  presentUrl: string;
};

export default function SecretPage({ schedule, type, presentUrl }: PageProps) {
  return (
    <>
      <Head>
        <title>Iris & Vincent trouwen 2023</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="description" content="Iris en vincent trouwen 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-2 pb-24">
        <WeddingHeader className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-4" />

        <LocationWithDate className="mt-12 mx-auto max-w-6xl sm:px-12 py-4 mb-6 " />

        <Schedule className="mt-12 mx-auto max-w-6xl sm:px-12 py-4" schedule={schedule} />

        <RSVPForm type={type} className="mt-12 mx-auto max-w-6xl sm:px-12 py-4" />

        <PresentSection className="mt-12 mx-auto max-w-6xl sm:px-12 py-4" url={presentUrl} />
      </main>
    </>
  );
}

type PageParams = {
  params: { secret: string };
};

function parseSchedule(schedule: string): ScheduleProps {
  return schedule.split("|").map((line) => {
    const [time, description] = line.split("\t");
    return {
      time,
      description,
    };
  });
}

export async function getStaticProps({
  params,
}: PageParams): Promise<{ props: PageProps } | { redirect: { destination: string; permanent: boolean } }> {
  if (!process.env.ALL_DAY_SECRET) {
    throw new Error("Missing env var ALL_DAY_SECRET");
  }
  if (!process.env.ALL_DAY_SCHEDULE) {
    throw new Error("Missing env var ALL_DAY_SCHEDULE");
  }

  if (!process.env.NIGHT_ONLY_SECRET) {
    throw new Error("Missing env var NIGHT_ONLY_SECRET");
  }
  if (!process.env.NIGHT_ONLY_SCHEDULE) {
    throw new Error("Missing env var NIGHT_ONLY_SCHEDULE");
  }

  if (process.env.ALL_DAY_SECRET.split(',').includes(params.secret)) {
    return {
      props: {
        schedule: parseSchedule(process.env.ALL_DAY_SCHEDULE),
        type: GuestType.AllDay,
        presentUrl: process.env.PRESENT_URL ?? '',
      },
    };
  }

  if (process.env.NIGHT_ONLY_SECRET.split(',').includes(params.secret)) {
    return {
      props: {
        schedule: parseSchedule(process.env.NIGHT_ONLY_SCHEDULE),
        type: GuestType.OnlyNight,
        presentUrl: process.env.PRESENT_URL ?? '',
      },
    };
  }

  return {
    redirect: {
      destination: "/",
      permanent: true,
    },
  };
}

export async function getStaticPaths(): Promise<{
  paths: PageParams[];
  fallback: boolean | "blocking";
}> {
  if (!process.env.ALL_DAY_SECRET) {
    throw new Error("Missing env var ALL_DAY_SECRET");
  }

  if (!process.env.NIGHT_ONLY_SECRET) {
    throw new Error("Missing env var NIGHT_ONLY_SECRET");
  }

  return {
    paths: [
      ...process.env.ALL_DAY_SECRET.split(',').map(code => ({ params: { secret: code } })), 
      ...process.env.NIGHT_ONLY_SECRET.split(',').map(code => ({ params: { secret: code } })), 
    ],
    fallback: "blocking",
  };
}
