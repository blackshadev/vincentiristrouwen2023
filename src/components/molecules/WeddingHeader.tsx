import Image from "next/image";
import HeaderImage from '../../images/header.jpg'

export default function WeddingHeader() {
  return (
    <section className='mx-auto max-w-7xl sm:px-6 lg:px-8 py-4'>
      <div className="relative bg-white rounded shadow-lg">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 items-center lg:min-h-[40rem]">
          <div className="px-6 py-8 lg:px-0 lg:col-span-6">
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
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 lg:absolute lg:inset-0 lg:left-1/2 xl:mr-0">
            <Image
              src={HeaderImage}
              alt="Vincent & Iris in hun natuurlijke habitat"
              className='aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full rounded-b lg:rounded-l-none lg:rounded-r'
            />
          </div>
        </div>
      </div>
    </section>
  );
}