import './style.css';

import Image from 'next/image';
import Link from 'next/link';

import { Character } from '@/interfaces/Character';

type Props = {
  item: Character;
};

const CharacterItem = ({ item }: Props) => (
  <Link href={`/character/${item.id}`}>
    <div className="relative flex flex-col w-fit gap-2.5">
      <div className="absolute top-0 left-0 w-full h-full z-10 paper"></div>
      <div className="flex flex-col h-full w-fit py-1 px-2 cursor-pointer gap-1 bg-amber-100 transition-all duration-300 hover:rounded-tr-[64px] shadow-2xl z-20">
        <p className="leading-3.5 align-middle">
          <span className="text-gray-500 text-sm">{`Subject `}</span>
          <br className="flex sm:hidden" />
          <span className="text-gray-900 font-bold">{`#${item.id}`}</span>
        </p>
        <Image
          className="border-white border-8 border-b-20"
          src={item.image}
          alt={`Individual ID ${item.id} Image`}
          width={180}
          height={180}
          priority
        />
        <div
          className="flex flex-col cursor-help max-sm:min-h-14"
          title={item.name}
        >
          <span className="text-gray-500 text-sm leading-3">{`Name:`}</span>
          <span className="text-gray-900 font-bold text-ellipsis line-clamp-2 sm:line-clamp-1">
            {item.name}
          </span>
        </div>
      </div>
    </div>
  </Link>
);

export default CharacterItem;
