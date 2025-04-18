"use client";

import { ArrowRight, ChevronRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { SocialLogo } from "social-logos";

export default function Footer() {
  const theMosaic = [
    {
      title: "The Big Picture",
      href: "/the-mosaic/the-big-picture",
    },
    {
      title: "Values",
      href: "/the-mosaic/values",
    },
    {
      title: "Board of Partners",
      href: "/the-mosaic/board-of-partners",
    },
    {
      title: "Challenges / Topics",
      href: "/the-mosaic/challenges-topics",
    },
    {
      title: "Expertise",
      href: "/the-mosaic/expertise",
    },
    {
      title: "Data",
      href: "/the-mosaic/data",
    },
  ];

  const comeIn = [
    {
      title: "Guide",
      href: "/come-in/guide",
    },
    {
      title: "FAQ",
      href: "/come-in/faq",
    },
  ];

  const learnGrow = [
    {
      title: "Summer School",
      href: "/learn-grow/summer-school",
    },
  ];

  const outcomes = [
    {
      title: "News & Events",
      href: "/outcomes/news-events",
    },
    {
      title: "Press Releases",
      href: "/outcomes/press-releases",
    },
  ];

  return (
    <footer className="bg-[var(--blue-primary)] text-white pt-16">
      <section className="container w-full grid grid-cols-1 md:grid-cols-5 grid-rows-2 md:grid-rows-2 mx-auto p-8 gap-4 md:gap-0 ">
        <div className="col-span-5 md:col-span-1">
          <h5 className="text-2xl font-semibold tracking-tight !mb-6 flex items-center gap-8">
            The Mosaic <ArrowRight className="w-5 h-5" />
          </h5>
          <ul className="flex flex-col gap-2">
            {theMosaic.map((item) => (
              <li
                key={item.title}
                className="hover:text-gray-300 hover:underline"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-5 md:col-span-1">
          <h5 className="text-2xl font-semibold tracking-tight !mb-6 flex items-center gap-8">
            Come In <ArrowRight className="w-5 h-5" />
          </h5>
          <ul className="flex flex-col gap-2">
            {comeIn.map((item) => (
              <li
                key={item.title}
                className="hover:text-gray-300 hover:underline"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-5 md:col-span-1">
          <h5 className="text-2xl font-semibold tracking-tight !mb-6 flex items-center gap-8">
            Learn & Grow <ArrowRight className="w-5 h-5" />
          </h5>
          <ul className="flex flex-col gap-2">
            {learnGrow.map((item) => (
              <li
                key={item.title}
                className="hover:text-gray-300 hover:underline"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-5 md:col-span-1">
          <h5 className="text-2xl font-semibold tracking-tight !mb-6 flex items-center gap-8">
            Outcomes <ArrowRight className="w-5 h-5" />
          </h5>
          <ul className="flex flex-col gap-2">
            {outcomes.map((item) => (
              <li
                key={item.title}
                className="hover:text-gray-300 hover:underline"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-5 md:col-span-1 row-span-1 row-start-2 pt-12 flex flex-col gap-2 ">
          <h5 className="text-2xl font-semibold tracking-tight !mb-6 flex items-center gap-8">
            Contact Us <ArrowRight className="w-5 h-5" />
          </h5>
          <span className="text-2xl flex flex-row gap-2 items-center">
            <Mail className="w-8 h-8" />
            info@ientrance.eu
          </span>
        </div>
        <div className="col-span-5 md:col-span-2 row-span-1 row-start-2 pt-12 flex flex-col gap-2 items-start pl-32">
          <h5 className="text-2xl font-semibold tracking-tight !mb-6 flex items-center gap-8">
            Follow Us <ArrowRight className="w-5 h-5" />
          </h5>
          <div className="flex flex-col gap-2 items-start">
            <span className="text-lg flex flex-row gap-2 items-center">
              <Image
                src="/svg/youtub.svg"
                alt="Youtube"
                width={24}
                height={24}
              />
              Youtube
            </span>
            <span className="text-lg flex flex-row gap-2 items-center">
              <Image
                src="/svg/linkedin.svg"
                alt="Linkedin"
                width={30}
                height={30}
                className="-ml-1"
              />
              Linkedin
            </span>
          </div>
        </div>
        <div className="bg-white splashMiniXS text-black p-4 col-span-5 md:col-span-1 col-start-1 md:col-start-5 row-start-1 md:row-end-3 flex flex-col justify-between gap-4">
          <div className="flex-1">
            <h5 className="text-2xl font-semibold tracking-tight !mb-6 flex items-center gap-8">
              Catalogue
            </h5>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="flex flex-col">
              <li className="flex flex-row gap-2 items-center">
                <ChevronRight className="w-4 h-4" /> +466 Machines
              </li>
              <li className="flex flex-row gap-2 items-center">
                <ChevronRight className="w-4 h-4" /> 12 Nodes
              </li>
              <li className="flex flex-row gap-2 items-center">
                <ChevronRight className="w-4 h-4" /> +400 Techniques
              </li>
              <li className="flex flex-row gap-2 items-center">
                <ChevronRight className="w-4 h-4" /> 1000+ Users
              </li>
            </ul>
          </div>
          <Link href="/catalogue">
            <Button className="w-full flex flex-row gap-2 justify-between items-center splashMiniXS rounded-none p-6 self-end cursor-pointer">
              Go to Catalogue <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
      <section className="container w-full flex flex-row mx-auto p-8 gap-4 md:gap-0">
        <div className="col-span-5 md:col-span-1">
          <p className="text-sm">
            Project funded by the European Union - NextGenerationEU under the
            National Recovery and Resilience Plan (NRRP), Mission 4 "Education
            and Research" - Component 2 "From research to business" - Investment
            3.1 "Fund for the realization of an integrated system of research
            and innovation infrastructures" - Call n. 3264 of 28/12/2021 of
            Italian Ministry of University and Research | Award Decree n. 128
            (21/06/2022) - Project code: IR0000027 - CUP: B33C22000710006 -
            Project title: iENTRANCE@ENL: Infrastructure for Energy TRAnsition
            aNd Circular Economy @ EuroNanoLab
          </p>
        </div>
      </section>
    </footer>
  );
}
