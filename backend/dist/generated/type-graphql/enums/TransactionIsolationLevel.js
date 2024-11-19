import * as TypeGraphQL from "type-graphql";
export var TransactionIsolationLevel;
(function (TransactionIsolationLevel) {
    TransactionIsolationLevel["ReadUncommitted"] = "ReadUncommitted";
    TransactionIsolationLevel["ReadCommitted"] = "ReadCommitted";
    TransactionIsolationLevel["RepeatableRead"] = "RepeatableRead";
    TransactionIsolationLevel["Serializable"] = "Serializable";
})(TransactionIsolationLevel || (TransactionIsolationLevel = {}));
TypeGraphQL.registerEnumType(TransactionIsolationLevel, {
    name: "TransactionIsolationLevel",
    description: undefined,
});
//# sourceMappingURL=TransactionIsolationLevel.js.map