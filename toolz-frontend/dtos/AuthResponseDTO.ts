export class AuthResponseDTO {
    constructor(
        public message: string,
        public error: string,
        public statusCode: number
    ) {}
}