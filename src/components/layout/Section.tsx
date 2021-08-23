import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export function Section({ children }: Props) {
  return (
    <section className="section flex flex-col items-center">
      <div className="w-full max-w-2xl p-4">{children}</div>
    </section>
  );
}
