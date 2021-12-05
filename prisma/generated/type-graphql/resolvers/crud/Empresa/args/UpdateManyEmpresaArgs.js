"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyEmpresaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaUpdateManyMutationInput_1 = require("../../../inputs/EmpresaUpdateManyMutationInput");
const EmpresaWhereInput_1 = require("../../../inputs/EmpresaWhereInput");
let UpdateManyEmpresaArgs = class UpdateManyEmpresaArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaUpdateManyMutationInput_1.EmpresaUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaUpdateManyMutationInput_1.EmpresaUpdateManyMutationInput)
], UpdateManyEmpresaArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaWhereInput_1.EmpresaWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaWhereInput_1.EmpresaWhereInput)
], UpdateManyEmpresaArgs.prototype, "where", void 0);
UpdateManyEmpresaArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyEmpresaArgs);
exports.UpdateManyEmpresaArgs = UpdateManyEmpresaArgs;
