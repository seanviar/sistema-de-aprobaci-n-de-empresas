"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaCreateNestedOneWithoutDocumentosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaCreateOrConnectWithoutDocumentosInput_1 = require("../inputs/EmpresaCreateOrConnectWithoutDocumentosInput");
const EmpresaCreateWithoutDocumentosInput_1 = require("../inputs/EmpresaCreateWithoutDocumentosInput");
const EmpresaWhereUniqueInput_1 = require("../inputs/EmpresaWhereUniqueInput");
let EmpresaCreateNestedOneWithoutDocumentosInput = class EmpresaCreateNestedOneWithoutDocumentosInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaCreateWithoutDocumentosInput_1.EmpresaCreateWithoutDocumentosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaCreateWithoutDocumentosInput_1.EmpresaCreateWithoutDocumentosInput)
], EmpresaCreateNestedOneWithoutDocumentosInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaCreateOrConnectWithoutDocumentosInput_1.EmpresaCreateOrConnectWithoutDocumentosInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaCreateOrConnectWithoutDocumentosInput_1.EmpresaCreateOrConnectWithoutDocumentosInput)
], EmpresaCreateNestedOneWithoutDocumentosInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaWhereUniqueInput_1.EmpresaWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaWhereUniqueInput_1.EmpresaWhereUniqueInput)
], EmpresaCreateNestedOneWithoutDocumentosInput.prototype, "connect", void 0);
EmpresaCreateNestedOneWithoutDocumentosInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EmpresaCreateNestedOneWithoutDocumentosInput", {
        isAbstract: true
    })
], EmpresaCreateNestedOneWithoutDocumentosInput);
exports.EmpresaCreateNestedOneWithoutDocumentosInput = EmpresaCreateNestedOneWithoutDocumentosInput;
