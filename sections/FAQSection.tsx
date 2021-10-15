import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import Container from '@/components/Container';

const FAQSection = () => {
  return (
    <section className="py-24 text-white">
      <Container>
        <h2 className="text-center text-4xl font-bold mb-12">
          FREQUENCY ASKED QUESTIONS
        </h2>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <Accordion allowZeroExpanded preExpanded={[0]}>
              {faqData.map((item, index) => (
                <AccordionItem
                  className="bg-black bg-opacity-60 rounded-xl mb-2"
                  key={index}
                  uuid={index}
                >
                  <AccordionItemHeading className="px-8 py-6">
                    <AccordionItemButton>
                      <div className="font-bold">{item.question}</div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-8 pt-0.5 pb-6 text-sm">
                    {item.answer}
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
};

const faqData = [
  {
    question: 'LOREM IPSUM SIMPLE DUMMY CONTENT',
    answer: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod
          tempor incidiunt ut labore et dolore magna aliqua Lorem ipsum dolor
          sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut
          labore et dolore magna aliquaLorem ipsum dolor sit amet,
        </p>
        <p>
          consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et
          dolore magna aliquaLorem ipsum dolor sit amet, consect adipiscing
          elit, sed do eiusmod tempor incidiunt ut labore et dolore magna
        </p>
        <p>
          aliquaLorem ipsum dolor sit amet, consect adipiscing elit, sed do
          eiusmod tempor incidiunt ut labore et dolore magna aliquaLorem ipsum
          dolor sit amet, consect adipiscing elit, sed do eiusmod tempor
          incidiunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet,
          consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et
          dolore magna aliqua
        </p>
      </>
    ),
  },
  {
    question: 'LOREM IPSUM SIMPLE DUMMY CONTENT',
    answer: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod
          tempor incidiunt ut labore et dolore magna aliqua Lorem ipsum dolor
          sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut
          labore et dolore magna aliquaLorem ipsum dolor sit amet,
        </p>
        <p>
          consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et
          dolore magna aliquaLorem ipsum dolor sit amet, consect adipiscing
          elit, sed do eiusmod tempor incidiunt ut labore et dolore magna
        </p>
        <p>
          aliquaLorem ipsum dolor sit amet, consect adipiscing elit, sed do
          eiusmod tempor incidiunt ut labore et dolore magna aliquaLorem ipsum
          dolor sit amet, consect adipiscing elit, sed do eiusmod tempor
          incidiunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet,
          consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et
          dolore magna aliqua
        </p>
      </>
    ),
  },
  {
    question: 'LOREM IPSUM SIMPLE DUMMY CONTENT',
    answer: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod
          tempor incidiunt ut labore et dolore magna aliqua Lorem ipsum dolor
          sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut
          labore et dolore magna aliquaLorem ipsum dolor sit amet,
        </p>
        <p>
          consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et
          dolore magna aliquaLorem ipsum dolor sit amet, consect adipiscing
          elit, sed do eiusmod tempor incidiunt ut labore et dolore magna
        </p>
        <p>
          aliquaLorem ipsum dolor sit amet, consect adipiscing elit, sed do
          eiusmod tempor incidiunt ut labore et dolore magna aliquaLorem ipsum
          dolor sit amet, consect adipiscing elit, sed do eiusmod tempor
          incidiunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet,
          consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et
          dolore magna aliqua
        </p>
      </>
    ),
  },
  {
    question: 'LOREM IPSUM SIMPLE DUMMY CONTENT',
    answer: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod
          tempor incidiunt ut labore et dolore magna aliqua Lorem ipsum dolor
          sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut
          labore et dolore magna aliquaLorem ipsum dolor sit amet,
        </p>
        <p>
          consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et
          dolore magna aliquaLorem ipsum dolor sit amet, consect adipiscing
          elit, sed do eiusmod tempor incidiunt ut labore et dolore magna
        </p>
        <p>
          aliquaLorem ipsum dolor sit amet, consect adipiscing elit, sed do
          eiusmod tempor incidiunt ut labore et dolore magna aliquaLorem ipsum
          dolor sit amet, consect adipiscing elit, sed do eiusmod tempor
          incidiunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet,
          consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et
          dolore magna aliqua
        </p>
      </>
    ),
  },
];

export default FAQSection;
