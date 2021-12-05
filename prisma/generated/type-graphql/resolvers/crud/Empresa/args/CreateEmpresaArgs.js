"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmpresaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaCreateInput_1 = require("../../../inputs/EmpresaCreateInput");
let CreateEmpresaArgs = class CreateEmpresaArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaCreateInput_1.EmpresaCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaCreateInput_1.EmpresaCreateInput)
], CreateEmpresaArgs.prototype, "data", void 0);
CreateEmpresaArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateEmpresaArgs);
exports.CreateEmpresaArgs = CreateEmpresaArgs;
