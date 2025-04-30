"use client";
import SharedInput from "@/components/Shared/SharedInput";
import SharedTextfield from "@/components/Shared/SharedTextfield";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  return (
    <div className="bg-white p-5 rounded-xl ">
      <div className="flex justify-between ">
        <div>
          <p className="text-xl font-bold mb-3">New Case</p>
          <p>Initiate new Case and authorize vendors on the go.</p>
        </div>
        <div className="mr-5 p-3 ">
          <button className="bg-blue-700 p-3 rounded-2xl text-white cursor-pointer hover:bg-blue-900">บันทึก</button>
        </div>
      </div>
      <div className="grid grid-cols-2 p-3 mt-5 gap-5">
        <div>
          {" "}
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
          <SharedInput
            label="Claim amount"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=""
          />
        </div>
        <div>
          <SharedInput
            label="Customer"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=""
          />
          <SharedTextfield
            label="Case Details"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=""
          />
        </div>
      </div>
    </div>
  );
};

export default page;
