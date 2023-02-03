import Head from 'next/head'
import { Inter } from '@next/font/google'
import Image from 'next/image'
import HeaderImage from '../images/header.jpg'
import LocationImage from '../images/locationlocationlocation.jpg'
import ButtonLink from '@/components/atoms/ButtonLink'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Vincent & Iris trouwen 2023</title>
        <meta name="description" content="Vincent en iris trouwen 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Hero section */}

      <header className='mx-auto max-w-7xl sm:px-6 lg:px-8 py-4'>
        <div className="relative bg-white rounded shadow-lg">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="px-6 pt-10 pb-18 sm:pb-24 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-44 xl:col-span-6">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h1 className="font-bold tracking-tight">
                    <span className="block text-fuchsia-700 text-4xl sm:text-6xl mb-1">Vincent & Iris</span>
                    <span className="block text-purple-400 text-lg sm:text-xl lg:text-2xl pl-8">Vrijdag, 8 September 2023</span>
                  </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 pl-6">
                  Op deze website vindt je alle informatie over de trouwerij van deze gekken mensen.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 pl-6">
                  Ben jij uitgenodigd en erbij?
                </p>
                {/* <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a href="#" className="text-base font-semibold leading-7 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div> */}
              </div>
            </div>
            <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
              <Image
              src={HeaderImage}
              alt="Vincent & Iris in hun natuurlijke habitat"
              className='aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full rounded-b lg:rounded-l-none lg:rounded-r'
            />
            </div>
          </div>
        </div>
      </header>

      <main className='mt-12 mx-auto max-w-6xl sm:px-6 lg:px-8 py-4 mb-6 grid grid-cols-6 lg:grid-cols-12 gap-6'>
        <Image src={LocationImage} className="col-span-6 rounded hidden lg:block" alt="Een impressie van de trouw locatie van Iris en Vincent"/>
        <div className='col-span-6 mt-4'>
          <section className="mb-10">
            <h2 className='text-fuchsia-700 text-2xl sm:text-4xl mb-2'>Wanneer</h2>
            <p>
              Op <b>Vrijdag, 8 September 2023</b> gaan Vincent Hagen en Iris van Marwijk trouwen. 
            </p>
          </section>
          <section>
            <h2 className='text-fuchsia-700 text-2xl sm:text-4xl mb-2'>Waar</h2>
            <p>
              De kalkovens van Huizen te <a className="font-bold hover:underline focus:underline text-purple-700" href="https://www.google.com/maps/dir/52.3665408,5.2527104/huizen+kalkovens/" target="_blank" rel="noreferrer">Havenstraat 311, 1271 GD Huizen</a>. De locatie is te zien op de afbeelding <span className='hidden lg:inline'>aan de linker zijde</span><span className='inline lg:hidden'>hieronder</span>.
            </p>
          </section>
        </div>
        <Image src={LocationImage} className="mt-6 col-span-6 rounded block lg:hidden" alt="Een impressie van de trouw locatie van Iris en Vincent"/>
      </main>
    </>
  )
}
