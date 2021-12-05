"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let EmpresaMinAggregate = class EmpresaMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaMinAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaMinAggregate.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaMinAggregate.prototype, "razonSocial", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaMinAggregate.prototype, "tipoIdentificacion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaMinAggregate.prototype, "numeroIdentificacion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], EmpresaMinAggregate.prototype, "numeroEmpleados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaMinAggregate.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaMinAggregate.prototype, "estado", void 0);
EmpresaMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("EmpresaMinAggregate", {
        isAbstract: true
    })
], EmpresaMinAggregate);
exports.EmpresaMinAggregate = EmpresaMinAggregate;
