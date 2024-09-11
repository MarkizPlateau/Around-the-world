import Link from 'next/link';
import AmpersandIcon from '../Icons/AmpersandIcon/AmpersandIcon';
import { ROUTES } from '@/constants/routes';

const zIndexShadowClasses = 'z-20 text-shadow';
const h2Classes = 'font-bold text-4xl lg:text-6xl text-center';
const h3Classes = 'text-2xl lg:text-4xl  font-bold text-center  pointer-events-none';
const imgClasses =
  'absolute inset-0 w-full h-full object-cover opacity-70 lg:opacity-30 hover:opacity-85';
const imageContainerClasses = 'w-1/2  text-white flex items-center justify-center relative';
const anchorClasses = 'absolute inset-0 flex items-center justify-center';

export default function Home() {
  console.log(ROUTES.ECO, ROUTES.HOME, ROUTES.ECO.ROOT);

  return (
    <main className="relative mx-auto flex h-screen max-w-screen-2xl">
      <div
        className="absolute z-20 grid w-full grid-cols-[1fr_min-content_1fr] items-center gap-3 px-4 md:px-0"
        style={{ top: '20%' }}
      >
        <h2 className={`${h2Classes} text-orange ${zIndexShadowClasses}`}>Have a Great Time</h2>
        <div className="mt-5 scale-75 lg:scale-110">
          <AmpersandIcon className="text-shadow" />
        </div>
        <h2 className={`${h2Classes} text-pink ${zIndexShadowClasses}`}>Save the Planet</h2>
      </div>

      <section className={imageContainerClasses}>
        <Link href={ROUTES.EVENTS.ROOT} legacyBehavior>
          <a className={anchorClasses}>
            <h3 className={`${h3Classes} ${zIndexShadowClasses}`}>Explore Exciting Events</h3>
            <img src="/events-image.jpeg" alt="Events" className={imgClasses} />
          </a>
        </Link>
      </section>
      <section className={imageContainerClasses}>
        <Link href={ROUTES.ECO.ROOT} legacyBehavior>
          <a className={anchorClasses}>
            <h3 className={`${h3Classes} ${zIndexShadowClasses}`}>Join Eco-Friendly Activities</h3>
            <img src="/eco-image.jpeg" alt="Eco Events" className={imgClasses} />
          </a>
        </Link>
      </section>
    </main>
  );
}
