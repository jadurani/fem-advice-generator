export default function Home() {
  const title = "Advice #117";
  const content =
    "It is easy to sit up and take notice, what's difficult is getting up and taking action.";
  return (
    <main className="h-screen w-screen bg-dark-blue font-extrabold flex items-center justify-center text-center">
      <section className="bg-dark-grayish-blue rounded-md relative p-8 w-[343px] lg:w-[540px]">
        {/* title */}
        <h1 className="uppercase text-neon-green tracking-[3.46px] text-[11px]">
          {title}
        </h1>

        {/* content */}
        <p className="pt-4 pb-6 text-[24px] -leading-[0.26px] text-light-cyan">
          {content}
        </p>

        {/* bar */}
        <img src="/images/pattern-divider-mobile.svg" alt="" />

        {/* button */}
      </section>
    </main>
  );
}
