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

  const shippingAddress = useShippingAddress();
  const customer = useCustomer();

  return null
  return (
    <Banner title="Hurrah!! We have special discounts for you.">
      <Button>Apply Dicount</Button>
    </Banner>
  );
}
