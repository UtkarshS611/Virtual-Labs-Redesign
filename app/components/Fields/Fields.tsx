import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";

interface FieldContent {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
  tags?: string[];
}

interface FieldProps {
  heading?: string;
  description?: string;
  posts?: FieldContent[];
}

const Fields = ({
  heading = "Learning Spheres",
  description = "Discover the wide range of topics and fields you can explore to enhance your skills and knowledge and take your first step towards excellence.",
  posts = [
    {
      id: "1",
      title: "Mechanical Engineering",
      summary:
        "Interactive mechanical engineering experiments for virtual labs, enhancing learning with simulations, analysis, and real-world applications.",
      url: "https://shadcnblocks.com",
      image: "/Fields/Mechanical.avif",
      tags: ["Engineering"],
    },
    {
      id: "2",
      title: "Chemical Engineering",
      summary:
        "Explore virtual chemical reactions, process simulations, and safety analysis for hands-on learning.",
      url: "https://shadcnblocks.com",
      image: "/Fields/Chemical.avif",
      tags: ["Engineering"],
    },
    {
      id: "3",
      title: "Electronics and Communication Engineering",
      summary:
        "Simulate circuits, signal processing, and communication systems for practical electronics engineering training.",
      url: "https://shadcnblocks.com",
      image: "/Fields/Electronics.avif",
      tags: ["Engineering"],
    },
    {
      id: "4",
      title: "Biotechnology",
      summary:
        "Conduct virtual biotech experiments, from genetic analysis to bioprocess simulations, enhancing research skills.",
      url: "https://shadcnblocks.com",
      image: "/Fields/Biotech.avif",
      tags: ["Engineering"],
    },
    {
      id: "5",
      title: "Electrical Engineering",
      summary:
        "Experiment with power systems, circuits, and control systems through interactive virtual lab simulations.",
      url: "https://shadcnblocks.com",
      image: "/Fields/Electrical.avif",
      tags: ["Engineering"],
    },
  ],
}: FieldProps) => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center gap-16">
        <div className="text-center">
          <h2 className="mx-auto mb-6 text-pretty text-3xl font-semibold md:text-4xl lg:max-w-3xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>

        <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
            >
              <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                <div className="sm:col-span-5">
                  <div className="mb-4 md:mb-6">
                    <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-muted-foreground md:gap-5 lg:gap-6">
                      {post.tags?.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                    <a
                      href={post.url}
                      target="_blank"
                      className="hover:underline"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-4 text-muted-foreground md:mt-5">
                    {post.summary}
                  </p>
                  <div className="mt-6 flex items-center space-x-2 md:mt-8">
                    <a
                      href={post.url}
                      target="_blank"
                      className="inline-flex items-center font-semibold hover:underline md:text-base"
                    >
                      <span>Read more</span>
                      <ArrowRight className="ml-2 size-4 transition-transform" />
                    </a>
                  </div>
                </div>
                <div className="order-first sm:order-last sm:col-span-5">
                  <a href={post.url} target="_blank" className="block">
                    <div className="aspect-[16/9] overflow-clip rounded-lg border border-border">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-opacity duration-200 fade-in hover:opacity-70"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fields;
