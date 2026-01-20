export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16  lg:scroll-mt-24 text-center"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Subheading */}
        <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-300 mb-4">
          What's Next?
        </h2>

        {/* Main Heading */}
        <h3 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mb-6">
          Get In Touch
        </h3>

        {/* Description */}
        <p className="max-w-md text-slate-400 mb-10 leading-relaxed">
          Feel free to reach out! Whether you have a question, feedback, or just
          want to connect, I’m always open to conversation.
        </p>

        <div className="group">
          <a
            className="rounded border-2 border-teal-300 px-7 py-4 text-sm font-medium text-teal-300 transition-all hover:bg-teal-300/10 hover:shadow-[4px_4px_0_0_rgba(94,234,212,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
            href="mailto:samiulalim01234.email@example.com"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}
