"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosCreateOrConnectWithoutEmpresaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentosCreateWithoutEmpresaInput_1 = require("../inputs/DocumentosCreateWithoutEmpresaInput");
const DocumentosWhereUniqueInput_1 = require("../inputs/DocumentosWhereUniqueInput");
let DocumentosCreateOrConnectWithoutEmpresaInput = class DocumentosCreateOrConnectWithoutEmpresaInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput)
], DocumentosCreateOrConnectWithoutEmpresaInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosCreateWithoutEmpresaInput_1.DocumentosCreateWithoutEmpresaInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosCreateWithoutEmpresaInput_1.DocumentosCreateWithoutEmpresaInput)
], DocumentosCreateOrConnectWithoutEmpresaInput.prototype, "create", void 0);
DocumentosCreateOrConnectWithoutEmpresaInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosCreateOrConnectWithoutEmpresaInput", {
        isAbstract: true
    })
], DocumentosCreateOrConnectWithoutEmpresaInput);
exports.DocumentosCreateOrConnectWithoutEmpresaInput = DocumentosCreateOrConnectWithoutEmpresaInput;
