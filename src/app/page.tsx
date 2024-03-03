"use client";

import { useAdviceFetcher } from "@lib/useFetch";

export default function Home() {
  const { loading, error, adviceData, getAdvice } = useAdviceFetcher();

  return (
    <main className="h-screen w-screen bg-dark-blue font-extrabold flex items-center justify-center">
      <section className="mx-4 bg-dark-grayish-blue rounded-md relative pt-8 pb-16 w-[343px] lg:w-[540px] text-center">
        {/* title */}
        <h1 className="uppercase text-neon-green tracking-[3.46px] text-[11px] mx-auto">
          Advice #{adviceData?.id}
        </h1>
        {/* content */}
        {adviceData && !loading && (
          <p className="pt-4 pb-6 text-[24px] -leading-[0.26px] text-light-cyan mx-auto px-4 lg:px-16">
            {`“${adviceData?.advice}”`}
          </p>
        )}

        {/* bar */}
        <img
          src="/images/pattern-divider-mobile.svg"
          alt=""
          className="lg:hidden block mx-auto"
        />
        <img
          src="/images/pattern-divider-desktop.svg"
          alt=""
          className="hidden lg:block mx-auto"
        />
        {/* button */}
        <button
          onClick={getAdvice}
          className="rounded-full bg-neon-green hover:drop-shadow-neon-green flex items-center justify-center h-[64px] w-[64px] absolute bottom-0 translate-y-1/2 right-1/2 translate-x-1/2">
          <img src="/icons/icon-dice.svg" alt="dice image"></img>
        </button>
      </section>
    </main>
  );
}
