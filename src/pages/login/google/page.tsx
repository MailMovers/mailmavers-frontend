'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function googleLoginpage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const accessToken = searchParams.get('accessToken');
  const refreshToken = searchParams.get('refreshToken');

  useEffect(() => {
    if (!accessToken || !refreshToken) {
      return;
    }

    localStorage.setItem('accessToken', accessToken || '');
    localStorage.setItem('refreshToken', refreshToken || '');
    router.push('/');
  }, [accessToken, refreshToken, router]);

  return <div>Loading...</div>;
}
