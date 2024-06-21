import { AuthResponseDTO } from "@/dtos/AuthResponseDTO";
import { AuthService } from "./AuthService";

export class AuthServiceImpl implements AuthService {
    constructor(private baseUrl: string) { }
    async login(username: string, password: string): Promise<AuthResponseDTO> {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const response = await fetch(`${this.baseUrl}/auth`, {
            headers,
            body: JSON.stringify({
                username,
                password
            }),
            method: 'POST'
        });
        const data = await response.json();
        return new AuthResponseDTO(data['message'], data['error'], data['statusCode']);
    }
}