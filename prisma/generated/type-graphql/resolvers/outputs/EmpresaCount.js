"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let EmpresaCount = class EmpresaCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], EmpresaCount.prototype, "documentos", void 0);
EmpresaCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("EmpresaCount", {
        isAbstract: true
    })
], EmpresaCount);
exports.EmpresaCount = EmpresaCount;
