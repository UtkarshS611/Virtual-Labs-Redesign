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
        "Virtual Labs are online platforms that simulate real-world lab experiments for learning and research.",
    },
    {
      question: "What are the objectives of the Virtual Labs?",
      answer:
        "The objectives include enhancing learning, providing remote access to labs, and bridging the gap between theory and practice.",
    },
    {
      question: "What are the various types of Virtual Labs?",
      answer:
        "Types include simulation-based, remote-triggered, and measurement-based labs, catering to different learning needs.",
    },
    {
      question: "Who are the intended users of the Virtual Labs?",
      answer:
        "Students, teachers, and researchers in engineering, science, and technology fields can use Virtual Labs.",
    },
    {
      question: "How can I access the Virtual Labs?",
      answer:
        "Virtual Labs can be accessed via their official website using a web browser and an internet connection.",
    },
    {
      question: "Is it free to use?",
      answer:
        "Yes, Virtual Labs are freely accessible to students and educators across institutions.",
    },
    {
      question: "What are the system configuration needed to run Workshops?",
      answer:
        "A stable internet connection, a modern web browser, and a computer/laptop with basic hardware are required.",
    },
    {
      question:
        "Our college internet network has firewalls. Should any specific care be taken?",
      answer:
        "Ensure that firewall settings allow access to Virtual Lab domains and required resources.",
    },
    {
      question:
        "Does the Virtual Lab provide the LMS that the objectives mention?",
      answer:
        "Yes, many Virtual Labs integrate Learning Management Systems (LMS) for tracking progress and assessments.",
    },
    {
      question: "How do I register for using the Virtual Labs?",
      answer:
        "Registration is typically done through the official Virtual Labs website by creating an account.",
    },
  ];

  const WorkShopQuestions = [
    {
      question: "Who can request for a Virtual Labs Workshop?",
      answer:
        "Faculty members, administrators, or department heads of educational institutions can request workshops.",
    },
    {
      question: "Who can participate in the Workshop?",
      answer:
        "Students, faculty members, and researchers interested in Virtual Labs can participate.",
    },
    {
      question: "What are the modes of Virtual Labs Workshop?",
      answer: "Workshops are conducted in onsite and online modes.",
    },
    {
      question:
        "What are the system requirements for an Onsite Virtual Lab Workshop?",
      answer:
        "A computer lab with internet access, projectors, and required software installations.",
    },
    {
      question:
        "What are the other requirements for an Onsite Virtual Labs Workshop?",
      answer:
        "A venue, faculty coordinators, and a minimum number of participants as specified by the organizers.",
    },
    {
      question:
        "What are the system requirements for an Online Virtual Lab Workshop?",
      answer:
        "A stable internet connection, a computer or laptop, and a modern web browser.",
    },
    {
      question:
        "How can I request for a workshop to be conducted at my college?",
      answer:
        "You can request a workshop through the official Virtual Labs website or by contacting the coordinators.",
    },
    {
      question: "What would be covered in the workshop?",
      answer:
        "The workshop covers an introduction to Virtual Labs, hands-on sessions, and guidance on using the platform effectively.",
    },
    {
      question: "Does my college have to pay for the workshops?",
      answer:
        "No, Virtual Labs workshops are usually free of cost for educational institutions.",
    },
    {
      question: "Where can I get support on Virtual Labs Workshops?",
      answer:
        "Support is available on the official Virtual Labs website, through email, and via helpdesk services.",
    },
  ];

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
