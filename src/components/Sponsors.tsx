import sponsors from '../data/sponsors.json';

interface SponsorData {
  image: string;
  name: string;
  tier: "platinum" | "gold";
  url: string;
}

export default function Sponsors() {
  return (
    <>
      <h3 className="text-[7vw] sm:text-5xl text-center pb-8 font-bold">
        PATROCINADORES
      </h3>
      <div className="flex flex-wrap justify-center">
        <h4 className="font-bold text-blue-500 text-center text-3xl w-full">Platino</h4>
        {getPlatinumSponsors()}
      </div>
      <div className="flex flex-wrap justify-center pt-6 pb-12">
        <h4 className="font-bold text-yellow-400 text-center text-3xl w-full">Oro</h4>
        {getGoldSponsors()}
      </div>
    </>
  );
}

function getPlatinumSponsors(): JSX.Element[] {
  return getSortedSponsorsByTier("platinum").map((s, i) => (
    <div className="w-full p-2 md:w-1/2 xl:w-1/3"  key={i}>
      <a
        className="bg-white border-b-8 border-blue-500 flex h-full items-center p-2 rounded w-full"
        href={s.url}
        target='_blank'
        rel='noopener'
      >
        <img
          className="block rounded w-full"
          src={`/sponsor-logos/${s.image}`}
          alt={s.name}
        />
      </a>
    </div>
  ));
}

function getGoldSponsors(): JSX.Element[] {
  return getSortedSponsorsByTier("gold").map((s, i) => (
    <div className="w-1/2 p-2 md:w-1/3 lg:w-1/4 xl:w-1/5" key={i}>
      <a
        className="bg-white border-b-8 border-yellow-400 flex h-full items-center p-2 rounded w-full"
        href={s.url}
        target='_blank'
        rel='noopener'
      >
        <img
          className="block rounded w-full"
          src={`/sponsor-logos/${s.image}`}
          alt={s.name}
        />
      </a>
    </div>
  ));
}

function getSortedSponsorsByTier(tier: string): SponsorData[] {
  const compareStr = Intl.Collator().compare;
  return sponsors.filter(s => s.tier === tier).sort((a, b) => compareStr(a.name, b.name)) as SponsorData[];
}
