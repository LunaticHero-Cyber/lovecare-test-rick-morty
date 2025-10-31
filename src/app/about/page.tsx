'use client';

import { useMemo } from 'react';

import { Character } from '@/interfaces/Character';

import CharacterItem from '../_components/CharacterGridList/_components/CharacterItem';
import CharacterItemSkeleton from '../_components/CharacterGridList/_components/CharacterItemSkeleton';

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
              photo along them. I also made a skeleton for the item.
            </span>
          </p>
          <div className="grid grid-cols-4 gap-6">
            <CharacterItem item={mockCharacterItem} />

            <CharacterItemSkeleton />
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
          <span className="text-gray-900 text-xs font-semibold">Axios</span>
          <br />
          <span className="text-gray-600 text-sm">
            I use axios dependencies just so I don&apos;t have to deal with
            basic API config otherwise CORS would be an issue. I believe using
            this would make better standardization for API responses in general.
          </span>
          <br />
          <br />
          <span className="text-gray-900 text-xs font-semibold">
            Typing effect in character detail
          </span>
          <br />
          <span className="text-gray-600 text-sm">
            I say a little animation would not hurt... and since it is matching
            with the theme, I decided to add some typeing effect by using use
            states to keep the current typed index and the character itself. It
            is run by using timeout and use effect to render the effect.
          </span>
          <br />
          <br />
          <span className="text-gray-900 text-xs font-semibold">Animation</span>
          <br />
          <span className="text-gray-600 text-sm">
            I also add some animation for hovers just so the action does not
            seem to boring. Such as in the headers button.
          </span>
          <br />
          <br />
          <span className="text-gray-900 text-xs font-semibold">
            use memo and use callback
          </span>
          <br />
          <span className="text-gray-600 text-sm">
            Although the app is generally small but adding both useMemo and
            useCallback is mandatory to save up render time.
          </span>
          <br />
          <br />
          <span className="text-gray-900 text-xs font-semibold">
            Responsivness
          </span>
          <br />
          <span className="text-gray-600 text-sm">
            Some of the styling is change according the window size, this is
            easy to implemented using tailwind media condition classes.
          </span>
          <br />
          <br />
          <span className="text-gray-900 text-xs font-semibold">
            Architecture and file structure
          </span>
          <br />
          <span className="text-gray-600 text-sm">
            Finally, My app architecture is very simple... I use a form of
            hieararchy so that a type, component, or hooks that are generally
            use to be on be inside the app file, while the components that are
            used only in certain page or components are put as a private one
            (&quot;_components&quot;). A newly made component or hooks are put
            in a private component file and the decision to move the component
            into a upper level is decided when a component, type, or hooks is
            started to be needed by another page or component. This way a
            component, type, or hooks is always modular.
          </span>
        </p>

        <p>
          <span className="text-gray-900 text-lg font-bold">
            The possibilities
          </span>
          <br />
          <span className="text-gray-900 text-xs font-semibold">
            Architecture
          </span>
          <br />
          <span className="text-gray-600 text-sm">
            In a bigger more complex app, I also employ an atomic design in the
            high level component. Using Atoms and Molecules, where Atoms is
            usually the smallest component only requiring one element, such as
            buttons, input, and text with our own design and props. Further, a
            Molecule is a combination of multiple Atoms, such as a Badge, a
            Dialog, and so on. A atomic design ususally takes a larger component
            into an Organism and a Template but I find it not very modular if
            your component is bigger than a Molecule.
          </span>
          <br />
          <br />
          <span className="text-gray-900 text-xs font-semibold">Styling</span>
          <br />
          <span className="text-gray-600 text-sm">
            In this app, the styling is very long as a className and it could be
            improved by making more style.css file and more classes. Some
            components may have it, but unfortunately I am not able to do all of
            it.
          </span>
          <br />
          <br />
          <span className="text-gray-900 text-xs font-semibold">
            Character Filtering
          </span>
          <br />
          <span className="text-gray-600 text-sm">
            Characters filter style could be improved and its responsiveness may
            also be taken account... such as changing the group button into a
            Dropdown component instead when the window is smaller.
          </span>
          <br />
          <br />
          <span className="text-gray-900 text-xs font-semibold">
            Using well built dependencies
          </span>
          <br />
          <span className="text-gray-600 text-sm">
            At first I was planning to use cache such as SWR for responses
            management but in the end.. I decided not to and so created a simple
            hooks to manage the data, even so my hooks cannot do caching or
            cookes as well as SWR do.
          </span>
        </p>

        <p>
          <span className="text-gray-900 text-lg font-bold">Closure</span>
          <br />
          <span className="text-gray-600 text-sm">
            The app may have flaws but I find many of it things can be improved.
            I hope you find it well and I really hope we can work together in
            the future and able to make a front end app that is very friendly
            for consumers to use. Thank you for your time, Until next time.
          </span>
        </p>
      </main>
    </div>
  );
}
