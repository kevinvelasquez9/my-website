import Header from '../components/header';
import Hyperlink from '../components/hyperlink';
import Section from '../components/section';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800">
      <div className="container mx-auto px-10 md:px-40">
        <Header />
        <Section title="About me">
          <p>
            Hi, I'm Kevin, a college student studying Computer Science at{' '}
            <Hyperlink
              text="Johns Hopkins University"
              href="https://www.jhu.edu"
            />
            . Next year I'm excited to be joining{' '}
            <Hyperlink text="Netflix" href="https://netflixtechblog.com" /> as a
            full-time software engineer. Previously, I interned at the{' '}
            <Hyperlink
              text="Applied Physics Laboratory"
              href="https://www.jhuapl.edu"
            />{' '}
            and twice at <Hyperlink text="Google" href="https://blog.google" />.
          </p>
          <p>
            In my spare time, I like to{' '}
            <Hyperlink
              text="read"
              href="https://www.goodreads.com/kevinvelasquez"
            />{' '}
            on my Kindle, try new restaurants, create Spotify playlists, and
            watch One Piece.
          </p>
          <p>
            <span className="font-medium">Other things I enjoy</span>: bubble
            tea, chess, plants, sneakers, stationery,{' '}
            <Hyperlink
              text="vim"
              href="https://github.com/kevinvelasquez9/nvim"
            />
            , volleyball
          </p>
        </Section>
        <Section title="Projects">
          <p>
            <span className="bg-green-300 text-gray-600">coming soon</span>
          </p>
        </Section>
      </div>
    </div>
  );
}
