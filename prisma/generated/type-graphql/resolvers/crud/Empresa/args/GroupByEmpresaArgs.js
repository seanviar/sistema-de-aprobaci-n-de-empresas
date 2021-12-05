"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByEmpresaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaOrderByWithAggregationInput_1 = require("../../../inputs/EmpresaOrderByWithAggregationInput");
const EmpresaScalarWhereWithAggregatesInput_1 = require("../../../inputs/EmpresaScalarWhereWithAggregatesInput");
const EmpresaWhereInput_1 = require("../../../inputs/EmpresaWhereInput");
const EmpresaScalarFieldEnum_1 = require("../../../../enums/EmpresaScalarFieldEnum");
let GroupByEmpresaArgs = class GroupByEmpresaArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaWhereInput_1.EmpresaWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaWhereInput_1.EmpresaWhereInput)
], GroupByEmpresaArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [EmpresaOrderByWithAggregationInput_1.EmpresaOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByEmpresaArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [EmpresaScalarFieldEnum_1.EmpresaScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByEmpresaArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaScalarWhereWithAggregatesInput_1.EmpresaScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaScalarWhereWithAggregatesInput_1.EmpresaScalarWhereWithAggregatesInput)
], GroupByEmpresaArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByEmpresaArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByEmpresaArgs.prototype, "skip", void 0);
GroupByEmpresaArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByEmpresaArgs);
exports.GroupByEmpresaArgs = GroupByEmpresaArgs;
