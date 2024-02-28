export default function Home() {
  const title = "Advice #117";
  const content =
    "It is easy to sit up and take notice, what's difficult is getting up and taking action.";
  return (
    <main className="h-screen w-screen bg-dark-blue font-extrabold flex items-center justify-center text-center">
      <section className="mx-4 bg-dark-grayish-blue rounded-md relative p-8 pb-12 w-[343px] lg:w-[540px]">
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
        <button className="rounded-full bg-neon-green hover:drop-shadow-neon-green flex items-center justify-center h-[64px] w-[64px] absolute bottom-0 translate-y-1/2 right-1/2 translate-x-1/2">
          <img src="/icons/icon-dice.svg" alt="dice image"></img>
        </button>
      </section>
    </main>
  );
}
