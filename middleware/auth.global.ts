export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuthStore();
  const include = ["/cart", "/checkout", "/profile"];

  const routesIsProtected = include.includes(to.path);
  console.log("routesIsProtected", routesIsProtected);

  const routeIsAuth = ["/login", "/register"].includes(to.path);
  await auth.refresh();
  const val = await auth.profile();
  console.log(to.path);

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
