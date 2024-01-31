import useEnv from "./use-env";

export default function () {
  const serverUrl = useEnv().SERVER_URL;
  return {
    serverUrl,
  };
}
