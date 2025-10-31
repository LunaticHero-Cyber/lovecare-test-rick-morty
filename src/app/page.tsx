'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import GetCharacterList from '@/hooks/getCharacterList';
import { CharacterGender } from '@/interfaces/CharacterGender';
import { CharacterStatus } from '@/interfaces/CharacterStatus';

import CharacterGridList from './_components/CharacterGridList';

export default function Home() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const page = searchParams.get('page') || '1';
  const status = (searchParams.get('status') as CharacterStatus) || undefined;
  const gender = (searchParams.get('gender') as CharacterGender) || undefined;
  const name = (searchParams.get('name') as string) || undefined;

  const {
    data: characterListData,
    error: characterError,
    refetchData: refetchCustomerListData,
    isLoading: isLoadingCharacterList,
  } = GetCharacterList({
    page: page,
    status: status,
    gender: gender,
    name: name,
  });

  useEffect(
    function validatePage() {
      if (Number.isNaN(Number(page)) || Number(page) < 1) {
        router.push(`?page=1`);
      }
    },
    [page, router],
  );

  useEffect(
    function onChangeWithPageParams() {
      refetchCustomerListData();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [page, status, gender, name],
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-300 font-sans">
      <main className="flex min-h-screen w-full max-w-6xl flex-col px-5 py-5 sm:px-16 bg-transparent">
        <CharacterGridList
          characterList={characterListData?.results}
          isLoadingCharacterList={isLoadingCharacterList}
          characterError={characterError}
          page={page}
          status={status}
          gender={gender}
          name={name}
        />
      </main>
    </div>
  );
}
