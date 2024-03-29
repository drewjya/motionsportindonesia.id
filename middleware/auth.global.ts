import type { User } from "~/type/model/user";
import type { State } from "~/type/response/server_response";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuthStore();
  const include = ["/cart", "/checkout", "/profile"];

  const routesIsProtected = include.includes(to.path);

  const routeIsAuth = ["/login", "/signup"].includes(to.path);
  const bol = await auth.refresh();
  console.log("START++++========");

  console.log(bol);

  let val: State<User | undefined> = {
    loading: true,
    data: undefined,
    error: undefined,
    message: undefined,
    meta: undefined,
  };

  try {
    val = await auth.profile();
  } catch (error) {
    val.error = `${JSON.stringify(error)}`;
  }
  console.log(val, routeIsAuth);
  console.log("END++++========");
  if (val.error !== undefined) {
    if (routesIsProtected) {
      return navigateTo("/login");
    }
    if (routeIsAuth) {
      return;
    }
    return;
  } else {
    console.log("NOT ERROR");

    if (routeIsAuth) {
      return navigateTo("/");
    }
  }

  return;
});
