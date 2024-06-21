export class ResponseDTO {
    constructor(
        public message: string,
        public error: string,
        public statusCode: number,
    ) {}
}