import type {
  RunInput,
  FunctionRunResult,
  FunctionError,
} from "../generated/api";
const minimumCartCostLimit = 800;
export function run(input: RunInput): FunctionRunResult {
  const toatalAmount: number = input.cart.cost.totalAmount.amount;
  const currencyCode: string = input.cart.cost.totalAmount.currencyCode;
  const errors: FunctionError[] =
    toatalAmount < minimumCartCostLimit
      ? [
          {
            localizedMessage:
              "Not possible to order less than " +
              String(minimumCartCostLimit) +
              " " +
              String(currencyCode),
            target: "cart",
          },
        ]
      : [];
  return {
    errors,
  };
}
