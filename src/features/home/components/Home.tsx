import { Section } from "src/components/layout";
import { Shortlink } from "src/features/shortlink";

export function Home() {
  return (
    <div className="bg-blue-500 text-white">
      <Section>
        <h1 className="text-5xl text-center font-bold p-4">
          Shortlink
        </h1>
        <p className="text-center pb-4">
          Shorten your URL links
        </p>
        <Shortlink />
        <div className="flex justify-center p-4">
          <button className="rounded-full py-2 px-8 bg-white text-blue-500 font-semibold hover:text-white hover:bg-blue-500 hover:border-white border-2">
            VIEW DOCS
          </button>
        </div>
      </Section>
    </div>
  );
}
