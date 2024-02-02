import type { Product } from "~/type/model/product";
import type { State } from "~/type/response/server_response";

export const useProductDetailStore = (id: number) =>
  defineStore("product-detail-store-data" + id.toString(), () => {
    const { serverUrl } = apiPath();
    const { getAuthorization } = useAuthStore();
    const productState = ref<State<Product | undefined>>({
      loading: true,
      data: undefined,
      error: undefined,
      message: undefined,
      meta: undefined,
    });

    const fetchData = async () => {
      productState.value.loading = true;
      const val = await apiFetch<Product>(`/product/${id}`, {
        method: "GET",
        baseUrl: serverUrl,
      });
      console.log(val, productState.value);
      productState.value = {
        ...val,
      };
    };

    const postCart = async (quantity: number) => {
      productState.value.loading = true;
      const val = await apiFetch<Product>(`/cart`, {
        method: "POST",
        baseUrl: serverUrl,
        headers: getAuthorization(),
        body: {
          productId: id,
          quantity: quantity,
        },
      });
    };

    return {
      productState,
      fetchData,
      postCart,
    };
  });
