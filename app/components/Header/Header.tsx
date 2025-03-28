import Link from "next/link";

import {
  Book,
  FilePlus,
  GraduationCap,
  Menu,
  ScreenShare,
  SearchSlash,
  Sunset,
  Telescope,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import ThemeButton from "../ThemeButton/ThemeButton";
import Search from "../Search/Search";
import Image from "next/image";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.JSX.Element;
  items?: MenuItem[];
}

interface HeaderProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const Header: React.FC = ({
  logo = {
    url: "/",
    src: "logo.svg",
    alt: "logo",
    title: "Virtual Labs",
  },
  menu = [
    {
      "title": "About",
      "url": "#",
      "items": [
        {
          "title": "Virtual Labs",
          "description": "Explore interactive science experiments.",
          icon: <Book className='size-5 shrink-0' />,
          "url": "/vlabs"
        },
        {
          "title": "VLead",
          "description": "Driving innovation in virtual labs.",
          icon: <SearchSlash className='size-5 shrink-0' />,
          "url": "vlead"
        }
      ]
    },
    {
      "title": "I am",
      "url": "#",
      "items": [
        {
          "title": "Learner",
          "description": "Access experiments and learning resources.",
          icon: <GraduationCap className='size-5 shrink-0' />,
          "url": "/experiments"
        },
        {
          "title": "Facilitator",
          "description": "Support outreach and engagement.",
          icon: <Sunset className='size-5 shrink-0'/> ,
          "url": "/outreach"
        },
        {
          "title": "Creator",
          "description": "Develop and contribute to virtual labs.",
          icon: <FilePlus className='size-5 shrink-0' />,
          "url": "/development/onboarding"
        }
      ]
    },
    {
      "title": "I Want to",
      "url": "#",
      "items": [
        {
          "title": "Create an Experiment",
          "description": "Develop new virtual lab experiments.",
          icon: <FilePlus className='size-5 shrink-0' />,
          "url": "/development/onboarding"
        },
        {
          "title": "Start Learning",
          "description": "Begin your journey with virtual labs.",
          icon: <GraduationCap className='size-5 shrink-0' />,
          "url": "/experiments"
        },
        {
          "title": "Host a Workshop",
          "description": "Organize training sessions and events.",
          icon: <ScreenShare className='size-5 shrink-0' />,
          "url": "/outreach"
        },
        {
          "title": "Explore Research",
          "description": "Discover ongoing research challenges.",
          icon: <Telescope className='size-5 shrink-0' />,
          "url": "/research/problems"
        }
      ]
    }
  ]  
}: HeaderProps) => {
  return (
    <section className="py-4 flex justify-center ">
      <div className="w-full">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <Link href={logo.url} className="flex items-center gap-2">
              <Image
                width={50}
                height={50}
                src={logo.src}
                className="w-8"
                alt={logo.alt}
              />
              <span className="text-lg font-semibold">{logo.title}</span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <Link href={"/variables"} className="text-sm text-muted-foreground">
              Variables
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <Search />
            <ThemeButton />
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link href={logo.url} className="flex items-center gap-2">
              <Image
                width={50}
                height={50}
                src={logo.src}
                className="w-8"
                alt={logo.alt}
              />
              <span className="text-lg font-semibold">{logo.title}</span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={logo.url} className="flex items-center gap-2">
                      <Image
                        width={50}
                        height={50}
                        src={logo.src}
                        className="w-8"
                        alt={logo.alt}
                      />
                      <span className="text-lg font-semibold">
                        {logo.title}
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="flex flex-col gap-3">
                    <Link
                      href={"/variables"}
                      className="text-sm text-muted-foreground"
                    >
                      Variables
                    </Link>
                    <Search />
                    <ThemeButton />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-muted-foreground">
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-80 p-3">
            <NavigationMenuLink>
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <Link
                    className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                    href={subItem.url}
                  >
                    {subItem.icon}
                    <div>
                      <div className="text-sm font-semibold">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-sm leading-snug text-muted-foreground">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <Link
      key={item.title}
      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      {item.title}
    </Link>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem
        key={item.title}
        value={item.title}
      >
        <AccordionTrigger className="py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <Link
              key={subItem.title}
              className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
              href={subItem.url}
            >
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-sm leading-snug text-muted-foreground">
                    {subItem.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} href={item.url} className="font-semibold">
      {item.title}
    </Link>
  );
};

export default Header;
