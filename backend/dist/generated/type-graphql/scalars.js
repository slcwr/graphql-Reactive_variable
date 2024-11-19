import { Prisma } from "@prisma/client";
import { GraphQLScalarType } from "graphql";
export const DecimalJSScalar = new GraphQLScalarType({
    name: "Decimal",
    description: "GraphQL Scalar representing the Prisma.Decimal type, based on Decimal.js library.",
    serialize: (value) => {
        if (!(Prisma.Decimal.isDecimal(value))) {
            throw new Error(`[DecimalError] Invalid argument: ${Object.prototype.toString.call(value)}. Expected Prisma.Decimal.`);
        }
        return value.toString();
    },
    parseValue: (value) => {
        if (!(typeof value === "string")) {
            throw new Error(`[DecimalError] Invalid argument: ${typeof value}. Expected string.`);
        }
        return new Prisma.Decimal(value);
    },
});
//# sourceMappingURL=scalars.js.map