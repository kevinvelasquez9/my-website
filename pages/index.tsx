import Header from '../components/header';
import Hyperlink from '../components/hyperlink';
import Section from '../components/section';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <div className="container mx-auto px-10 md:px-40">
        <Header />
        <Section title="About me">
          <p>
            <span className="font-semibold">Howdy!</span> I'm Kevin, a computer
            science student at{' '}
            <Hyperlink
              text="Johns Hopkins University"
              href="https://www.jhu.edu"
            />
            . I'm thrilled to be joining{' '}
            <Hyperlink text="Netflix" href="https://netflixtechblog.com" /> as a
            full-time software engineer next year. I previously interned twice
            at <Hyperlink text="Google" href="https://blog.google" /> and done
            research at the{' '}
            <Hyperlink
              text="Applied Physics Laboratory"
              href="https://www.jhuapl.edu"
            />
            .
          </p>
          <p>
            In my down time, I enjoy{' '}
            <Hyperlink
              text="reading"
              href="https://www.goodreads.com/kevinvelasquez"
            />{' '}
            on my Kindle, trying out new restaurants, making Spotify playlists,
            and binge-watching One Piece.
          </p>
          <p>
            <span className="font-semibold">Other things I enjoy</span>: bubble
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
