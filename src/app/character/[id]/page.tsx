'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { use, useCallback, useEffect, useState } from 'react';

import ItemDetail from '@/app/character/[id]/_components/ItemDetail';
import GetCharacter from '@/hooks/getCharacter';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ItemEpisodeList from './_components/ItemEpisodeList';

export default function Character({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const router = useRouter();

  const navigateBack = useCallback(() => {
    router.back();
  }, [router]);

  const {
    data: characterData,
    error: characterError,
    refetchData: refetchCustomerListData,
    isLoading: isLoadingCharacter,
  } = GetCharacter({
    id,
  });

  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const [dataIndex, setDataIndex] = useState(0);

  useEffect(
    function showName() {
      if (!characterData?.name) {
        return;
      }

      if (index < characterData?.name.length) {
        const timeout = setTimeout(() => {
          setTypedText((prev) => prev + characterData?.name.charAt(index));
          setIndex((prev) => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
      }
    },
    [characterData?.name, index],
  );

  useEffect(
    function showRestOfData() {
      if (characterData && index < characterData?.name?.length) {
        return;
      }

      if (dataIndex < 4) {
        const timeout = setTimeout(() => {
          setDataIndex((prev) => prev + 1);
        }, 300);
        return () => clearTimeout(timeout);
      }
    },
    [characterData, characterData?.name, dataIndex, index],
  );

  useEffect(
    function onChangeWithPageParams() {
      refetchCustomerListData();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id],
  );

  useEffect(
    function clearChace() {
      return () => {
        setIndex(0);
        setTypedText('');
        setDataIndex(0);
      };
    },

    [],
  );

  const Empty = useCallback(
    () => (
      <p>
        <span className="text-gray-500 text-2xl">{`Subject not found`}</span>
      </p>
    ),
    [],
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-amber-100 font-sans">
      <main className="flex min-h-screen w-full max-w-6xl flex-col px-5 py-5 sm:px-16 bg-transparent gap-1.5">
        <div
          onClick={navigateBack}
          className="text-gray-800 hover:text-gray-500 active:text-gray-400 disabled:text-gray-500"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Back</span>
        </div>

        <p>
          <span className="text-gray-500 text-2xl">{`Subject `}</span>
          <span className="text-gray-900 text-2xl font-bold">{`#${id}`}</span>
        </p>

        {characterError ? <Empty /> : null}

        {!isLoadingCharacter && characterData ? (
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3">
              <Image
                className="border-white border-8 border-b-20"
                src={characterData.image}
                alt={`Individual ID ${characterData.id} Image`}
                width={180}
                height={180}
                priority
              />

              <div className="w-full py-6 px-4 bg-white shadow">
                <ItemDetail label="Name" value={typedText} />
                {dataIndex > 0 ? (
                  <ItemDetail label="Gender" value={characterData.gender} />
                ) : null}
                {dataIndex > 1 ? (
                  <ItemDetail label="Species" value={characterData.species} />
                ) : null}
                {dataIndex > 2 ? (
                  <ItemDetail
                    label="Origin"
                    value={characterData.location.name}
                  />
                ) : null}
                {dataIndex > 3 ? (
                  <p>
                    <span className="text-gray-500 text-lg">{`Status: `}</span>
                    <br className="flex sm:hidden" />
                    <span
                      className={`text-lg font-bold ${characterData.status.toLowerCase() === 'alive' && 'text-green-400'} ${characterData.status.toLowerCase() === 'dead' && 'text-red-400'} text-gray-900`}
                    >
                      {characterData.status}
                    </span>
                  </p>
                ) : null}
              </div>
            </div>
            {dataIndex > 3 ? (
              <div className="flex flex-col gap-2 py-6 px-4 bg-white shadow">
                <span className="text-gray-500 text-lg">{`Subject Sighting`}</span>
                <ItemEpisodeList episodes={characterData.episode} />
              </div>
            ) : null}
          </div>
        ) : null}
      </main>
    </div>
  );
}
