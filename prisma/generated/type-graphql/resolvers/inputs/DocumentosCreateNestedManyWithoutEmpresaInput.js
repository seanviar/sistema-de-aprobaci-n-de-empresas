"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosCreateNestedManyWithoutEmpresaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentosCreateManyEmpresaInputEnvelope_1 = require("../inputs/DocumentosCreateManyEmpresaInputEnvelope");
const DocumentosCreateOrConnectWithoutEmpresaInput_1 = require("../inputs/DocumentosCreateOrConnectWithoutEmpresaInput");
const DocumentosCreateWithoutEmpresaInput_1 = require("../inputs/DocumentosCreateWithoutEmpresaInput");
const DocumentosWhereUniqueInput_1 = require("../inputs/DocumentosWhereUniqueInput");
let DocumentosCreateNestedManyWithoutEmpresaInput = class DocumentosCreateNestedManyWithoutEmpresaInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosCreateWithoutEmpresaInput_1.DocumentosCreateWithoutEmpresaInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentosCreateNestedManyWithoutEmpresaInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosCreateOrConnectWithoutEmpresaInput_1.DocumentosCreateOrConnectWithoutEmpresaInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentosCreateNestedManyWithoutEmpresaInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosCreateManyEmpresaInputEnvelope_1.DocumentosCreateManyEmpresaInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosCreateManyEmpresaInputEnvelope_1.DocumentosCreateManyEmpresaInputEnvelope)
], DocumentosCreateNestedManyWithoutEmpresaInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentosCreateNestedManyWithoutEmpresaInput.prototype, "connect", void 0);
DocumentosCreateNestedManyWithoutEmpresaInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosCreateNestedManyWithoutEmpresaInput", {
        isAbstract: true
    })
], DocumentosCreateNestedManyWithoutEmpresaInput);
exports.DocumentosCreateNestedManyWithoutEmpresaInput = DocumentosCreateNestedManyWithoutEmpresaInput;
