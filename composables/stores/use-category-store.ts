import apiPath from "../functions/api-path";

const useCategoryStore = defineStore("categories", () => {
  const { serverUrl } = apiPath();

  const data = async () => {
    const response = await $fetch(`/category?limit=50&page=1`, {
      method: "GET",
      baseURL: serverUrl,
    });

    console.log(response);
  };
  return {
    data,
  };
});

export default useCategoryStore;
