'use client';

import axios, { AxiosError } from 'axios';
import { useCallback, useState } from 'react';

import axiosInstance from '@/config/server/axios';
import { Character } from '@/interfaces/Character';

type Param = {
  id: string;
};

export default function GetCharacter(params: Param) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Character | undefined>(undefined);
  const [error, setError] = useState<AxiosError | undefined>();

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setData(undefined);
      setError(undefined);
      const data = await axiosInstance.get<Character>(
        `/character/${params.id}`,
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
