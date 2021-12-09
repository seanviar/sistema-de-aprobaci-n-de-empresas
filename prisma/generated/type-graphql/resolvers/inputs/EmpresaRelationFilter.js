"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaWhereInput_1 = require("../inputs/EmpresaWhereInput");
let EmpresaRelationFilter = class EmpresaRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaWhereInput_1.EmpresaWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaWhereInput_1.EmpresaWhereInput)
], EmpresaRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaWhereInput_1.EmpresaWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaWhereInput_1.EmpresaWhereInput)
], EmpresaRelationFilter.prototype, "isNot", void 0);
EmpresaRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EmpresaRelationFilter", {
        isAbstract: true
    })
], EmpresaRelationFilter);
exports.EmpresaRelationFilter = EmpresaRelationFilter;
