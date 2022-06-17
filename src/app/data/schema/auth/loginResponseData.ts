export interface LoginResponseData {
  id: string;
  message: string;
  userName: string;
  email: string;
  roles: string[];
  isAuthenticated: boolean;
  isVerified: boolean;
  jwtToken: string;
  refreshToken: string;
  refreshTokenExpiration: string;
}
