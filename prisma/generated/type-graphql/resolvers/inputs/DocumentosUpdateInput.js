"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaUpdateOneRequiredWithoutDocumentosInput_1 = require("../inputs/EmpresaUpdateOneRequiredWithoutDocumentosInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let DocumentosUpdateInput = class DocumentosUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DocumentosUpdateInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DocumentosUpdateInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaUpdateOneRequiredWithoutDocumentosInput_1.EmpresaUpdateOneRequiredWithoutDocumentosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaUpdateOneRequiredWithoutDocumentosInput_1.EmpresaUpdateOneRequiredWithoutDocumentosInput)
], DocumentosUpdateInput.prototype, "empresa", void 0);
DocumentosUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosUpdateInput", {
        isAbstract: true
    })
], DocumentosUpdateInput);
exports.DocumentosUpdateInput = DocumentosUpdateInput;
