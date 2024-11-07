import { useRouter, type RouteLocation } from "vue-router";
import { useAuth } from "@/services/auth.service";

export const authenticationGuard = (_to: RouteLocation, _from: RouteLocation) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    if (isAuthenticated.value) {
        return true;
    } else {
        router.push({ name: 'login' });
        return false;
    }
}