type Props = {
  text: string;
  href: string;
};

export default function Hyperlink({ text, href }: Props) {
  return (
    <a className="bg-amber-100" href={href} target="_blank">
      {text}
    </a>
  );
}
