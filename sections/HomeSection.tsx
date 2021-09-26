import Link from 'next/link';

import Container from '@/components/Container';

const HomeSection = () => {
  return (
    <section
      className="grid min-h-screen mt-20 mb-24 bg-no-repeat bg-contain text-white"
      style={{ backgroundImage: "url('/images/f-section-image.png')" }}
    >
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-5">
            <h1 className="text-5xl pt-32">
              <span className="block">Welcome to</span>
              <span className="block font-semibold">Cybermonkeys LLC</span>
            </h1>
            <p className="text-xl font-medium mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <p>
              <Link href="/">
                <a className="uppercase bg-blue-600 px-6 py-3 rounded-full">
                  Read More
                </a>
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeSection;
