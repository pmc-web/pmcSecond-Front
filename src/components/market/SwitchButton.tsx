import { css, Theme } from '@emotion/react';
import Button from 'src/components/common/Button';

type SwitchButtonProps = {
  title: string;
  onText: string;
  offText: string;
  style?: ReturnType<typeof css>;
};

const SwitchButton = ({ title, onText, offText, style: switchCss }: SwitchButtonProps) => (
  <div css={[containerCss, switchCss]}>
    <p>{title}</p>
    <div>
      <Button
        htmlType="button"
        size="large"
        type="primary"
        // onClick={onRouter}
      >
        {onText}
      </Button>
      <Button
        htmlType="button"
        size="large"
        type="ghost"
        // onClick={onRouter}
      >
        {offText}
      </Button>
    </div>
  </div>
);

const containerCss = (theme: Theme) => css`
  padding-top: 30px;
  > p {
    margin-bottom: 16px;
    ${theme.fontSize.body2}
  }
  > div {
    display: flex;
    justify-content: space-between;
    > button {
      border-radius: 6px;
    }
    > button:nth-child(1) {
      margin-right: 15px;
    }
  }
`;

export default SwitchButton;
