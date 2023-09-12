import { Card, CardBody, Divider } from "@nextui-org/react";
import MainInputFields from "./components/MainInputFields";
import AdditionalInputFields from "./components/AdditionalInputFields";
import useCreateShortUrl from "./hooks/useCreateShortUrl";
import { useForm } from "react-hook-form";

export default function ShorteningServicePanel() {
  const { createShortUrl, isLoading } = useCreateShortUrl();
  const { handleSubmit } = useForm();

  const submitForm = () => {
    const url = "https://google.com";

    createShortUrl(url);
  };

  return (
    <Card classNames={{ base: "shrink-0 md:w-2/5" }}>
      <CardBody>
        <form onSubmit={handleSubmit(submitForm)}>
          <MainInputFields isLoading={isLoading} />
          <Divider className="my-5" />
          <AdditionalInputFields />
        </form>
      </CardBody>
    </Card>
  );
}
