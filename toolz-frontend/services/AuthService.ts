import { AuthResponseDTO } from "@/dtos/AuthResponseDTO";

export interface AuthService {
    login(username: string, password: string): Promise<AuthResponseDTO>;
}