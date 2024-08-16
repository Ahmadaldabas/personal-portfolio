"use client";
import { cn, titleClass } from "@/config/utils";
import MaxWidthWrapper from "./MaxWidthWrapper";
import BlurBox from "./BlurBox";
import Circle from "./Circle";
import React, { useState } from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Button from "./Button";

function ContactMeSection() {
  const [phoneInput, setPhoneInput] = useState<any>();
  return (
    <section className="relative z-0 bg-[#0E0E0E] p-2 sm:px-8 sm:pt-20 md:px-12 lg:px-14">
      <MaxWidthWrapper className="h-full">
        <div className="grid h-full grid-cols-1 justify-items-center gap-y-12 py-12 text-white xl:grid-cols-[1.1fr_1fr] xl:justify-items-stretch">
          <div>
            <div className="relative flex h-full flex-col content-between justify-between p-6 text-center xl:p-8 xl:text-start">
              <div className="flex flex-col gap-4">
                <p className="text-stone-100">Say Hello</p>
                <h2
                  className={cn(
                    titleClass(
                      "max-w-144 text-3xl text-white sm:text-4xl xl:text-5xl",
                    ),
                  )}
                >
                  Let’s WorkTogether
                </h2>
                <BlurBox className="absolute left-0 top-0 -z-20"></BlurBox>
                <Circle className="absolute -left-6 -top-6 -z-30"></Circle>
              </div>
              <div className="hidden flex-col gap-6 xl:flex">
                <p className="text-stone-100">Get In Touch</p>
                <div className="space-y-1">
                  <h2
                    className={cn(titleClass("max-w-144 text-3xl text-white"))}
                  >
                    me@ahmadaldabas.me
                  </h2>
                  <h3
                    className={cn(titleClass("max-w-144 text-2xl text-white"))}
                  >
                    +971 556035725
                  </h3>
                </div>
                <h2 className={cn(titleClass("max-w-144 text-3xl text-white"))}>
                  📍 Dubai, UAE
                </h2>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto flex w-full flex-col justify-between rounded-lg bg-[#262626] p-6 xl:p-8">
              <svg
                className="absolute -left-24 -top-24"
                xmlns="http://www.w3.org/2000/svg"
                width="185"
                height="185"
                viewBox="0 0 185 185"
                fill="none"
              >
                <g clip-path="url(#clip0_5405_1326)">
                  <path
                    d="M6.29861 78.6904C8.60426 79.4438 10.9085 80.3898 13.2634 80.9983C33.2088 86.0031 53.155 90.9115 73.1005 95.9162C75.1672 96.4306 77.231 97.3302 79.0037 98.5209C79.8662 99.0923 80.6232 100.916 80.2793 101.834C79.9833 102.799 78.436 103.677 77.2782 103.975C76.0241 104.273 74.5816 103.995 73.284 103.667C52.4717 98.6687 31.7073 93.7182 11.0413 88.4781C8.68646 87.8695 6.77955 85.2835 4.67291 83.6619L6.29861 78.6904Z"
                    className="fill-yellow-cta"
                  />
                  <path
                    d="M20.5859 168.164C21.5104 166.947 22.1417 165.241 23.4083 164.561C40.6538 154.933 57.8991 145.208 75.4378 136.069C78.6045 134.367 83.0426 135.105 86.8451 134.721C83.9725 137.399 81.4422 140.71 78.1297 142.655C64.1488 150.874 50.119 158.946 35.796 166.628C31.5576 168.913 26.5856 169.783 21.956 171.287C21.5156 170.262 21.0265 169.287 20.5861 168.262L20.5859 168.164Z"
                    className="fill-yellow-cta"
                  />
                  <path
                    d="M182.526 32.9033C181.42 35.0613 180.696 37.4102 179.255 39.3295C169.263 52.7637 159.271 66.198 148.944 79.3934C147.455 81.2649 144.436 81.8938 142.086 83.0963C142.33 80.6526 141.714 77.5399 143.011 75.8605C153.339 61.9944 163.954 48.4151 174.617 34.8837C175.962 33.1563 178.311 32.337 180.182 31.0397C180.947 31.7089 181.713 32.2822 182.478 32.9513L182.526 32.9033Z"
                    className="fill-yellow-cta"
                  />
                  <path
                    d="M92.2803 12.9999C97.2243 35.6895 105.721 55.5939 109.407 78.3903C98.9093 72.7681 85.007 21.4246 92.2803 12.9999Z"
                    className="fill-yellow-cta"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5405_1326">
                    <rect width="185" height="185" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h3
                className={
                  "mb-12 text-center text-2xl text-white xl:text-start"
                }
              >
                Contact Me
              </h3>
              <div className="flex max-w-full flex-col items-stretch justify-center gap-8 text-stone-100">
                <div className="flex max-w-full flex-col items-stretch justify-center gap-2 text-stone-100">
                  <p className="text-stone-100">Personal information</p>
                  <div className="flex max-w-full items-center gap-2">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full rounded-lg border border-stone-500 bg-transparent p-2"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full rounded-lg border border-stone-500 bg-transparent p-2"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="rounded-lg border border-stone-500 bg-transparent p-2"
                  />
                </div>
                <div className="flex flex-col items-stretch justify-center gap-2 text-stone-100">
                  <p className="text-stone-100">Phone number</p>
                  <PhoneInputWithCountrySelect
                    placeholder="Enter phone number"
                    defaultCountry="AE"
                    value={phoneInput}
                    className="rounded-lg border border-stone-500 bg-transparent p-2"
                    onChange={(e) => setPhoneInput(e)}
                    numberInputProps={{
                      className: "bg-transparent p-2",
                    }}
                    countrySelectProps={{ className: "bg-[#262626] p" }}
                  />
                </div>
                <div className="flex flex-col items-stretch justify-center gap-2 text-stone-100">
                  <p className="text-stone-100">Message</p>
                  <textarea
                    placeholder="Message"
                    className="min-h-36 rounded-lg border border-stone-500 bg-transparent p-2"
                  ></textarea>
                </div>
                <div className="mx-auto xl:mx-0">
                  <Button
                    className="ml-2 px-6 hover:translate-x-0 hover:translate-y-0"
                    onClick={() => alert("Coming Soon")}
                  >
                    <span className="flex items-center justify-between gap-1">
                      <span>Submit form</span>
                      <svg
                        fill="#000000"
                        viewBox="0 0 200 200"
                        data-name="Layer 1"
                        className="w-6"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <title></title>
                          <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm25-91.5-29,35L76,94c-4.5-3.5-10.5-2.5-14,2s-2.5,10.5,2,14c6,4.5,12.5,9,18.5,13.5,4.5,3,8.5,7.5,14,8,1.5,0,3.5,0,5-1l3-3,22.5-27c4-5,8-9.5,12-14.5,3-4,4-9,.5-13L138,71.5c-3.5-2.5-9.5-2-13,2Z"></path>
                        </g>
                      </svg>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-12 flex items-center justify-between gap-2 xl:hidden">
              <div>
                <p className="text-stone-200">Get In Touch</p>
                <div className="space-y-1">
                  <h2
                    className={cn(
                      titleClass("max-w-144 text-xl text-white lg:text-2xl"),
                    )}
                  >
                    me@ahmadaldabas.me
                  </h2>
                  <h3
                    className={cn(
                      titleClass("max-w-144 text-xl text-white lg:text-2xl"),
                    )}
                  >
                    +971 556035725
                  </h3>
                </div>
              </div>
              <div>
                <h2
                  className={cn(
                    titleClass("max-w-144 text-xl text-white lg:text-2xl"),
                  )}
                >
                  📍 Dubai, UAE
                </h2>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default ContactMeSection;
