import Container from '@/components/Container';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import Button from '@/components/Button';
import { useForm, ValidationError } from "@formspree/react";

const ContactFormSection = () => {
  const [state, handleSubmit] = useForm("mdoyeqnp");

  if (state.succeeded) {
    return <h2 className="text-center text-5xl mb-6 font-bold">
      Thank You!! We will reach out to you ASAP!
      </h2>;
  }
  return (
    <section className="text-white py-12">
      <Container>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <h3 className="text-center text-3xl mb-1">Let's build something!</h3>
            <h2 className="text-center text-5xl mb-6 font-bold">
              Get In touch
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-12 gap-4">
                {/* <div className="col-span-6">
                  <Input type="text" placeholder="FIRST NAME" />
                </div>
                <div className="col-span-6">
                  <Input type="text" placeholder="LAST NAME" />
                </div> */}
                <div className="col-span-12">
                  <label htmlFor="email">Email Address</label>
                  <Input id="email" type="email" name="email" placeholder="EMAIL" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                {/* <div className="col-span-12">
                  <Input type="text" placeholder="PHONE" />
                </div> */}
                <div className="col-span-12">
                  <label htmlFor="email">You Message</label>
                  <Textarea id="message" name="message" rows={4} placeholder="MESSAGE" />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <div className="col-span-12">
                  <div className="text-center">
                    <Button className="px-10" type="submit" disabled={state.submitting}>SUBMIT</Button>
                    <ValidationError errors={state.errors} />
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
