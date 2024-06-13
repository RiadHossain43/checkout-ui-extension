import type {
  RunInput,
  FunctionRunResult,
  Target,
  ProductVariant,
} from "../generated/api";
import { DiscountApplicationStrategy } from "../generated/api";

const EMPTY_DISCOUNT: FunctionRunResult = {
  discountApplicationStrategy: DiscountApplicationStrategy.First,
  discounts: [],
};

export function run(input: RunInput): FunctionRunResult {
  const targets: Target[] = input.cart.lines
    .filter((line) => {
      if (line.merchandise.__typename === "ProductVariant") {
        return !line.merchandise.product.inAnyCollection;
      }
    })
    .map((line) => {
      return {
        productVariant: {
          id: (line.merchandise as ProductVariant).id,
        },
      };
    });
  const DISCOUNT: FunctionRunResult = {
    discountApplicationStrategy: DiscountApplicationStrategy.First,
    discounts: [
      {
        targets: targets,
        value: {
          percentage: {
            value: 10,
          },
        },
        message: "10% off",
      },
    ],
  };
  return targets.length ? DISCOUNT : EMPTY_DISCOUNT;
}
