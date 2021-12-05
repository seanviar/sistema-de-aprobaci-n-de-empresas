"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertEmpresaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaCreateInput_1 = require("../../../inputs/EmpresaCreateInput");
const EmpresaUpdateInput_1 = require("../../../inputs/EmpresaUpdateInput");
const EmpresaWhereUniqueInput_1 = require("../../../inputs/EmpresaWhereUniqueInput");
let UpsertEmpresaArgs = class UpsertEmpresaArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaWhereUniqueInput_1.EmpresaWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaWhereUniqueInput_1.EmpresaWhereUniqueInput)
], UpsertEmpresaArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaCreateInput_1.EmpresaCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaCreateInput_1.EmpresaCreateInput)
], UpsertEmpresaArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaUpdateInput_1.EmpresaUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaUpdateInput_1.EmpresaUpdateInput)
], UpsertEmpresaArgs.prototype, "update", void 0);
UpsertEmpresaArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertEmpresaArgs);
exports.UpsertEmpresaArgs = UpsertEmpresaArgs;
