import type { Product } from "~/type/model/product";
import type { State } from "~/type/response/server_response";
const useProductsStore = defineStore("products-store-data", () => {
  const { serverUrl } = apiPath();
  const productState = ref<State<Product[] | undefined>>({
    loading: true,
    data: undefined,
    error: undefined,
    message: undefined,
    meta: undefined,
  });
  const page = ref(1);

  const fetchData = async () => {
    productState.value.loading = true;
    const val = await apiFetch<Product[]>(
      `/product?limit=12&page=${page.value}`,
      {
        method: "GET",
        baseUrl: serverUrl,
      }
    );
    console.log(val, productState.value);
    productState.value = {
      ...val,
    };
  };

  watch(page, fetchData);
  return {
    productState,
    page,
    fetchData,
  };
});

export default useProductsStore;
