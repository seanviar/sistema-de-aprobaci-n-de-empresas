"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaUpsertWithoutDocumentosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaCreateWithoutDocumentosInput_1 = require("../inputs/EmpresaCreateWithoutDocumentosInput");
const EmpresaUpdateWithoutDocumentosInput_1 = require("../inputs/EmpresaUpdateWithoutDocumentosInput");
let EmpresaUpsertWithoutDocumentosInput = class EmpresaUpsertWithoutDocumentosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaUpdateWithoutDocumentosInput_1.EmpresaUpdateWithoutDocumentosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaUpdateWithoutDocumentosInput_1.EmpresaUpdateWithoutDocumentosInput)
], EmpresaUpsertWithoutDocumentosInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaCreateWithoutDocumentosInput_1.EmpresaCreateWithoutDocumentosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaCreateWithoutDocumentosInput_1.EmpresaCreateWithoutDocumentosInput)
], EmpresaUpsertWithoutDocumentosInput.prototype, "create", void 0);
EmpresaUpsertWithoutDocumentosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EmpresaUpsertWithoutDocumentosInput", {
        isAbstract: true
    })
], EmpresaUpsertWithoutDocumentosInput);
exports.EmpresaUpsertWithoutDocumentosInput = EmpresaUpsertWithoutDocumentosInput;
