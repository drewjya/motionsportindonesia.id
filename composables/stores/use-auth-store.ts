import type { User } from "~/type/model/user";
import type { State } from "~/type/response/server_response";

export const useAuthStore = defineStore("auth-store", () => {
  const { serverUrl } = apiPath();
  const accessCookie = useCookie<string | undefined>("access_token", {
    maxAge: 3600 * 12,
  });
  const refreshCookie = useCookie<string | undefined>("refresh_token", {
    maxAge: 3600 * 24 * 30,
  });
  const userState = ref<State<User | undefined>>({
    loading: true,
    data: undefined,
    error: undefined,
    message: undefined,
    meta: undefined,
  });

  const profile = async () => {
    userState.value = await apiFetch<any>(serverUrl + "/auth/profile", {
      headers: getAuthorization(),
    });
    return userState.value;
  };

  const getAuthorization = (): HeadersInit => {
    if (accessCookie.value) {
      return {
        Authorization: `Bearer ${accessCookie.value}`,
      };
    }

    return {};
  };

  const refresh = async () => {
    if (refreshCookie.value) {
      const val = await apiFetch<any>(serverUrl + "/auth/refresh", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${refreshCookie.value}`,
        },
      });
      accessCookie.value = val.data.access_token;
      refreshCookie.value = val.data.refresh_token;
      return true;
    }
    return false;
  };

  const login = async (password: string, email: string) => {
    userState.value.loading = true;
    const val = await apiFetch<any>(serverUrl + "/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    accessCookie.value = val.data.token.access_token;
    refreshCookie.value = val.data.token.refresh_token;

    userState.value = val;
  };

  const register = async (name: string, password: string, email: string) => {
    userState.value.loading = true;
    const val = await apiFetch<any>(serverUrl + "/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    userState.value.loading = false;
  };

  return {
    userState,
    getAuthorization,
    login,
    register,
    refresh,
    profile,
  };
});
