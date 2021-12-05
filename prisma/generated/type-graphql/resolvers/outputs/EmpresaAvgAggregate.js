"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let EmpresaAvgAggregate = class EmpresaAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], EmpresaAvgAggregate.prototype, "numeroEmpleados", void 0);
EmpresaAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("EmpresaAvgAggregate", {
        isAbstract: true
    })
], EmpresaAvgAggregate);
exports.EmpresaAvgAggregate = EmpresaAvgAggregate;
