"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaAvgAggregate_1 = require("../outputs/EmpresaAvgAggregate");
const EmpresaCountAggregate_1 = require("../outputs/EmpresaCountAggregate");
const EmpresaMaxAggregate_1 = require("../outputs/EmpresaMaxAggregate");
const EmpresaMinAggregate_1 = require("../outputs/EmpresaMinAggregate");
const EmpresaSumAggregate_1 = require("../outputs/EmpresaSumAggregate");
let EmpresaGroupBy = class EmpresaGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaGroupBy.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaGroupBy.prototype, "razonSocial", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaGroupBy.prototype, "tipoIdentificacion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaGroupBy.prototype, "numeroIdentificacion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], EmpresaGroupBy.prototype, "numeroEmpleados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaGroupBy.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaGroupBy.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaCountAggregate_1.EmpresaCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaCountAggregate_1.EmpresaCountAggregate)
], EmpresaGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaAvgAggregate_1.EmpresaAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaAvgAggregate_1.EmpresaAvgAggregate)
], EmpresaGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaSumAggregate_1.EmpresaSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaSumAggregate_1.EmpresaSumAggregate)
], EmpresaGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaMinAggregate_1.EmpresaMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaMinAggregate_1.EmpresaMinAggregate)
], EmpresaGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaMaxAggregate_1.EmpresaMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaMaxAggregate_1.EmpresaMaxAggregate)
], EmpresaGroupBy.prototype, "_max", void 0);
EmpresaGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("EmpresaGroupBy", {
        isAbstract: true
    })
], EmpresaGroupBy);
exports.EmpresaGroupBy = EmpresaGroupBy;
