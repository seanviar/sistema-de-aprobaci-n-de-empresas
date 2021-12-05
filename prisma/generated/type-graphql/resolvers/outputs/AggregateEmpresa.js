"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEmpresa = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaAvgAggregate_1 = require("../outputs/EmpresaAvgAggregate");
const EmpresaCountAggregate_1 = require("../outputs/EmpresaCountAggregate");
const EmpresaMaxAggregate_1 = require("../outputs/EmpresaMaxAggregate");
const EmpresaMinAggregate_1 = require("../outputs/EmpresaMinAggregate");
const EmpresaSumAggregate_1 = require("../outputs/EmpresaSumAggregate");
let AggregateEmpresa = class AggregateEmpresa {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaCountAggregate_1.EmpresaCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaCountAggregate_1.EmpresaCountAggregate)
], AggregateEmpresa.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaAvgAggregate_1.EmpresaAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaAvgAggregate_1.EmpresaAvgAggregate)
], AggregateEmpresa.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaSumAggregate_1.EmpresaSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaSumAggregate_1.EmpresaSumAggregate)
], AggregateEmpresa.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaMinAggregate_1.EmpresaMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaMinAggregate_1.EmpresaMinAggregate)
], AggregateEmpresa.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaMaxAggregate_1.EmpresaMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaMaxAggregate_1.EmpresaMaxAggregate)
], AggregateEmpresa.prototype, "_max", void 0);
AggregateEmpresa = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateEmpresa", {
        isAbstract: true
    })
], AggregateEmpresa);
exports.AggregateEmpresa = AggregateEmpresa;
