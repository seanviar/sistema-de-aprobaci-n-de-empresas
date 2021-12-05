"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyEmpresaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaCreateManyInput_1 = require("../../../inputs/EmpresaCreateManyInput");
let CreateManyEmpresaArgs = class CreateManyEmpresaArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [EmpresaCreateManyInput_1.EmpresaCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyEmpresaArgs.prototype, "data", void 0);
CreateManyEmpresaArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyEmpresaArgs);
exports.CreateManyEmpresaArgs = CreateManyEmpresaArgs;
