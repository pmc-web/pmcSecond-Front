import useAppSelector from '..';

const useSample = () => {
  const sample = useAppSelector((state) => state.sample);
  return sample;
};
export default useSample;
