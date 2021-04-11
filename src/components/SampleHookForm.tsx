import { useForm } from 'react-hook-form';
// doc사이트 https://react-hook-form.com/get-started
const sampleHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log('에러', errors); //required, pattern 유효성검사 틀릴시
  const onSubmit = (data: Object) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('id', { required: true })} defaultValue="test" />
      <input {...register('pw', { required: true })} />
      <input {...register('name', { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <button type="submit">전송하기</button>
    </form>
  );
};

export default sampleHookForm;
