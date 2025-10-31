'use client';

import { useMemo } from 'react';

import { Character } from '@/interfaces/Character';

import CharacterItem from '../_components/CharacterGridList/_components/CharacterItem';

export default function About() {
  const mockCharacterItem: Character = useMemo(() => {
    return {
      id: 6,
      name: 'Abadango Cluster Princess',
      status: 'alive',
      species: 'Alien',
      type: '',
      gender: 'female',
      origin: {
        name: 'Abadango',
        url: 'https://rickandmortyapi.com/api/location/2',
      },
      location: {
        name: 'Abadango',
        url: 'https://rickandmortyapi.com/api/location/2',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/27'],
      url: 'https://rickandmortyapi.com/api/character/6',
      created: '2017-11-04T19:50:28.250Z',
    };
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-300 font-sans">
      <main className="flex min-h-screen w-full max-w-6xl flex-col px-5 py-5 sm:px-16 bg-transparent gap-3">
        <p>
          <span className="text-gray-900 text-lg font-bold">Intro</span>
          <br />
          <span className="text-gray-600 text-sm">
            Hello and welcome to my rick and morty page. Tahnk you for taking
            your time to see the page. I know it may have some bugs and
            inconsistencies you can find along the way... but some of them I
            already consider, but to due time constraint I think its better to
            leave it for now. Without further ado, lets get started.
          </span>
        </p>

        <div className="flex flex-col gap-2">
          <p>
            <span className="text-gray-900 text-lg font-bold">
              Design Choice
            </span>
            <br />
            <span className="text-gray-600 text-sm">
              For my design choices, I wanted to make it as close to the Rick
              and Morty theme as close as I can (Although I never watched the
              series). My take on the design is to show the characters as such
              they are being documented and tracked. Hence why I make each
              character&apos;s information are being kept in a file with a paper
              photo along them.
            </span>
          </p>
          <div>
            <CharacterItem item={mockCharacterItem} />
          </div>
          <p>
            <span className="text-gray-600 text-sm">
              From the technical side, I fully use tailwind and Fontawesome Icon
              for most of the decoration. Though, I can say that my design and
              color theory is not very good.
            </span>
          </p>
        </div>

        <p>
          <span className="text-gray-900 text-lg font-bold">Technical</span>
          <br />
          <span className="text-gray-600 text-sm">I use</span>
        </p>
      </main>
    </div>
  );
}
