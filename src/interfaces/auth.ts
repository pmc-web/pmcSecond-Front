export type loginTypes = {
  email: string;
  password: string;
};

export type userTypes = {
  id: number;
};

export type addressType = {
  id: number;
  addressName: string;
  address: string;
  detail: string;
  isDefault: boolean;
  zipCode: string;
};
