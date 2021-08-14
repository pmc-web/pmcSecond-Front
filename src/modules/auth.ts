import axios from 'axios';

import { useMutation, useQuery } from 'react-query';
import { addressType, loginTypes, userTypes } from 'src/interfaces/auth';

const signUpKey = () => ['auth', 'signup'];
const loginKey = () => ['auth', 'login'];
const userKey = () => ['auth', 'user'];
const addAddressKey = () => ['auth', 'addAddress'];
const addressListKey = () => ['auth', 'addressList'];
const deleteAddressKey = () => ['auth', 'deleteAddress'];

export const getSignUpApi = async (data: loginTypes) => {
  axios.defaults.baseURL = `${process.env.API_URL}:8086`;
  const res = await axios.post(`users/sign-up`, data);
  return res.data;
};
export const useSignUpMutation = () => useMutation(signUpKey(), getSignUpApi);

const getLoginApi = async (data: loginTypes) => {
  const res = await axios.post(`/users/login`, data);
  console.log(res);
  return res.data.data;
};
export const useLoginMutation = () => useMutation(loginKey(), getLoginApi);

// 유저 정보 가져오기
const getUserApi = async (data: userTypes) => {
  const res = await axios.get(`/users/${data.id}`);
  console.log(res);
  return res.data.data;
};
export const useUserDataMutation = () => useMutation(userKey(), getUserApi);

// 배송지 목록
const getAddressListApi = async (data: userTypes) => {
  const res = await axios.get(`/users/${data.id}/address`);
  return res.data.data;
};
export const useGetAdressList = () => useMutation(addressListKey(), getAddressListApi);
// 배송지 등록
const addAddressApi = async (data: addressType) => {
  const res = await axios.post(`/users/${data.id}/address`, data);
  return res.data.data;
};
export const useAddAdress = () => useMutation(addAddressKey(), addAddressApi);
// 배송지 삭제
const deleteAddressApi = async (data: { id: number; addresId: number }) => {
  const res = await axios.delete(`/users/${data.id}/address/${data.addresId}`);
  return res.data.data;
};
export const useDeletAdress = () => useMutation(deleteAddressKey(), deleteAddressApi);
