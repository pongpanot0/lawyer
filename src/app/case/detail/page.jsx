"use client";
import Accordion from "@/components/Shared/Accordion";
import SharedInput from "@/components/Shared/SharedInput";
import SmallAccordion from "@/components/Shared/SmallAccordion";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  return (
    <div className="bg-white p-3 rounded-2xl">
      <div className="grid  grid-cols-3">
        <div className="col-span-2">
          <div className="text-xl font-bold">Case ID : 1</div>
          <div className="text-lg mt-5">23/04/2025</div>
          <div className="border-gray-50  rounded-2xl p-2 mt-5">
            <Accordion
              title={"Case Detail"}
              button={
                <div className="flex gap-5 justify-end ">
                  <button className="bg-orange-500 rounded-lg m-2  p-3 text-white float-right">
                    แก้ไขข้อมูล
                  </button>
                </div>
              }
              children={
                <div className="text-base font-light grid grid-cols-2 gap-5 mt-3">
                  <SharedInput
                    label="Claim no."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=""
                  />
                  <SharedInput
                    label="Policy no"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=""
                  />
                  <SharedInput
                    label="Assured"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=""
                  />
                  <SharedInput
                    label="ชนิดของกรมธรรม์"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=""
                  />
                  <div className="col-span-2">
                    <SharedInput
                      label="Claim amount"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder=""
                    />
                  </div>
                </div>
              }
            />
            <Accordion
              title={"TSB Detail"}
              button={
                <div className="flex gap-5 justify-end ">
                  <button className="bg-orange-500 rounded-lg m-2  p-3 text-white float-right">
                    แก้ไขข้อมูล
                  </button>
                </div>
              }
              children={
                <div className="text-base font-light grid grid-cols-2 gap-5">
                  <SharedInput
                    label="Claim no."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=""
                  />
                  <SharedInput
                    label="Policy no"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=""
                  />
                  <SharedInput
                    label="Assured"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=""
                  />
                  <SharedInput
                    label="ชนิดของกรมธรรม์"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=""
                  />
                  <div className="col-span-2">
                    <SharedInput
                      label="Claim amount"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder=""
                    />
                  </div>
                </div>
              }
            />
            <Accordion
              title={"TimeLine"}
              button={
                <div className="flex gap-5 justify-end ">
                  <button className="bg-orange-500 rounded-lg m-2  p-3 text-white float-right">
                    แก้ไขข้อมูล
                  </button>
                </div>
              }
              children={
                <div className="text-base font-light grid grid-cols-2 gap-5"></div>
              }
            />
          </div>
        </div>
        <div className="col-span-1">
          {" "}
          <SmallAccordion
            title={"TimeLine"}
            button={
              <div className="flex gap-5 justify-end ">
                <button className="bg-orange-500 rounded-lg m-2  p-3 text-white float-right">
                  แก้ไขข้อมูล
                </button>
              </div>
            }
            children={
              <div className="text-base font-light grid grid-cols-2 gap-5"></div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default page;
