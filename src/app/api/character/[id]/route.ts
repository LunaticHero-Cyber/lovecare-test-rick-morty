import { AxiosResponse, isAxiosError } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

import axiosInstance from '@/config/server/axios';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const searchParams = req.url.split('?');

  let url = `/character/${params.id}`;

  if (searchParams.length === 2) {
    url = url + '?' + searchParams[1];
  }

  try {
    const apiResponse: AxiosResponse = await axiosInstance.get(url);

    const res = NextResponse.json(apiResponse.data, {
      status: apiResponse.status,
    });

    return res;
  } catch (error) {
    if (isAxiosError(error)) {
      return NextResponse.json(error.response?.data, {
        status: error.response?.status,
      });
    }
  }
}
