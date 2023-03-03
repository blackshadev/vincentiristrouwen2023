import LocationWithDate from "@/components/molecules/LocationWithDate";
import Schedule, { ScheduleProps } from "@/components/molecules/Schedule";
import WeddingHeader from "@/components/molecules/WeddingHeader";
import Head from "next/head";

type PageProps = {
  schedule: ScheduleProps
}

export default function SecretPage({ schedule }: PageProps) {
  return (
    <>
      <Head>
        <title>Iris & Vincent trouwen 2023</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="description" content="Iris en vincent trouwen 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-2">
        <WeddingHeader />

        <LocationWithDate />

        <Schedule schedule={schedule} />
      </main>
    </>
  )
}

type PageParams = {
  params: { secret: string };
};

function parseSchedule(schedule: string): ScheduleProps {
  return schedule.split('|').map(line => {
    const [time, description] = line.split('\t');
    return {
      time,
      description,
    }
  })
}

export async function getStaticProps({ params }: PageParams): Promise<{ props: PageProps } | { redirect: { destination: string, permanent: boolean } }> {
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

  if (params.secret === process.env.ALL_DAY_SECRET) {
    return { props: { schedule: parseSchedule(process.env.ALL_DAY_SCHEDULE) } };
  }

  if (params.secret === process.env.NIGHT_ONLY_SECRET) {
    return { props: { schedule: parseSchedule(process.env.NIGHT_ONLY_SCHEDULE) } };
  }

  return {
    redirect: {
      destination: '/',
      permanent: true,
    },
  };
}


export async function getStaticPaths(): Promise<{ paths: PageParams[], fallback: boolean | 'blocking' }> {
  if (!process.env.ALL_DAY_SECRET) {
    throw new Error("Missing env var ALL_DAY_SECRET");
  }

  if (!process.env.NIGHT_ONLY_SECRET) {
    throw new Error("Missing env var NIGHT_ONLY_SECRET");
  }

  return {
    paths: [
      { params: { secret: process.env.ALL_DAY_SECRET } },
      { params: { secret: process.env.NIGHT_ONLY_SECRET } },
    ],
    fallback: 'blocking',
  };
}
