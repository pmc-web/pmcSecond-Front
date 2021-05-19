import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { loginTypes } from 'src/interfaces/auth';

const signUpKey = () => ['auth', 'signup'];
const loginKey = () => ['auth', 'login'];
const userKey = () => ['auth', 'user'];

export const getSignUpApi = async (data: loginTypes) => {
  const res = await axios.post('http://101.101.209.211/users/sign-up', data);
  return res.data;
};

export const useSignUpMutation = () => useMutation(signUpKey(), getSignUpApi);

const getLoginApi = async (data: loginTypes) => {
  const res = await axios.post('http://101.101.209.211/users/login', data);
  return res.data.data;
};

export const useLoginMutation = () => useMutation(loginKey(), getLoginApi);

const getUserApi = () => {
  // todo
  console.log('유저 api');
};

export const useUserDataQuery = () => useQuery(userKey(), getUserApi);
