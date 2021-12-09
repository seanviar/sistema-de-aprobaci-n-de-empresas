"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosCreateManyEmpresaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let DocumentosCreateManyEmpresaInput = class DocumentosCreateManyEmpresaInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosCreateManyEmpresaInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosCreateManyEmpresaInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosCreateManyEmpresaInput.prototype, "link", void 0);
DocumentosCreateManyEmpresaInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosCreateManyEmpresaInput", {
        isAbstract: true
    })
], DocumentosCreateManyEmpresaInput);
exports.DocumentosCreateManyEmpresaInput = DocumentosCreateManyEmpresaInput;
