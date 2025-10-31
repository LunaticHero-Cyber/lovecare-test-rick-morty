import Link from 'next/link';

type Props = {
  episodes: string[];
};

const ItemEpisodeList = ({ episodes }: Props) => (
  <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
    {episodes.map((value, index) => {
      const episodeNumber = value.split('/')?.[5];
      return (
        <Link href={value} key={`${value}-${index}`}>
          <span className="text-gray-900 text-lg font-bold">{`Episode ${episodeNumber}`}</span>
        </Link>
      );
    })}
  </div>
);

export default ItemEpisodeList;
