"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let EmpresaSumOrderByAggregateInput = class EmpresaSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaSumOrderByAggregateInput.prototype, "numeroEmpleados", void 0);
EmpresaSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EmpresaSumOrderByAggregateInput", {
        isAbstract: true
    })
], EmpresaSumOrderByAggregateInput);
exports.EmpresaSumOrderByAggregateInput = EmpresaSumOrderByAggregateInput;
