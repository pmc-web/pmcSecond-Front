import { useForm } from 'react-hook-form';
// doc사이트 https://react-hook-form.com/get-started
type FormData = {
  id: string;
  pw: string;
  name: string;
};

const SampleHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('id', { required: true })} defaultValue="test" />
      <input {...register('pw', { required: true })} />
      <input {...register('name', { required: true })} />
      {/* {errors && <span>This field is required</span>} */}
      <button type="submit">전송하기</button>
    </form>
  );
};

export default SampleHookForm;
