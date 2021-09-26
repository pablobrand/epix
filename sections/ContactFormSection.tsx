import Container from '@/components/Container';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import Button from '@/components/Button';

const ContactFormSection = () => {
  return (
    <section className="text-white py-12">
      <Container>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <h3 className="text-center text-3xl mb-1">lorem ipsum</h3>
            <h2 className="text-center text-5xl mb-6 font-bold">
              Get In touch
            </h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <Input type="text" placeholder="FIRST NAME" />
                </div>
                <div className="col-span-6">
                  <Input type="text" placeholder="LAST NAME" />
                </div>
                <div className="col-span-12">
                  <Input type="text" placeholder="EMAIL" />
                </div>
                <div className="col-span-12">
                  <Input type="text" placeholder="PHONE" />
                </div>
                <div className="col-span-12">
                  <Textarea rows={4} placeholder="MESSAGE" />
                </div>
                <div className="col-span-12">
                  <div className="text-center">
                    <Button className="px-10">SUBMIT</Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactFormSection;
