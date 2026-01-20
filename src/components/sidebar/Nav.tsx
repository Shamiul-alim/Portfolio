"use client";

import { useEffect, useMemo, useState } from "react";

type Item = { id: string; label: string };

export default function Nav() {
  const items: Item[] = useMemo(
    () => [
      { id: "about", label: "ABOUT" },
      { id: "experience", label: "EXPERIENCE" },
      { id: "projects", label: "PROJECTS" },
      { id: "contact", label: "CONTACT" },
    ],
    [],
  );

  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const ids = items.map((i) => i.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          )[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
      },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav className="space-y-4 inline-flex flex-col">
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group  flex items-center gap-4"
          >
            <span
              className={[
                "h-[2px] transition-all",
                isActive
                  ? "w-14 bg-slate-200"
                  : "w-10 bg-slate-500/60 group-hover:w-14",
              ].join(" ")}
            />
            <span
              className={[
                "text-xs font-semibold tracking-[0.18em] transition-colors",
                isActive
                  ? "text-slate-200"
                  : "text-slate-500 group-hover:text-slate-300",
              ].join(" ")}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
