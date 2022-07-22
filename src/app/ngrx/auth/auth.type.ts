export interface AuthStateType {
  isAuthenticated: boolean;
  access_token: string | null;
  token_type: string | null;
  expires_in: number | null;
}

export type LoginPayloadType = Omit<AuthStateType, 'isAuthenticated'>;

export type TokenResponseType = {
  access_token: string;
  token_type: string;
  expires_in: number;
};
