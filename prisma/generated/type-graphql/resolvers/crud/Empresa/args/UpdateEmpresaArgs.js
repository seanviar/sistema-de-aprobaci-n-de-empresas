"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmpresaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaUpdateInput_1 = require("../../../inputs/EmpresaUpdateInput");
const EmpresaWhereUniqueInput_1 = require("../../../inputs/EmpresaWhereUniqueInput");
let UpdateEmpresaArgs = class UpdateEmpresaArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaUpdateInput_1.EmpresaUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaUpdateInput_1.EmpresaUpdateInput)
], UpdateEmpresaArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaWhereUniqueInput_1.EmpresaWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaWhereUniqueInput_1.EmpresaWhereUniqueInput)
], UpdateEmpresaArgs.prototype, "where", void 0);
UpdateEmpresaArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateEmpresaArgs);
exports.UpdateEmpresaArgs = UpdateEmpresaArgs;
