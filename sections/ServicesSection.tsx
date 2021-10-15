import Image from 'next/image';

import Container from '@/components/Container';

const ServicesSection = () => {
  return (
    <section className="text-white mb-20">
      <Container>
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="bg-black bg-opacity-10 rounded-xl px-8 pt-8 pb-10 cursor-pointer hover:bg-blue-600 transition-colors duration-500 ease-in-out">
            <div className="mb-4">
              <Image
                src="/images/consultation-service.svg"
                width={114}
                height={124}
              />
            </div>
            <h3 className="text-5xl mb-2 font-semibold">
              Consultation Services
            </h3>
            <p className="font-poppins">
              Because your time is valuable, sometimes it makes sense to hire
              someone to help layout a plan of action and provide you with the
              technical knowledge needed to take your business to the next
              level. Because each business is different, each need and solution
              will also be different. Let us help you understand, layout and
              execute your solution.
            </p>
          </div>
          <div className="bg-black bg-opacity-10 rounded-xl px-8 pt-8 pb-10 cursor-pointer hover:bg-blue-600 transition-colors duration-500 ease-in-out">
            <div className="mb-4">
              <Image
                src="/images/education-service.svg"
                width={114}
                height={124}
              />
            </div>
            <h3 className="text-5xl mb-2 font-semibold">Education Services</h3>
            <p className="font-poppins">
              Do you want to learn something in specific about blockchain? What
              is Bitcoin? Cryptocurrency? NFTs? What is a specific
              cryptocurrency project about? We can also help educate your
              employees on a specific area in the blockchain industry.
            </p>
            <p className="font-poppins">
              PLEASE NOTE THE PRICE MAY VARY, BASED ON THE NUMBER OF PEOPLE IN
              THE LEARNING SESSION.
            </p>
          </div>
          <div className="bg-black bg-opacity-10 rounded-xl px-8 pt-8 pb-10 cursor-pointer hover:bg-blue-600 transition-colors duration-500 ease-in-out">
            <div className="mb-4">
              <Image src="/images/block-chain.svg" width={114} height={124} />
            </div>
            <h3 className="text-5xl mb-2 font-semibold">
              Digital Solutions
            </h3>
            <p className="font-poppins">
              Have a project in mind that requires a blockchain solution? Maybe you have a digital solution need, where you need? We can help with the
              planning, design, implementation and/or testing of a blockchain
              solution or other web digital need. Let us help you bring your project to light!

            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
