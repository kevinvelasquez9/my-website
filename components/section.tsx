import { ReactNode } from 'react';

type Props = {
  title: string;
  children?: ReactNode | ReactNode[];
};

export default function Section({ title, children }: Props) {
  return (
    <section className="pt-10">
      <h2 className="pb-2 text-xl font-bold text-blue-500 md:text-2xl">
        {title}
      </h2>
      <div className="flex flex-col space-y-3">{children}</div>
    </section>
  );
}
