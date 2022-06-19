export interface LoginResponseData {
  id: string;
  message: string;
  userName: string;
  email: string;
  roles: string[];
  isAuthenticated: boolean;
  isVerified: boolean;
  jwtToken: string;
  profileUrl:string;
  refreshToken: string;
  refreshTokenExpiration: string;
  organizationId: string;
}
