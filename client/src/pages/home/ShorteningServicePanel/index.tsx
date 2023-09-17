import { Card, CardBody, Divider } from "@nextui-org/react";
import MainInputFields from "./components/MainInputFields";
import AdditionalInputFields from "./components/AdditionalInputFields";
import useCreateShortUrl from "./hooks/useCreateShortUrl";
import { UrlSchemaForm } from "./hooks/formContext";
import { FormProvider } from "./components/FormProvider";

export default function ShorteningServicePanel() {
  const { isLoading, createShortUrl } = useCreateShortUrl();

  const submitForm = (data: UrlSchemaForm) => {
    createShortUrl(data);
  };

  return (
    <Card classNames={{ base: "shrink-0 md:w-2/5" }}>
      <CardBody>
        <FormProvider onSubmit={submitForm}>
          <MainInputFields isLoading={isLoading} />
          <Divider className="my-5" />
          <AdditionalInputFields />
        </FormProvider>
      </CardBody>
    </Card>
  );
}
