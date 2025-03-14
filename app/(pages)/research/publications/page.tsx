import { Separator } from "@/components/ui/separator";
import React from "react";

const Publications = () => {
  return (
    <section>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl text-primary">
          Virtual Labs - Research Publications
        </h1>
      </div>
      <div className="my-5">
        <div className="space-y-2">
          <h1 className="text-2xl text-primary">
            Educational Technology And Computing Pedagogy Virtual Labs
          </h1>
          <Separator />
        </div>
        <div className="text-muted-foreground py-4">
          <ul className="px-6 space-y-1 list-disc list-inside">
            <li>
              K.C. Bandi, A.K. Nori, V. Choppella, and S. Kode. A virtual
              laboratory for teaching linux on the web. In IEEE 3rd
              International Conference on Technology for Education, pages
              212--215. IEEE Press, 2011.
            </li>
            <li>
              Rohit Khot and Venkatesh Choppella. Discovir: A framework for
              designing interfaces and structuring content for virtual labs. In
              IEEE 3rd International Conference on Technology for Education,
              pages 121--127. IEEE Press, 2011.
            </li>
            <li>
              Venkatesh Choppella., V K Brahmajosyula, M. Vutpala., and S. Kole.
              Process models for virtual lab development, deployment and
              distribution. In IEEE 3rd International Conference on Technology
              for Education, pages 293--294. IEEE Press, 2011.
            </li>
            <li>
              S. Malani, G.N.S. Prasanna, J.A. del Alamo, J.L. Hardison, K.
              Moudgalya, and V. Choppella. Issues faced in a remote
              instrumentation laboratory. In IEEE 4th International Conference
              on Technology for Education, pages 67--74. IEEE Press, 2012.
            </li>
            <li>
              Jatin Agarwal, Utkarsh Rastogi, Prateek Pandey, Nurendra
              Choudhary, Venkatesh Choppella, and Raghu Reddy. Large scale web
              page optimization of virtual labs. In Proceedings of the IEEE
              International Conference on Technology for Education,
              pages 146--147. IEEE, 2014.
            </li>
          </ul>
        </div>
      </div>
      <div className="my-5">
        <div className="space-y-2">
          <h1 className="text-2xl text-primary">
            Authoring Tools And Environments
          </h1>
          <Separator />
        </div>
        <div className="text-muted-foreground py-4">
          <ul className="px-6 space-y-1 list-disc list-inside">
            <li>
              Thulasiram Naidu P, Manisha Verma, Venkatesh Choppella, and
              Gangadhar Chalapaka. Synthesizing customizable learning
              environments. In 2nd IEEE International Conference on Technology
              for Education, July 2010.
            </li>
            <li>
              Venkatesh Choppella. Foss, web2.0 and mashups as a natural
              learning management infrastructure. In IEEE Conf. on Technology
              for Education, July 2010. Conference tutorial.
            </li>
            <li>
              Sankalp Khare, Ishan Misra, and Venkatesh Choppella. Using
              org-mode and subversion for managing and publishing content in
              computer science courses. In IEEE 4th International Conference on
              Technology for Education, pages 220--223. IEEE Press, 2012.
            </li>
          </ul>
        </div>
      </div>
      <div className="my-5">
        <div className="space-y-2">
          <h1 className="text-2xl text-primary">Functional Programming</h1>
          <Separator />
        </div>
        <div className="text-muted-foreground py-4">
          <ul className="px-6 space-y-1 list-disc list-inside">
            <li>
              Venkatesh Choppella, Hitesh Kumar, P. Manjula, and K. Viswanath.
              From high-school algebra to computing through functional
              programming. In IEEE 4th International Conference on Technology
              for Education, pages 180--183. IEEE Press, 2012.
            </li>
            <li>
              V. Choppella, G. Ahuja, and A. Mavalankar. How does a program run?
              a visual model based on annotating abstract syntax trees. In 2016
              International Conference on Learning and Teaching in Computing and
              Engineering, pages 38--42, March 2016.
            </li>
          </ul>
        </div>
      </div>
      <div className="my-5">
        <div className="space-y-2">
          <h1 className="text-2xl text-primary">
            Algorithms And Discrete Dynamical Systems
          </h1>
          <Separator />
        </div>
        <div className="text-muted-foreground py-4">
          <ul className="px-6 space-y-1 list-disc list-inside">
            <li>
              Venkatesh Choppella, K Viswanath, and P Manjula. Viewing
              algorithms as iterative systems and plotting their dynamic
              behaviour. In Proceedings of the IEEE International Conference on
              Technology for Education, T4E 2013, pages 206--209. IEEE
              Press, 2013.
            </li>
            <li>
              V. Choppella, K. Viswanath and M. Kumar, &quot;Algodynamics: Algorithms
              as systems,&quot; in 2021 IEEE Frontiers in Education Conference,
              Lincoln, NE, USA, 2021, pp. 1-9
            </li>
          </ul>
        </div>
      </div>
      <div className="my-5">
        <div className="space-y-2">
          <h1 className="text-2xl text-primary">Ontologies</h1>
          <Separator />
        </div>
        <div className="text-muted-foreground py-4">
          <ol className="px-6 space-y-1 list-disc list-inside">
            <li>
              Aditi Mavalankar, Tejaswinee Kelkar, and Venkatesh Choppella.
              Generation of quizzes and solutions based on ontologies -- a case
              for a music problem generator. In 2015 IEEE Seventh International
              Conference on Technology for Education T4E, pages 73--76. IEEE,
              December 2015.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Publications;
