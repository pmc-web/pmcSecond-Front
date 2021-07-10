import { useForm } from 'react-hook-form';
import Container from 'src/components/common/layout/Container';
import Layout from 'src/components/common/layout/Layout';
import Input from 'src/components/common/Input';
import Text from 'src/components/common/Text';
import Button from 'src/components/common/Button';
import { css } from '@emotion/react';

type FormData = {
  name?: string;
  url?: string;
  address?: string;
  addressDetail?: string;
  bankAccount?: string;
  shopRegistFile?: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });
  return (
    <Layout leftIcon="leftArrow" title="판매자 등록">
      <Container>
        <div css={marginTop}>
          <Text.Title level={3} size="h1">
            판매자 등록을 위해 아래 정보 입력이 필요합니다.
          </Text.Title>
        </div>
        <div css={inlineCss}>
          <Input
            required
            label="쇼핑몰 이름*"
            name="name"
            setValue={setValue}
            valid={!getValues('name') ? 'null' : 'success'}
            register={register}
            placeholder="쇼핑몰 이름을 입력해주세요."
          />
          <Button htmlType="button" type="primary">
            중복확인
          </Button>
        </div>
        <div css={inlineCss}>
          <Input
            required
            label="쇼핑몰 URL"
            name="url"
            setValue={setValue}
            valid={!getValues('url') ? 'null' : 'success'}
            register={register}
            placeholder="쇼핑몰 주소를 입력해주세요."
          />
        </div>
        <div>
          <div css={inlineCss}>
            <Input
              required
              label="주소*"
              name="address"
              setValue={setValue}
              valid={!getValues('address') ? 'null' : 'success'}
              register={register}
              placeholder="주소지를 검색해주세요."
            />
            <Button htmlType="button" type="primary">
              중복확인
            </Button>
          </div>
          <Input
            required
            name="addressDetail"
            setValue={setValue}
            valid={!getValues('addressDetail') ? 'null' : 'success'}
            register={register}
            placeholder="상세 주소를 입력해주세요."
          />
        </div>
        <div css={inlineCss}>
          <Input
            required
            label="계좌번호*"
            name="bankAccount"
            setValue={setValue}
            valid={!getValues('bankAccount') ? 'null' : 'success'}
            register={register}
            placeholder="무통장입금을 위한 계좌번호를 입력해주세요."
          />
        </div>
        <div css={inlineCss}>
          <Input
            required
            label="사업자등록증"
            name="shopRegistFile"
            setValue={setValue}
            valid={!getValues('shopRegistFile') ? 'null' : 'success'}
            register={register}
            placeholder="이미지 파일을 업로드해주세요."
          />
          <Button htmlType="button" type="primary">
            업로드
          </Button>
        </div>
      </Container>
      <Button style={marginTop} htmlType="button" type="primary" size="large">
        판매자 등록하기
      </Button>
    </Layout>
  );
};

export default Register;

const inlineCss = css`
  display: flex;
  align-items: flex-end;
  margin-top: 1.875rem;
  width: 100%;
  & > div {
    flex: 2;
    margin-right: 0.575rem;
  }
  & > button {
    flex: 1;
    min-height: 3.3rem;
  }
`;

const marginTop = css`
  margin-top: 1.875rem;
`;
