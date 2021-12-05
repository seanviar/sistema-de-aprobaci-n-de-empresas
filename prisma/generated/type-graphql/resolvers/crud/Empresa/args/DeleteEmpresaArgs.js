"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEmpresaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaWhereUniqueInput_1 = require("../../../inputs/EmpresaWhereUniqueInput");
let DeleteEmpresaArgs = class DeleteEmpresaArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaWhereUniqueInput_1.EmpresaWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaWhereUniqueInput_1.EmpresaWhereUniqueInput)
], DeleteEmpresaArgs.prototype, "where", void 0);
DeleteEmpresaArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteEmpresaArgs);
exports.DeleteEmpresaArgs = DeleteEmpresaArgs;
