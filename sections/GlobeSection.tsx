import Container from '@/components/Container';

const GlobeSection = () => {
  return (
    <section
      className="bg-no-repeat bg-contain grid content-center min-h-screen text-white"
      style={{ backgroundImage: "url('/images/globe--bg.png')" }}
    >
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <h2 className="text-center text-4xl font-bold">
              GOT BLOCKCHAIN NEEDS
            </h2>
            <p className="text-center text-xl font-medium">
              We are currently living the next technological revolution, with
              Blockchain technology taking the internet to the next level. As
              the innovation that the internet, so will Blockchain. From
              finance, trustless mechanism, decentralization, and many other
              areas yet discovered. You are about to take the first step in this
              industry to prevent your business to becoming “Blockbuster”, for
              this we praise your visionary mind set.
            </p>
            <p className="text-center text-xl font-medium">
              We are very focus group of technologically innovative IT
              Engineers, in the field of the Web and Blockchain, looking to help
              business adapt to this new wave of technological advancement by
              helping you in the following areas:
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GlobeSection;
