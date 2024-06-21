import { useAuthService } from "@/services/useAuthService";
import { useState } from "react";

export default function useLoginViewModel() {
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
        error: false,
        success: false
    });
    const authService = useAuthService();
    const login = async () => {
        const response = await authService.login(loginData.username, loginData.password);
        if(response.statusCode > 299) {
            setLoginData(old => ({
                ...old,
                error: true,
                success: false
            }));
            return;
        }
        setLoginData(old => ({
            ...old,
            error: false,
            success: true
        }));
    }
    const setUsername = (username: string) => {
        setLoginData(old => ({
            ...old,
            username
        }));
    }
    const setPassword = (password: string) => {
        setLoginData(old => ({
            ...old,
            password
        }));
    }
    const toggleSuccess = () => {
        setLoginData(old => ({
            ...old,
            success: false
        }));
    }
    const setError = (data: boolean) =>  {
        setLoginData(old => ({
            ...old,
            error: data
        }))
    }
    return {
        username: loginData.username,
        password: loginData.password,
        login,
        setPassword,
        setUsername,
        error: loginData.error,
        success: loginData.success,
        toggleSuccess,
        setError
    }
}