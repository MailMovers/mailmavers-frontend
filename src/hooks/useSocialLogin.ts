import useSWR from 'swr';
import axios from 'axios';

// TODO : 사용안하는 것 같음
const useSocialLogin = (provider: string, code: string, state = null) => {
  const endpoint = provider === 'naver' ? '/social/naver' : '/social/kakao';
  const requestData = state ? { code, state } : { code };

  const { data, isValidating, error } = useSWR('/userLogin', async () => {
    const res = await axios.post(endpoint, requestData);
    return res.data;
  });

  return { data, isLoading: isValidating, error };
};

export default useSocialLogin;
