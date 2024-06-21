import { AuthService } from "./AuthService";
import { AuthServiceImpl } from "./AuthServiceImpl";

export function useAuthService(): AuthService {
    return new AuthServiceImpl("http://localhost:8080");
}