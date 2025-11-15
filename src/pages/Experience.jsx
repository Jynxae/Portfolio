import React from "react";

function Experience() {
  return (
    <section className="bg-[#FFFBE9] min-h-screen w-full py-20 px-10 md:px-24">
      <h2 className="text-[#AD8B73] text-6xl font-bold">
        &gt; Work Experience
      </h2>

      <div className="mt-16 space-y-20 text-[#C49673] text-2xl md:text-3xl leading-relaxed">
        {/* Paycom */}
        <div>
          <h3 className="text-[#AD8B73] text-4xl font-semibold">
            Software Developer — Paycom
          </h3>
          <p className="text-[#E4B567] text-2xl mt-2">June 2025 – Present</p>

          <ul className="list-disc pl-10 mt-6 space-y-4">
            <li>
              Built client dashboards using PHP, TypeScript, React, and MySQL,
              improving workflows for 37,500+ clients.
            </li>
            <li>
              Optimized SQL queries and database performance, generating reports
              30% faster across frontend and backend systems.
            </li>
            <li>
              Created automated dashboards to detect unmapped deductions,
              cutting support tickets by 25%.
            </li>
            <li>
              Improved system security by identifying and resolving
              vulnerabilities, reducing risks by 20%.
            </li>
            <li>
              Collaborated in an Agile environment and supported CI/CD pipelines
              using GitLab, Docker, and Splunk, maintaining 99% uptime.
            </li>
          </ul>
        </div>

        {/* NASA */}
        <div>
          <h3 className="text-[#AD8B73] text-4xl font-semibold">
            Software Engineer Intern — NASA / Boeing
          </h3>
          <p className="text-[#E4B567] text-2xl mt-2">May 2024 – May 2025</p>

          <ul className="list-disc pl-10 mt-6 space-y-4">
            <li>
              Automated network configuration tasks (VLAN switching, port
              toggling) using Python and PyQt, reducing manual steps by 80%.
            </li>
            <li>
              Built a SQLite-based IP lookup tool that improved data retrieval
              speed by 40%.
            </li>
            <li>
              Collaborated with NASA and Boeing engineers to gather requirements
              and design scalable automation tools.
            </li>
            <li>
              Documented features and demoed tools to technical teams to support
              long-term maintainability.
            </li>
          </ul>
        </div>

        {/* TA */}
        <div>
          <h3 className="text-[#AD8B73] text-4xl font-semibold">
            Teaching Assistant — University of Houston
          </h3>
          <p className="text-[#E4B567] text-2xl mt-2">
            January 2024 – May 2025
          </p>

          <ul className="list-disc pl-10 mt-6 space-y-4">
            <li>
              Led labs and office hours for 120+ students, contributing to a 25%
              improvement in course completion rates.
            </li>
            <li>
              Provided one-on-one debugging and logic guidance, reducing
              assignment errors by 20%.
            </li>
            <li>
              Explained technical concepts to students with varying experience
              levels, strengthening communication and teaching skills.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
