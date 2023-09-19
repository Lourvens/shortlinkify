import axios from "axios";
import { useMutation } from "react-query";
import _ from "lodash";

const useCreateShortUrl = () => {
  type urlOptions = {
    url: string;
    access_code?: string;
    expires_in?: number;
  };

  const mutation = useMutation({
    mutationFn: async (urlData: urlOptions) => {
      // remove all nullish items
      const filteredUrlData = _.pickBy(urlData, (value) => Boolean(value));
      const res = await axios.post("/api/url", filteredUrlData);
      return res.data;
    },
  });

  return { ...mutation, createShortUrl: mutation.mutate };
};

export default useCreateShortUrl;
