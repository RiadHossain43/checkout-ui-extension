import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
  Button,
  useCustomer,
  Text,
  useShippingAddress,
  useAppMetafields,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension(
  "purchase.checkout.reductions.render-after",
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const {
    extension,
  } = useApi();

  const appmetaFields = useAppMetafields()

  console.log(appmetaFields)

  return <Banner title="Apply 'CODE_X' to get a 30% discount."></Banner>;
}
