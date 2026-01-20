import Link from "next/link";
import Image from "next/image";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700/40 bg-slate-900/20 text-slate-300 transition hover:border-slate-500/60 hover:text-slate-100">
      {children}
    </span>
  );
}

export default function Socials() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="https://github.com/Shamiul-alim"
        target="_blank"
        aria-label="GitHub"
      >
        <Icon>
          <Image src="/svg/github.svg" alt="GitHub" width={20} height={20} />
        </Icon>
      </Link>

      <Link
        href="https://www.linkedin.com/in/shamiul-alim-96bb6b247"
        target="_blank"
        aria-label="LinkedIn"
      >
        <Icon>
          <Image
            src="/svg/linkedin.svg"
            alt="LinkedIn"
            width={20}
            height={20}
          />
        </Icon>
      </Link>

      <Link href="https://x.com/" target="_blank" aria-label="X">
        <Icon>
          <Image src="/svg/x.svg" alt="x" width={20} height={20} />
        </Icon>
      </Link>
    </div>
  );
}
