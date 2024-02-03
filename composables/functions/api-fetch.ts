import type { State, VResponse } from "~/type/response/server_response";
import apiPath from "./api-path";

export async function apiFetch<T>(
  url: string,
  opts?: {
    baseUrl?: string;
    mode?: RequestMode;
    headers?: HeadersInit;
    body?: BodyInit | Record<string, any> | null | undefined;
    method?: "GET" | "POST" | "PUT" | "DELETE" | undefined;
  }
): Promise<State<T>> {
  const baseUrl = opts?.baseUrl ?? apiPath().serverUrl;
  try {
    const req: VResponse<T> = await $fetch(url, {
      baseURL: baseUrl,
      mode: opts?.mode,
      headers: opts?.headers,
      body: opts?.body,
      method: opts?.method,
    });
    return {
      loading: false,
      meta: req.meta,
      data: req.data,
      message: req.messages,
    };
  } catch (error) {
    try {
      const err: VResponse<T> = (error as any).response._data;
      return {
        loading: false,
        meta: err.meta,
        data: undefined,
        error: err.messages,
      };
    } catch (erv) {
      console.log(erv);

      return {
        loading: false,
        meta: undefined,
        data: undefined,
        error: `${erv}`,
      };
    }
  }
}
