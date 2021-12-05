"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let EmpresaAvgOrderByAggregateInput = class EmpresaAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaAvgOrderByAggregateInput.prototype, "numeroEmpleados", void 0);
EmpresaAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EmpresaAvgOrderByAggregateInput", {
        isAbstract: true
    })
], EmpresaAvgOrderByAggregateInput);
exports.EmpresaAvgOrderByAggregateInput = EmpresaAvgOrderByAggregateInput;
