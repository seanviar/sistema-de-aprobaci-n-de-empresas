"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyEmpresaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaWhereInput_1 = require("../../../inputs/EmpresaWhereInput");
let DeleteManyEmpresaArgs = class DeleteManyEmpresaArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaWhereInput_1.EmpresaWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaWhereInput_1.EmpresaWhereInput)
], DeleteManyEmpresaArgs.prototype, "where", void 0);
DeleteManyEmpresaArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyEmpresaArgs);
exports.DeleteManyEmpresaArgs = DeleteManyEmpresaArgs;
