"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let EmpresaWhereUniqueInput = class EmpresaWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaWhereUniqueInput.prototype, "id", void 0);
EmpresaWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EmpresaWhereUniqueInput", {
        isAbstract: true
    })
], EmpresaWhereUniqueInput);
exports.EmpresaWhereUniqueInput = EmpresaWhereUniqueInput;
