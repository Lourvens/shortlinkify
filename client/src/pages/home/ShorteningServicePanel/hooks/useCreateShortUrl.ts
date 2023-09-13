import axios from "axios";
import { useMutation } from "react-query";

const useCreateShortUrl = () => {
  type urlOptions = {
    long_url: string;
    access_code?: string;
    expires_in?: number;
  };

  const mutation = useMutation({
    mutationFn: async (urlData: urlOptions) => {
      const res = await axios.post("/api/url", urlData);

      return res.data;
    },
  });

  return { ...mutation, createShortUrl: mutation.mutate };
};

export default useCreateShortUrl;
