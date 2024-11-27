import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface Props {
  faqs: {
    title: string;
    answer: string;
  }[];
}

export const FAQAccordion = ({ faqs }: Props) => (
  <Accordion type="single" collapsible defaultValue="item-1">
    {faqs.map((faq, index) => (
      <AccordionItem key={index} value={`item-${index + 1}`}>
        <AccordionTrigger>{faq.title}</AccordionTrigger>
        <AccordionContent>{faq.answer}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
