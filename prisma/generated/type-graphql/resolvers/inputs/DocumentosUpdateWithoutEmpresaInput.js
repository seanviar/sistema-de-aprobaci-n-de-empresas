"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosUpdateWithoutEmpresaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let DocumentosUpdateWithoutEmpresaInput = class DocumentosUpdateWithoutEmpresaInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DocumentosUpdateWithoutEmpresaInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DocumentosUpdateWithoutEmpresaInput.prototype, "link", void 0);
DocumentosUpdateWithoutEmpresaInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosUpdateWithoutEmpresaInput", {
        isAbstract: true
    })
], DocumentosUpdateWithoutEmpresaInput);
exports.DocumentosUpdateWithoutEmpresaInput = DocumentosUpdateWithoutEmpresaInput;
