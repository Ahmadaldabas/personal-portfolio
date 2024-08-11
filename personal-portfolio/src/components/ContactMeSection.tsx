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
  const [phoneInput, setPhoneInput] = useState();
  return (
    <section className="relative z-0 mt-28 bg-[#0E0E0E]">
      <MaxWidthWrapper className="h-full">
        <div className="grid h-full grid-cols-[9fr_1fr] gap-x-16 py-12 text-white">
          <div className="relative flex h-full flex-col content-between justify-between p-8">
            <div className="flex flex-col gap-4">
              <p className="text-stone-100">Say Hello</p>
              <h2 className={cn(titleClass("max-w-144 text-5xl text-white"))}>
                Let’s WorkTogether
              </h2>
              <BlurBox className="absolute left-0 top-0 -z-20"></BlurBox>
              <Circle className="absolute -left-6 -top-6 -z-30"></Circle>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-stone-100">Get In Touch</p>
              <div className="space-y-1">
                <h2 className={cn(titleClass("max-w-144 text-3xl text-white"))}>
                  me@ahmadaldabas.me
                </h2>
                <h3 className={cn(titleClass("max-w-144 text-2xl text-white"))}>
                  +971 556035725
                </h3>
              </div>
              <h2 className={cn(titleClass("max-w-144 text-3xl text-white"))}>
                📍 Dubai, UAE
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg bg-[#262626] p-8">
            <h3 className={"mb-12 text-2xl text-white"}>Input Form</h3>
            <div className="flex flex-col items-stretch justify-center gap-8 text-stone-100">
              <div className="flex flex-col items-stretch justify-center gap-2 text-stone-100">
                {" "}
                <p className="text-stone-100">Personal information</p>
                <div className="flex w-full max-w-full gap-2">
                  <input
                    type="text"
                    placeholder="First name"
                    className="rounded-lg border border-stone-500 bg-transparent p-2"
                  />{" "}
                  <input
                    type="text"
                    placeholder="Last name"
                    className="rounded-lg border border-stone-500 bg-transparent p-2"
                  />{" "}
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
                  onChange={setPhoneInput}
                  numberInputProps={{
                    className: "bg-transparent p-2",
                  }}
                />
              </div>
              <div className="flex flex-col items-stretch justify-center gap-2 text-stone-100">
                <p className="text-stone-100">Message</p>
                <textarea
                  placeholder="Message"
                  className="min-h-36 rounded-lg border border-stone-500 bg-transparent p-2"
                ></textarea>
              </div>
              <div>
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
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default ContactMeSection;
