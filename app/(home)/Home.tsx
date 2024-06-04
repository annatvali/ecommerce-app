import Image from 'next/image';
import Button from '../ui/Button';
import { roboto } from '@/app/ui/fonts';

const Home = (): JSX.Element => {
  return (
    <main className="flex flex-col">
      <section className="text-white py-20 px-8">
        <div className="container mx-auto flex flex-col gap-4 md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h1
              className={`${roboto.className} uppercase tracking-wide no-underline hover:no-underline font-bold text-4xl text-blue-900 mb-8`}
            >
              Welcome to Our Online Store
            </h1>
            <p className="mb-8 leading-relaxed text-purple-600">
              We offer high quality products for all your needs. Explore our
              wide range of products and find exactly what you{"'"}re looking
              for.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                href={'/catalog'}
                text="Shop Now"
                colorClass="from-purple-600 to-blue-500 hover:bg-gradient-to-bl"
              />
              <Button
                href={'/about-us'}
                text="Learn More"
                colorClass="bg-white hover:bg-gray-100"
                textColor="text-purple-600"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <Image src="/banner.jpg" width={1920} height={1080} alt=" Image" />
          </div>
        </div>
      </section>
      <section className="bg-gray-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-300">
                Transactions every 24 hours
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                50 k +
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-300">
                Product Categories
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                280 +
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-300">
                New users annually
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                1.2 M +
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="bg-white py-20 px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Replace this comment with your testimonial cards */}
            <div className="p-4 rounded-lg shadow-md bg-gray-100">
              <p className="text-gray-600 italic mb-4">
                {
                  "This is the best online store I've ever used. The products are high quality and the customer service is excellent."
                }
              </p>
              <h3 className="text-md font-bold italic mb-2">- John Doe</h3>
            </div>
            <div className="p-4 rounded-lg shadow-md bg-gray-100">
              <p className="text-gray-600 italic mb-4">
                {
                  "This is the best online store I've ever used. The products are high quality and the customer service is excellent."
                }
              </p>
              <h3 className="text-md font-bold italic mb-2">- John Doe</h3>
            </div>
            <div className="p-4 rounded-lg shadow-md bg-gray-100">
              <p className="text-gray-600 italic mb-4">
                {
                  "This is the best online store I've ever used. The products are high quality and the customer service is excellent."
                }
              </p>
              <h3 className="text-md font-bold italic mb-2">- John Doe</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
