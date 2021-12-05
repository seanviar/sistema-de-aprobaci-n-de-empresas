"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEmpresaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaOrderByWithRelationInput_1 = require("../../../inputs/EmpresaOrderByWithRelationInput");
const EmpresaWhereInput_1 = require("../../../inputs/EmpresaWhereInput");
const EmpresaWhereUniqueInput_1 = require("../../../inputs/EmpresaWhereUniqueInput");
let AggregateEmpresaArgs = class AggregateEmpresaArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaWhereInput_1.EmpresaWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaWhereInput_1.EmpresaWhereInput)
], AggregateEmpresaArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [EmpresaOrderByWithRelationInput_1.EmpresaOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AggregateEmpresaArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaWhereUniqueInput_1.EmpresaWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaWhereUniqueInput_1.EmpresaWhereUniqueInput)
], AggregateEmpresaArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateEmpresaArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateEmpresaArgs.prototype, "skip", void 0);
AggregateEmpresaArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], AggregateEmpresaArgs);
exports.AggregateEmpresaArgs = AggregateEmpresaArgs;
