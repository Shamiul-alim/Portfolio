import Image from "next/image";
import Nav from "./Nav";
import Socials from "./Socials";

type Props = { compact?: boolean };

export default function Sidebar({ compact }: Props) {
  return (
    <div className={compact ? "" : "pr-4"}>
      <Image
        src="/images/profile.jpg"
        alt="Avatar"
        width={128}
        height={128}
        className="rounded-full border-2 border-slate-200/30"
      />
      <h1 className="text-5xl mt-3 font-extrabold tracking-tight text-[#e2e8f0] cursor-pointer">
        Shamiul Alim
      </h1>

      <p className="mt-3 text-xl font-semibold text-slate-100/90">
        Full-Stack Developer
      </p>

      <p className="mt-4 max-w-[45ch] text-sm leading-6 text-slate-300/70">
        I create accessible, high-performance web applications with
        pixel-perfect precision and seamless user experiences.
      </p>

      <div className="mt-10">
        <Nav />
      </div>

      <div className="mt-10">
        <Socials />
      </div>
    </div>
  );
}
