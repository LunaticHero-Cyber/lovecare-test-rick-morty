'use client';

import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { Character } from '@/interfaces/Character';
import { CharacterGender } from '@/interfaces/CharacterGender';
import { CharacterStatus } from '@/interfaces/CharacterStatus';
import getObjectToQueryParams from '@/utlis/getObjectToQueryParams';

import CharacterItem from './_components/CharacterItem';
import FilterBar from './_components/FilterBar';
import PageNav from './_components/PageNav';

type Props = {
  page: string;
  status?: CharacterStatus;
  gender?: CharacterGender;
  name?: string;
  characterList?: Character[];
  characterError?: AxiosError;
};

const CharacterGridList = ({
  page: paramPage,
  status: paramStatus,
  gender: paramGender,
  name: paramName,
  characterList,
  characterError,
}: Props) => {
  const router = useRouter();

  const pushNewRouter = useCallback(
    (queryObj: Record<string, string | undefined>) => {
      router.push(getObjectToQueryParams(queryObj));
    },
    [router],
  );

  const navigateBack = useCallback(() => {
    const newPage = (Number(paramPage) - 1).toString();
    pushNewRouter({
      page: newPage,
      status: paramStatus,
      gender: paramGender,
      name: paramName,
    });
  }, [paramGender, paramName, paramPage, paramStatus, pushNewRouter]);

  const navigateNext = useCallback(() => {
    const newPage = (Number(paramPage) + 1).toString();
    pushNewRouter({
      page: newPage,
      status: paramStatus,
      gender: paramGender,
      name: paramName,
    });
  }, [paramGender, paramName, paramPage, paramStatus, pushNewRouter]);

  const setStatus = useCallback(
    (status?: CharacterStatus) => {
      pushNewRouter({
        page: '1',
        status: status,
        gender: paramGender,
        name: '',
      });
    },
    [paramGender, pushNewRouter],
  );

  const setGender = useCallback(
    (gender?: CharacterGender) => {
      pushNewRouter({
        page: '1',
        status: paramStatus,
        gender: gender,
        name: '',
      });
    },
    [paramStatus, pushNewRouter],
  );

  const onSearch = useCallback(
    (nameSearch?: string) => {
      pushNewRouter({
        page: '1',
        status: paramStatus,
        gender: paramGender,
        name: nameSearch,
      });
    },
    [paramGender, paramStatus, pushNewRouter],
  );

  return (
    <div className="flex flex-col gap-3">
      <FilterBar
        selectedStatus={paramStatus}
        setSelectedStatus={setStatus}
        selectedGender={paramGender}
        setSelectedGender={setGender}
        nameSearch={paramName}
        onSearch={onSearch}
      />

      {characterError?.code === 'ERR_BAD_REQUEST' ? (
        <div className="flex flex-col gap-3">
          <span className="text-gray-800">
            Ouch! No character with this query found.
          </span>
        </div>
      ) : null}

      {!characterError?.code && characterList?.length ? (
        <>
          <PageNav
            navigateBack={navigateBack}
            navigateNext={navigateNext}
            paramPage={paramPage}
          />
          <div className="grid grow grid-cols-4 gap-5">
            {characterList?.map((character) => (
              <CharacterItem key={character.id} item={character} />
            ))}
          </div>
          <PageNav
            navigateBack={navigateBack}
            navigateNext={navigateNext}
            paramPage={paramPage}
          />
        </>
      ) : null}
    </div>
  );
};

export default CharacterGridList;
