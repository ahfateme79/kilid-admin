export interface IUserRequest {
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: IAdressResponse;
  phone: string;
}

export interface IUserResponse extends IUserRequest {
  id: number;

  // client properties
  roll?: string;
  is_active?: boolean;
}

export interface IAdressResponse {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: {
    lat: string;
    long: string;
  };
}

export interface ICompanyResponse {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface ISubscriberResponse {
  id: number;
  email: string;
  email_verified_at: string;
  mobile: string;
  type: string;
  is_active: boolean;
  is_new: boolean;
  is_verified: boolean;
}
