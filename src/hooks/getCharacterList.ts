'use client';

import { useCallback, useState } from 'react';

import axiosInstance from '@/config/server/axios';
import { CharacterGender } from '@/interfaces/CharacterGender';
import { CharacterStatus } from '@/interfaces/CharacterStatus';

import { RickMortyList } from '../interfaces/RickMortyList';
import getObjectToQueryParams from '../utlis/getObjectToQueryParams';
import axios, { AxiosError } from 'axios';

type Param = {
  page: string;
  name?: string;
  status?: CharacterStatus;
  gender?: CharacterGender;
  species?: string;
  type?: string;
};

export default function GetCharacterList(params: Param) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<RickMortyList | undefined>(undefined);
  const [error, setError] = useState<AxiosError | undefined>();

  const fetchData = useCallback(async () => {
    try {
      setData(undefined);
      setError(undefined);
      setIsLoading(true);
      const data = await axiosInstance.get<RickMortyList>(
        `/character${getObjectToQueryParams(params)}`,
      );

      setData(data.data);

      return data.data;
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        throw error;
      }

      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [params]);

  return { data, error, refetchData: fetchData, isLoading };
}
