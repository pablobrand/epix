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
              We are currently living the next technological revolution, with the Blockchain technology taking the internet to the next level. Just as the internet drastically changed the world, so will Blockchain technologies. From finance, trustless mechanism, decentralization and many other areas yet discovered. You are about to take the first step into the future, and prevent your business from becoming “Blockbuster”, for this we praise your visionary mind set.
            </p>
            <p className="text-center text-xl font-medium">
              We are a group of technologically innovative IT Engineers, in the field of the Web, Digital Graphics, Video and Blockchain solutions, looking to help business adapt to this new wave of technological advancement by helping you in the following areas:
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GlobeSection;
