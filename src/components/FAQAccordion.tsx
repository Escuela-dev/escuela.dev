import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface Props {
  faqs: {
    title: string;
    answer: string;
  }[];
}

export const FAQAccordion = ({ faqs }: Props) => (
  <Accordion className="AccordionRoot" type="single" collapsible defaultValue="item-1">
    {faqs.map((faq, index) => (
      <AccordionItem className="AccordionItem" key={index} value={`item-${index + 1}`}>
        <AccordionTrigger className="text-xl tracking-tight">{faq.title}</AccordionTrigger>
        {faq.answer.includes('<') ? (
          <AccordionContent className="font-sans text-lg font-extralight leading-7">
            <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
          </AccordionContent>
        ) : (
          <AccordionContent className="font-sans text-lg font-extralight leading-7">
            <span className="whitespace-break-spaces">{faq.answer}</span>
          </AccordionContent>
        )}
      </AccordionItem>
    ))}
  </Accordion>
);
