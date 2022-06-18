export interface LoginResponseData {
  id: string;
  message: string;
  userName: string;
  email: string;
  roles: string[];
  isAuthenticated: boolean;
  isVerified: boolean;
  jwtToken: string;
<<<<<<< HEAD
=======
  profileUrl:string;
>>>>>>> f67b6de4b18d47cf20f49e81db348e3c7e7f990f
  refreshToken: string;
  refreshTokenExpiration: string;
}
