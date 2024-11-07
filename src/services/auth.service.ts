import axios from "axios";
import { ref } from "vue";

const isAuthenticated = ref(localStorage.getItem("token") !== null);

const useAuth = () => {
    const login = async (email: string, password: string) => {
        try {
            const response = await axios.post<{ token: string }>("https://code-coaching.dev/api/token/login", {
                email: email,
                password: password
            });
            const token = response.data.token;
            localStorage.setItem("token", token);
            isAuthenticated.value = true;
        } catch (error) {
            throw new Error(`computer says no: ${error}`);
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        isAuthenticated.value = false;
    }

    return {
        login,
        logout,
        isAuthenticated
    }
}

export { useAuth }