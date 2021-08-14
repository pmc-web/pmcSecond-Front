import { css, Theme } from '@emotion/react';

type AddressCardItemProps = {
  title: string;
  mainAddress: string;
  detailAdress: string;
  phone: string;
  addressId: number;
  onDelete: (id: number) => void;
};

const AddressCardItem = ({ title, mainAddress, detailAdress, phone, addressId, onDelete }: AddressCardItemProps) => (
  <li css={containerCss}>
    <div className="addressTitle">
      <p>{title}</p>
      <div className="addressTitleBtn">
        <p>수정</p>
        <p>
          <span role="button" onClick={() => onDelete(addressId)} tabIndex={0}>
            삭제
          </span>
        </p>
      </div>
    </div>
    <div className="addressContent">
      <p>{mainAddress}</p>
      <p>{detailAdress}</p>
      <p>{phone}</p>
    </div>
  </li>
);

const containerCss = (theme: Theme) => css`
  border-bottom: 10px solid ${theme.color.grey020};
  > .addressTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 1.875em;
    border-bottom: 1px solid ${theme.color.grey030};
    > p {
      ${theme.fontSize.body1}
      color:${theme.color.black};
    }
    > .addressTitleBtn {
      ${theme.commonStyle.flexCenter}
      > p {
        ${theme.fontSize.body2}
        color: ${theme.color.grey050};
      }
      > p:nth-child(2) {
        margin-left: 1.875em;
      }
    }
  }
  > .addressContent {
    padding: 20px 1.875em;
    p {
      ${theme.fontSize.body2}
      color: ${theme.color.black};
    }
    p:nth-child(2) {
      ${theme.fontSize.caption1}
      color: ${theme.color.grey040};
      margin-bottom: 20px;
    }
  }
`;

export default AddressCardItem;
