import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { loginTypes } from 'src/interfaces/auth';

export const getSignUpApi = async (data: loginTypes) => {
  const res = await axios.post('http://101.101.209.211/users/sign-up', data);
  return res.data;
};

export const useSignUpMutation = () => useMutation(['auth', 'signup'], getSignUpApi);

const getLoginApi = async (data: loginTypes) => {
  const res = await axios.post('http://101.101.209.211/users/login', data);
  return res.data.data;
};

export const useLoginMutation = () => useMutation(['auth', 'login'], getLoginApi);

export const useUserDataQuery = () => useQuery(['auth', 'user']);
