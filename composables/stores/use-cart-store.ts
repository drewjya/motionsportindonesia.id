import type { Cart } from "~/type/model/product";
import type { State } from "~/type/response/server_response";

export const useCartStore = defineStore("cart-store", () => {
  const { serverUrl } = apiPath();
  const { getAuthorization } = useAuthStore();
  const cartState = ref<State<Cart[] | undefined>>({
    loading: true,
    data: undefined,
    error: undefined,
    message: undefined,
    meta: undefined,
  });

  const fetchCart = async () => {
    cartState.value.loading = true;
    cartState.value = await apiFetch<Cart[] | undefined>(serverUrl + "/cart", {
      headers: getAuthorization(),
    });
  };
  return {
    fetchCart,
    cartState,
  };
});
