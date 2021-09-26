import React from 'react';

import Flickity from 'react-flickity-component';

import Container from '@/components/Container';

const flickityOptions = {
  wrapAround: true,
  cellAlign: 'left',
  initialIndex: 2,
};

const LatestNewsSection = () => {
  return (
    <section className="text-white mb-12">
      <Container>
        <h3 className="text-center">IN THE WORLD</h3>
        <h2 className="text-center text-3xl font-bold mb-8">LATEST NEWS</h2>
        <div className="grid grid-cols-12 gap-4 relative">
          <Flickity
            className={
              'overflow-x-hidden border-none focus:border-none col-span-12 mb-0 carousel-latest-news'
            }
            options={flickityOptions}
            reloadOnUpdate={true}
          >
            {latestNewsData.map((post) => (
              <div
                className="rounded-xl bg-black bg-opacity-60 px-6 py-8 mr-6"
                style={{ width: 300 }}
              >
                <h4 className="text-blue-600 text-xl font-bold">
                  {post.category}
                </h4>
                <h3 className="text-3xl font-bold mb-3">{post.title}</h3>
                <p>{post.description}</p>
              </div>
            ))}
          </Flickity>
        </div>
      </Container>
    </section>
  );
};

const latestNewsData = [
  {
    category: 'Blockchain/ ICO',
    title: 'lorem ipsum simple dumm',
    description: `Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliquaLorem ipsum`,
  },
  {
    category: 'Blockchain/ ICO',
    title: 'lorem ipsum simple dumm',
    description: `Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliquaLorem ipsum`,
  },
  {
    category: 'Blockchain/ ICO',
    title: 'lorem ipsum simple dumm',
    description: `Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliquaLorem ipsum`,
  },
  {
    category: 'Blockchain/ ICO',
    title: 'lorem ipsum simple dumm',
    description: `Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliquaLorem ipsum`,
  },
  {
    category: 'Blockchain/ ICO',
    title: 'lorem ipsum simple dumm',
    description: `Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliquaLorem ipsum`,
  },
  {
    category: 'Blockchain/ ICO',
    title: 'lorem ipsum simple dumm',
    description: `Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliquaLorem ipsum`,
  },
  {
    category: 'Blockchain/ ICO',
    title: 'lorem ipsum simple dumm',
    description: `Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliquaLorem ipsum`,
  },
  {
    category: 'Blockchain/ ICO',
    title: 'lorem ipsum simple dumm',
    description: `Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliquaLorem ipsum`,
  },
  {
    category: 'Blockchain/ ICO',
    title: 'lorem ipsum simple dumm',
    description: `Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliquaLorem ipsum`,
  },
  {
    category: 'Blockchain/ ICO',
    title: 'lorem ipsum simple dumm',
    description: `Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliquaLorem ipsum`,
  },
  {
    category: 'Blockchain/ ICO',
    title: 'lorem ipsum simple dumm',
    description: `Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliquaLorem ipsum`,
  },
  {
    category: 'Blockchain/ ICO',
    title: 'lorem ipsum simple dumm',
    description: `Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliquaLorem ipsum`,
  },
];

export default LatestNewsSection;
