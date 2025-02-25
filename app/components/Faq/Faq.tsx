import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq: React.FC = () => {

  const VlabsQuestions = [
    {
      question: "What are Virtual Labs?",
      answer:
        "Virtual Labs are intended to augment the learning of science and engineering subjects through performing experiments. The experiments are designed either as simulations or as remote triggered. A remote triggered lab allows a user to connect to real equipment using a web browser. There are currently around 150 and labs and 1500 experiments at various stages of development and deployment. They are currently hosted at Vlabs. Virtual Labs is an initiative of Ministry of Human Resources, India.",
    },
    {
      question: "What are the objective of the virtual Labs",
      answer:
        "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
    },
    {
      question: "How do I create a FAQ?",
      answer:
        "To create a FAQ, you need to compile a list of common questions and answers on a particular topic and organize them in a clear and easy-to-navigate format.",
    },
    {
      question: "What are the benefits of a FAQ?",
      answer:
        "The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience.",
    },
  ]
  const WorkShopQuestions = [
    {
      question: "What is a FAQ?",
      answer:
        "A FAQ is a list of frequently asked questions and answers on a particular topic.",
    },
    {
      question: "What is the purpose of a FAQ?",
      answer:
        "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
    },
    {
      question: "How do I create a FAQ?",
      answer:
        "To create a FAQ, you need to compile a list of common questions and answers on a particular topic and organize them in a clear and easy-to-navigate format.",
    },
    {
      question: "What are the benefits of a FAQ?",
      answer:
        "The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience.",
    },
  ]

  return (
    <section className="py-32 ">
      <Tabs defaultValue="Vlabs">
        <div className="flex md:flex-row flex-col md:gap-0 gap-10 items-center justify-between py-4">
          <h1 className="text-3xl font-semibold md:text-5xl text-center">
            Frequently asked questions
          </h1>
          <TabsList>
            <TabsTrigger value="Vlabs">Virtual Labs</TabsTrigger>
            <TabsTrigger value="Workshops">Workshops</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="Vlabs">
          <div>
            <div className="container">
              {VlabsQuestions.map((item, index) => (
                <Accordion key={index} type="single" collapsible>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="hover:text-foreground/60 hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="Workshops">
          <div>
            <div className="container">
              {WorkShopQuestions.map((item, index) => (
                <Accordion key={index} type="single" collapsible>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="hover:text-foreground/60 hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Faq;
