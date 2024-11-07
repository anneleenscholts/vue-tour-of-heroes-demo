import axios from "axios";

const useAuth = () => {
    const login = async (email: string, password: string) => {
        const response = await axios.post<{ token: string }>("https://code-coaching.dev/api/token/login", {
            email: email,
            password: password
        });
        const token = response.data.token;
        localStorage.setItem("token", token);
    }

    return {
        login
    }
}

export { useAuth }