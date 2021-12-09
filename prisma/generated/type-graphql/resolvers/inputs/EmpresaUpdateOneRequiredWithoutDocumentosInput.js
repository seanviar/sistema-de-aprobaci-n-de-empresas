"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaUpdateOneRequiredWithoutDocumentosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaCreateOrConnectWithoutDocumentosInput_1 = require("../inputs/EmpresaCreateOrConnectWithoutDocumentosInput");
const EmpresaCreateWithoutDocumentosInput_1 = require("../inputs/EmpresaCreateWithoutDocumentosInput");
const EmpresaUpdateWithoutDocumentosInput_1 = require("../inputs/EmpresaUpdateWithoutDocumentosInput");
const EmpresaUpsertWithoutDocumentosInput_1 = require("../inputs/EmpresaUpsertWithoutDocumentosInput");
const EmpresaWhereUniqueInput_1 = require("../inputs/EmpresaWhereUniqueInput");
let EmpresaUpdateOneRequiredWithoutDocumentosInput = class EmpresaUpdateOneRequiredWithoutDocumentosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaCreateWithoutDocumentosInput_1.EmpresaCreateWithoutDocumentosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaCreateWithoutDocumentosInput_1.EmpresaCreateWithoutDocumentosInput)
], EmpresaUpdateOneRequiredWithoutDocumentosInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaCreateOrConnectWithoutDocumentosInput_1.EmpresaCreateOrConnectWithoutDocumentosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaCreateOrConnectWithoutDocumentosInput_1.EmpresaCreateOrConnectWithoutDocumentosInput)
], EmpresaUpdateOneRequiredWithoutDocumentosInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaUpsertWithoutDocumentosInput_1.EmpresaUpsertWithoutDocumentosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaUpsertWithoutDocumentosInput_1.EmpresaUpsertWithoutDocumentosInput)
], EmpresaUpdateOneRequiredWithoutDocumentosInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaWhereUniqueInput_1.EmpresaWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaWhereUniqueInput_1.EmpresaWhereUniqueInput)
], EmpresaUpdateOneRequiredWithoutDocumentosInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaUpdateWithoutDocumentosInput_1.EmpresaUpdateWithoutDocumentosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaUpdateWithoutDocumentosInput_1.EmpresaUpdateWithoutDocumentosInput)
], EmpresaUpdateOneRequiredWithoutDocumentosInput.prototype, "update", void 0);
EmpresaUpdateOneRequiredWithoutDocumentosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EmpresaUpdateOneRequiredWithoutDocumentosInput", {
        isAbstract: true
    })
], EmpresaUpdateOneRequiredWithoutDocumentosInput);
exports.EmpresaUpdateOneRequiredWithoutDocumentosInput = EmpresaUpdateOneRequiredWithoutDocumentosInput;
