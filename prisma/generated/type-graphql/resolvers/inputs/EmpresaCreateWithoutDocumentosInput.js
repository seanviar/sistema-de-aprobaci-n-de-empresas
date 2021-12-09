"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaCreateWithoutDocumentosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let EmpresaCreateWithoutDocumentosInput = class EmpresaCreateWithoutDocumentosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaCreateWithoutDocumentosInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaCreateWithoutDocumentosInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaCreateWithoutDocumentosInput.prototype, "razonSocial", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaCreateWithoutDocumentosInput.prototype, "tipoIdentificacion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaCreateWithoutDocumentosInput.prototype, "numeroIdentificacion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], EmpresaCreateWithoutDocumentosInput.prototype, "numeroEmpleados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaCreateWithoutDocumentosInput.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaCreateWithoutDocumentosInput.prototype, "estado", void 0);
EmpresaCreateWithoutDocumentosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EmpresaCreateWithoutDocumentosInput", {
        isAbstract: true
    })
], EmpresaCreateWithoutDocumentosInput);
exports.EmpresaCreateWithoutDocumentosInput = EmpresaCreateWithoutDocumentosInput;
