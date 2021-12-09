"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaCreateOrConnectWithoutDocumentosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaCreateWithoutDocumentosInput_1 = require("../inputs/EmpresaCreateWithoutDocumentosInput");
const EmpresaWhereUniqueInput_1 = require("../inputs/EmpresaWhereUniqueInput");
let EmpresaCreateOrConnectWithoutDocumentosInput = class EmpresaCreateOrConnectWithoutDocumentosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaWhereUniqueInput_1.EmpresaWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaWhereUniqueInput_1.EmpresaWhereUniqueInput)
], EmpresaCreateOrConnectWithoutDocumentosInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaCreateWithoutDocumentosInput_1.EmpresaCreateWithoutDocumentosInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaCreateWithoutDocumentosInput_1.EmpresaCreateWithoutDocumentosInput)
], EmpresaCreateOrConnectWithoutDocumentosInput.prototype, "create", void 0);
EmpresaCreateOrConnectWithoutDocumentosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EmpresaCreateOrConnectWithoutDocumentosInput", {
        isAbstract: true
    })
], EmpresaCreateOrConnectWithoutDocumentosInput);
exports.EmpresaCreateOrConnectWithoutDocumentosInput = EmpresaCreateOrConnectWithoutDocumentosInput;
