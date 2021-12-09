"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosCreateWithoutEmpresaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let DocumentosCreateWithoutEmpresaInput = class DocumentosCreateWithoutEmpresaInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosCreateWithoutEmpresaInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosCreateWithoutEmpresaInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosCreateWithoutEmpresaInput.prototype, "link", void 0);
DocumentosCreateWithoutEmpresaInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosCreateWithoutEmpresaInput", {
        isAbstract: true
    })
], DocumentosCreateWithoutEmpresaInput);
exports.DocumentosCreateWithoutEmpresaInput = DocumentosCreateWithoutEmpresaInput;
