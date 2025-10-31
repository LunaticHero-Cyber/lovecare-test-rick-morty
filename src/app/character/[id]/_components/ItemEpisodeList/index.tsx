import Link from 'next/link';

type Props = {
  episodes: string[];
};

const ItemEpisodeList = ({ episodes }: Props) => (
  <div className="grid grid-cols-5 gap-3">
    {episodes.map((value, index) => {
      return (
        <Link href={value} key={`${value}-${index}`}>
          <span className="text-gray-900 text-lg font-bold">{`Episode ${index + 1}`}</span>
        </Link>
      );
    })}
  </div>
);

export default ItemEpisodeList;
