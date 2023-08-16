"use client";

import { useState } from "react";

export default function ContactForm() {
  const [region, setRegion] = useState("");
  const [cid, setCid] = useState("");
  const [domain, setDomain] = useState("");
  const [subdomain, setSubdomain] = useState("");
  const [keyword, setKeyword] = useState("");
  const [control_objective, setControl_objective] = useState("");
  const [refid, setRefid] = useState("");
  const [steps, setSteps] = useState("");
  const [clause, setClause] = useState("");
  const [regulation, setRegulation] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Region: ", region);
    console.log("Regulation: ", regulation);
    console.log("Control ID: ", cid);
    console.log("Domain: ", domain);
    console.log("Sub-Domain: ", subdomain);
    console.log("Keyword: ", keyword);
    console.log("Control Objective: ", control_objective);
    console.log("High Level test steps: ", steps);
    console.log("Reference ID: ", refid);
    console.log("Control Statement: ", clause);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        region,
        regulation,
        cid,
        domain,
        subdomain,
        keyword,
        control_objective,
        steps,
        refid,
        clause,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setRegion("");
      setRegulation("");
      setCid("");
      setClause("");
      setControl_objective("");
      setDomain("");
      setKeyword("");
      setRefid("");
      setSubdomain("");
      setSteps("");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >
        <div>
          <label htmlFor="region">Region</label>
          <input
            onChange={(e) => setRegion(e.target.value)}
            value={region}
            type="text"
            id="region"
            placeholder="India"
          />
        </div>

        <div>
          <label htmlFor="regulation">Regulation/Framework</label>
          <input
            onChange={(e) => setRegulation(e.target.value)}
            value={regulation}
            type="text"
            id="regulation"
            placeholder="Gramm-Leach-Bliley Act(GLBA)"
          />
        </div>

        <div>
          <label htmlFor="cid">Control ID</label>
          <input
            onChange={(e) => setCid(e.target.value)}
            value={cid}
            type="text"
            id="region"
            placeholder=""
          />
        </div>

        <div>
          <label htmlFor="domain">Domain</label>
          <input
            onChange={(e) => setDomain(e.target.value)}
            value={domain}
            type="text"
            id="domain"
            placeholder="Access Management"
          />
        </div>

        <div>
          <label htmlFor="subdomain">Sub Domain</label>
          <input
            onChange={(e) => setSubdomain(e.target.value)}
            value={subdomain}
            type="text"
            id="subdomain"
            placeholder="Access Control Policies and Procedures"
          />
        </div>

        <div>
          <label htmlFor="keyword">Keyword</label>
          <input
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
            type="text"
            id="keyword"
            placeholder=""
          />
        </div>

        <div>
          <label htmlFor="control_objective">Control Objective</label>
          <input
            onChange={(e) => setControl_objective(e.target.value)}
            value={control_objective}
            type="text"
            id="control_ Objective"
            placeholder=""
          />
        </div>

        <div>
          <label htmlFor="steps">High Level Test Steps</label>
          <input
            onChange={(e) => setSteps(e.target.value)}
            value={steps}
            type="text"
            id="steps"
            placeholder=""
          />
        </div>

        <div>
          <label htmlFor="refid">Reference ID</label>
          <input
            onChange={(e) => setRefid(e.target.value)}
            value={refid}
            type="text"
            id="refid"
            placeholder="Information Security/Safeguarding
"
          />
        </div>

        <div>
          <label htmlFor="clause">Control Statement/Clause</label>
          <input
            onChange={(e) => setClause(e.target.value)}
            value={clause}
            type="text"
            id="clause"
            placeholder="Management should restrict their access to financial institution systems, and appropriate access controls and monitoring should be in place between service provider's systems and the institution."
          />
        </div>

        <button className="bg-green-700 p-3 text-white font-bold" type="submit">
          Send
        </button>
      </form>

      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e) => (
            <div
              key={e}
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
}
