import axios from "axios";
import { useMutation } from "react-query";

const useCreateShortUrl = () => {
  type urlOptions = { access_code?: string; expires_in?: number };

  const mutation = useMutation({
    mutationFn: async (url: string, options?: urlOptions) => {
      const res = await axios.post("/api/ping", {
        short_url: url,
        ...options,
      });
      console.log(res.data);
      return res;
    },
  });

  return { ...mutation, createShortUrl: mutation.mutate };
};

export default useCreateShortUrl;
