"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyEmpresaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaOrderByWithRelationInput_1 = require("../../../inputs/EmpresaOrderByWithRelationInput");
const EmpresaWhereInput_1 = require("../../../inputs/EmpresaWhereInput");
const EmpresaWhereUniqueInput_1 = require("../../../inputs/EmpresaWhereUniqueInput");
const EmpresaScalarFieldEnum_1 = require("../../../../enums/EmpresaScalarFieldEnum");
let FindManyEmpresaArgs = class FindManyEmpresaArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaWhereInput_1.EmpresaWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaWhereInput_1.EmpresaWhereInput)
], FindManyEmpresaArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [EmpresaOrderByWithRelationInput_1.EmpresaOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyEmpresaArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaWhereUniqueInput_1.EmpresaWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaWhereUniqueInput_1.EmpresaWhereUniqueInput)
], FindManyEmpresaArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyEmpresaArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyEmpresaArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [EmpresaScalarFieldEnum_1.EmpresaScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyEmpresaArgs.prototype, "distinct", void 0);
FindManyEmpresaArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindManyEmpresaArgs);
exports.FindManyEmpresaArgs = FindManyEmpresaArgs;
