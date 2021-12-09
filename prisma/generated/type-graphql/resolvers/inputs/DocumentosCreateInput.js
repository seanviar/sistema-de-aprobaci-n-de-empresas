"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaCreateNestedOneWithoutDocumentosInput_1 = require("../inputs/EmpresaCreateNestedOneWithoutDocumentosInput");
let DocumentosCreateInput = class DocumentosCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosCreateInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosCreateInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaCreateNestedOneWithoutDocumentosInput_1.EmpresaCreateNestedOneWithoutDocumentosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaCreateNestedOneWithoutDocumentosInput_1.EmpresaCreateNestedOneWithoutDocumentosInput)
], DocumentosCreateInput.prototype, "empresa", void 0);
DocumentosCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosCreateInput", {
        isAbstract: true
    })
], DocumentosCreateInput);
exports.DocumentosCreateInput = DocumentosCreateInput;
