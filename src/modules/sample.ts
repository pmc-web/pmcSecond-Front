import axios from 'axios';
import { useQuery, useMutation } from 'react-query';

export const useSampleQuery = (page: number) =>
  useQuery(['sample', 'query'], ({ queryKey }) => axios.get(`/?page=${page}`));

export const useSampleMutation = (options?: any) => useMutation((data: any) => axios.post('/test', data));
