
import type { Gallery } from "~/type/model/gallery";
import type { State } from "~/type/response/server_response";
export const useGalleryStore = defineStore("gallery-store-data", () => {
  const { serverUrl } = apiPath();
  const galleryState = ref<State<Gallery[] | undefined>>({
    loading: true,
    data: undefined,
    error: undefined,
    message: undefined,
    meta: undefined,
  });
  const page = ref(1);

  const fetchData = async () => {
    galleryState.value.loading = true;
    const val = await apiFetch<Gallery[]>(
      `/gallery?limit=10&page=${page.value}`,
      {
        method: "GET",
        baseUrl: serverUrl,
      }
    );
    console.log(val, galleryState.value);
    galleryState.value = {
      ...val,
    };
  };

  watch(page, fetchData);
  return {
    galleryState,
    page,
    fetchData,
  };
});


