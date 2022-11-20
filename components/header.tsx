import { ReactNode } from 'react';
import { GrGithub, GrLinkedin } from 'react-icons/gr';

type Social = {
  name: string;
  icon: ReactNode;
  href: string;
};

const socials: Social[] = [
  {
    name: 'Github',
    icon: <GrGithub />,
    href: 'https://github.com/kevinvelasquez9',
  },
  {
    name: 'LinkedIn',
    icon: <GrLinkedin />,
    href: 'https://www.linkedin.com/in/kevinvelasquez9',
  },
];

export default function Header() {
  return (
    <div className="pt-5 md:pt-20">
      <h1 className="text-3xl font-bold md:text-4xl">Kevin Velasquez</h1>
      <div className="pt-2">
        <h3 className="uppercase tracking-wider">Computer Science</h3>
        <h3 className="uppercase tracking-wider">Johns Hopkins University</h3>
      </div>
      <div className="flex space-x-4 pt-4">
        {socials.map((social) => (
          <a
            className="text-gray-600 hover:text-inherit"
            href={social.href}
            target="_blank"
            key={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
