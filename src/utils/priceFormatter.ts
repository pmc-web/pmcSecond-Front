const priceFormatter = (value: number): string => {
  const result = new Intl.NumberFormat('ko-KR').format(value);
  return result;
};

export default priceFormatter;
