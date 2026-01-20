import experiencesData from "@/data/experiences.json";
export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="group/list">
        {experiencesData.experiences.map((item) => (
          <div
            key={item.id}
            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-80 lg:group-hover/list:opacity-50 mb-12"
          >
            {/* Background Hover Effect */}
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

            {/* Time Column */}
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              {item.time}
            </header>

            {/* Content Column */}
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                <div>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 text-base"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 md:-inset-y-6 lg:block"></span>
                    <span>
                      {item.title} ·{" "}
                      <span className="inline-block">
                        {item.company}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="flex flex-row gap-3">
                  {item.subTitles?.map((sub, i) => (
                    <div
                      key={i}
                      className="text-slate-500 font-medium"
                      aria-hidden="true"
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              </h3>

              <p className="mt-2 text-sm leading-normal text-slate-400">
                {item.description}
              </p>

              <ul
                className="mt-4 flex flex-wrap"
                aria-label="Technologies used"
              >
                {item.tech.map((tech) => (
                  <li key={tech} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="group">
        <a
          className=" group cursor-pointer inline-flex items-baseline font-bold text-[1rem] leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 text-base"
          href="/Shamiul-Alim.pdf"
          download={"/Samiul-Alim.pdf"}
          target="_blank"
        >
          <span>View Full Résumé</span>
          <span className="inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
