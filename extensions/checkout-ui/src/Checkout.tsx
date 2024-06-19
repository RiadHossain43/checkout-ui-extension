import {
  Banner,
  reactExtension,
  useAppMetafields,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension(
  "purchase.checkout.reductions.render-after",
  () => <Extension />,
);

const allowDiscountFor = ["loyal", "vip"];

function Extension() {
  const appmetaFields = useAppMetafields({
    type: "customer",
  });
  let customerMetaField = appmetaFields.find((item) => {
    return (
      item.metafield.namespace === "custom" &&
      item.metafield.key === "customer_type"
    );
  });
  let customerType: string = String(customerMetaField?.metafield?.value) || "";
  if (allowDiscountFor.includes(customerType)) {
    return (
      <Banner title="Apply 'CODE_X' to get a 30% discount. Only available for our 'VIP' and 'Loyal' customers"></Banner>
    );
  }
}
