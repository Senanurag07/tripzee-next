"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <main className="bg-white pb-14 md:pb-0">
      {" "}
      <footer className="bg-[#f9f6ee]  rounded-t-[50px] text-black">
        <div className=" max-container py-12">
          {/* Top Section with Logo */}
          <div className=" w-full flex justify-center mb-10">
            <div className="sm:flex sm:max-w-6xl gap-6">
              <Image
                src="/assets/tripzelogo.png"
                alt="Tripzee Holidays"
                width={144}
                height={40}
                className="mb-3"
              />
              <p className="text-sm leading-relaxed text-gray-700">
                At TRIPZEE Holidays, we believe that travel is more than just
                reaching a destination, it&apos;s about creating unforgettable
                experiences that stay with you for a lifetime. As a modern and
                dynamic travel community, we offer meticulously curated travel
                packages that span across India and the globe, catering to every
                traveller&apos;s dream.
              </p>
            </div>
          </div>

          <div className=" sm:block hidden w-full my-8">
            <div className="h-px w-full bg-[linear-gradient(to_right,transparent,#222222,transparent)] opacity-80"></div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex md:flex-row md:justify-between md:items-start gap-10 pb-10">
            <div className="flex w-full flex-wrap justify-between">
              {/* Contact */}
              <div className="w-56">
                <h3 className="font-semibold text-lg mb-3">Contact</h3>
                <p className="text-sm mb-2">
                  Office No. 106 first floor, Flower valley fairy tale chs,
                  Khadakpada Cir, Kalyan, Maharashtra 421301
                </p>
                <p className="text-sm text-nowrap mb-1">
                  <span className="font-medium">Gmail :</span>{" "}
                  tripzeeholidays@gmail.com
                </p>
                <p className="text-sm">
                  <span className="font-medium">Phone :</span> +91 913970722
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-gray-600 transition"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-gray-600 transition"
                    >
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="hover:text-gray-600 transition"
                    >
                      Privacy & policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-600 transition">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-600 transition">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="hover:text-gray-600 transition"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Global Escapes */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Global Escapes</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link
                      href="/packages/thailand"
                      className="hover:text-gray-600 transition"
                    >
                      Thailand Tour Packages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/packages/dubai"
                      className="hover:text-gray-600 transition"
                    >
                      Dubai Tour Packages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/packages/singapore"
                      className="hover:text-gray-600 transition"
                    >
                      Singapore Tour Packages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/packages/vietnam"
                      className="hover:text-gray-600 transition"
                    >
                      Vietnam Tour Packages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/packages/malaysia"
                      className="hover:text-gray-600 transition"
                    >
                      Malaysia Tour Packages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/packages/georgia"
                      className="hover:text-gray-600 transition"
                    >
                      Georgia Tour Packages
                    </Link>
                  </li>
                </ul>
              </div>

              {/* India Getaways */}
              <div>
                <h3 className="font-semibold text-lg mb-3">India Getaways</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link
                      href="/india/kashmir"
                      className="hover:text-gray-600 transition"
                    >
                      Kashmir Tour Packages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/india/rajasthan"
                      className="hover:text-gray-600 transition"
                    >
                      Rajasthan Tour Packages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/india/himachal"
                      className="hover:text-gray-600 transition"
                    >
                      Himachal Tour Packages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/india/goa"
                      className="hover:text-gray-600 transition"
                    >
                      Goa Tour Packages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/india/kerala"
                      className="hover:text-gray-600 transition"
                    >
                      Kerala Tour Packages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/india/ladakh"
                      className="hover:text-gray-600 transition"
                    >
                      Leh-Ladakh Tour Packages
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Other Packages */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Other Packages</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link
                      href="/packages/mice"
                      className="hover:text-gray-600 transition"
                    >
                      MICE Tours
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/packages/college"
                      className="hover:text-gray-600 transition"
                    >
                      College Trips
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/packages/honeymoon"
                      className="hover:text-gray-600 transition"
                    >
                      Honeymoon Packages
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile View with Accordion */}
          <div className="md:hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="contact">
                <AccordionTrigger className="text-lg font-semibold">
                  Contact
                </AccordionTrigger>
           
                <AccordionContent>
                  <div className="space-y-2 text-sm">
                    <p className="mb-2">
                      Office No. 106 first floor, Flower valley fairy tale chs,
                      Khadakpada Cir, Kalyan, Maharashtra 421301
                    </p>
                    <p className="text-nowrap mb-1">
                      <span className="font-medium">Gmail :</span>{" "}
                      tripzeeholidays@gmail.com
                    </p>
                    <p>
                      <span className="font-medium">Phone :</span> +91 913970722
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
                     <div className="w-full  my-1">
            <div className="h-px w-full bg-[linear-gradient(to_right,transparent,#222222,transparent)] opacity-80"></div>
          </div>
              <AccordionItem value="quick-links">
                <AccordionTrigger className="text-lg font-semibold">
                  Quick Links
                </AccordionTrigger>
                
                <AccordionContent>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        href="/about"
                        className="hover:text-gray-600 transition"
                      >
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="hover:text-gray-600 transition"
                      >
                        Contact us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/privacy"
                        className="hover:text-gray-600 transition"
                      >
                        Privacy & policy
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-gray-600 transition">
                        Terms
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-gray-600 transition">
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="hover:text-gray-600 transition"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
                <div className="w-full  my-1">
            <div className="h-px w-full bg-[linear-gradient(to_right,transparent,#222222,transparent)] opacity-80"></div>
          </div>

              {/* Global Escapes Accordion */}
              <AccordionItem value="global-escapes">
                <AccordionTrigger className="text-lg font-semibold">
                  Global Escapes
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        href="/packages/thailand"
                        className="hover:text-gray-600 transition"
                      >
                        Thailand Tour Packages
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/packages/dubai"
                        className="hover:text-gray-600 transition"
                      >
                        Dubai Tour Packages
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/packages/singapore"
                        className="hover:text-gray-600 transition"
                      >
                        Singapore Tour Packages
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/packages/vietnam"
                        className="hover:text-gray-600 transition"
                      >
                        Vietnam Tour Packages
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/packages/malaysia"
                        className="hover:text-gray-600 transition"
                      >
                        Malaysia Tour Packages
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/packages/georgia"
                        className="hover:text-gray-600 transition"
                      >
                        Georgia Tour Packages
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
                     <div className="w-full  my-1">
            <div className="h-px w-full bg-[linear-gradient(to_right,transparent,#222222,transparent)] opacity-80"></div>
          </div>

              {/* India Getaways Accordion */}
              <AccordionItem value="india-getaways">
                <AccordionTrigger className="text-lg font-semibold">
                  India Getaways
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        href="/india/kashmir"
                        className="hover:text-gray-600 transition"
                      >
                        Kashmir Tour Packages
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/india/rajasthan"
                        className="hover:text-gray-600 transition"
                      >
                        Rajasthan Tour Packages
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/india/himachal"
                        className="hover:text-gray-600 transition"
                      >
                        Himachal Tour Packages
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/india/goa"
                        className="hover:text-gray-600 transition"
                      >
                        Goa Tour Packages
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/india/kerala"
                        className="hover:text-gray-600 transition"
                      >
                        Kerala Tour Packages
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/india/ladakh"
                        className="hover:text-gray-600 transition"
                      >
                        Leh-Ladakh Tour Packages
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
       <div className="w-full  my-1">
            <div className="h-px w-full bg-[linear-gradient(to_right,transparent,#222222,transparent)] opacity-80"></div>
          </div>
              {/* Other Packages Accordion */}
              <AccordionItem value="other-packages">
                <AccordionTrigger className="text-lg font-semibold">
                  Other Packages
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        href="/packages/mice"
                        className="hover:text-gray-600 transition"
                      >
                        MICE Tours
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/packages/college"
                        className="hover:text-gray-600 transition"
                      >
                        College Trips
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/packages/honeymoon"
                        className="hover:text-gray-600 transition"
                      >
                        Honeymoon Packages
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Social Media Links */}
          <div className="w-full sm:block hidden my-2">
            <div className="h-px w-full bg-[linear-gradient(to_right,transparent,#222222,transparent)] opacity-80"></div>
          </div>
          <div className="flex  flex-col-reverse  md:flex-row justify-between items-center mt-6 bg-[#222222] text-white sm:px-4 py-3 rounded-lg sm:rounded-xl">
            <p className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} All rights reserved. Tripzee
              Holidays.
            </p>
            <div className="block sm:hidden  w-full my-4">
              <div className="h-px w-full bg-[linear-gradient(to_right,transparent,#ffffff,transparent)] opacity-80"></div>
            </div>
            <div className="flex  gap-3 sm:gap-2 mt-2 md:mt-0">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white text-[12px] sm:text-lg  px-2 py-1.5 rounded-full hover:bg-gray-800 transition"
              >
                <FaInstagram /> Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white  text-[12px] sm:text-lg px-2  py-1.5 rounded-full hover:bg-gray-800 transition"
              >
                <FaFacebook /> Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white text-[12px]  px-2  sm:text-lg py-1.5 rounded-full hover:bg-gray-800 transition"
              >
                <FaTwitter /> Twitter | X
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
