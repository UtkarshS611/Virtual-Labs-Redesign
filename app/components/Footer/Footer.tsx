import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const sections = [
  {
    title: "Address",
    content: "Engineering and Architecture Division : Room No:B5-203, Vindhya C6, VLEAD, IIIT-H, Gachibowli, Hyderabad - 500032"
  },
  {
    title: "Contact",
    content: "Phone: +91-40-6653 1250, Email:support@vlabs.ac.in Development/Outreach : +91-9177792945"
  },
];

const Footer: React.FC = () => {
  return (
    <section className="py-8 flex justify-center">
      <div className="container">
        <footer>
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <span className="flex items-center justify-center gap-4 lg:justify-start">
                  <Image
                    width={50}
                    height={50}
                    src="logo.svg"
                    alt="logo"
                    className="h-11"
                  />
                  <p className="text-3xl font-semibold">Virtual Labs</p>
                </span>
              </div>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a href="https://www.instagram.com/thevirtuallabs">
                    <FaInstagram className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="https://www.facebook.com/vlead.iiithyd">
                    <FaFacebook className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="https://x.com/TheVirtualLabs">
                    <FaTwitter className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="https://www.linkedin.com/404/">
                    <FaLinkedin className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="https://www.youtube.com/@virtual-lab-experiments-ii4780">
                    <FaYoutube className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20">
              {sections.map((section, index) => (
                <div key={index}>
                  <h3 className="mb-6 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {section.content}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>© 2025 Virtual Labs. All rights reserved.</p>
            <ul className="flex justify-center gap-4 lg:justify-start">
              <li className="hover:text-primary">
                <a href="#"> Terms and Conditions</a>
              </li>
              <li className="hover:text-primary">
                <a href="#"> Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
