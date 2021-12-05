"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let EmpresaMaxAggregate = class EmpresaMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaMaxAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaMaxAggregate.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaMaxAggregate.prototype, "razonSocial", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaMaxAggregate.prototype, "tipoIdentificacion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaMaxAggregate.prototype, "numeroIdentificacion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], EmpresaMaxAggregate.prototype, "numeroEmpleados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaMaxAggregate.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaMaxAggregate.prototype, "estado", void 0);
EmpresaMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("EmpresaMaxAggregate", {
        isAbstract: true
    })
], EmpresaMaxAggregate);
exports.EmpresaMaxAggregate = EmpresaMaxAggregate;
