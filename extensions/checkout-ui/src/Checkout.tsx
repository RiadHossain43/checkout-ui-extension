import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
  Button,
  useCustomer,
  useShippingAddress,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension(
  "purchase.checkout.reductions.render-after",
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();
  return <Banner title="Apply 'CODE_X' to get a 10% discount."></Banner>;
}
