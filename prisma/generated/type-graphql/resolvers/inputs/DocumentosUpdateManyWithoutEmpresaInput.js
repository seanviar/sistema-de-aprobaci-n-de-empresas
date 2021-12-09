"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosUpdateManyWithoutEmpresaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentosCreateManyEmpresaInputEnvelope_1 = require("../inputs/DocumentosCreateManyEmpresaInputEnvelope");
const DocumentosCreateOrConnectWithoutEmpresaInput_1 = require("../inputs/DocumentosCreateOrConnectWithoutEmpresaInput");
const DocumentosCreateWithoutEmpresaInput_1 = require("../inputs/DocumentosCreateWithoutEmpresaInput");
const DocumentosScalarWhereInput_1 = require("../inputs/DocumentosScalarWhereInput");
const DocumentosUpdateManyWithWhereWithoutEmpresaInput_1 = require("../inputs/DocumentosUpdateManyWithWhereWithoutEmpresaInput");
const DocumentosUpdateWithWhereUniqueWithoutEmpresaInput_1 = require("../inputs/DocumentosUpdateWithWhereUniqueWithoutEmpresaInput");
const DocumentosUpsertWithWhereUniqueWithoutEmpresaInput_1 = require("../inputs/DocumentosUpsertWithWhereUniqueWithoutEmpresaInput");
const DocumentosWhereUniqueInput_1 = require("../inputs/DocumentosWhereUniqueInput");
let DocumentosUpdateManyWithoutEmpresaInput = class DocumentosUpdateManyWithoutEmpresaInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosCreateWithoutEmpresaInput_1.DocumentosCreateWithoutEmpresaInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentosUpdateManyWithoutEmpresaInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosCreateOrConnectWithoutEmpresaInput_1.DocumentosCreateOrConnectWithoutEmpresaInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentosUpdateManyWithoutEmpresaInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosUpsertWithWhereUniqueWithoutEmpresaInput_1.DocumentosUpsertWithWhereUniqueWithoutEmpresaInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentosUpdateManyWithoutEmpresaInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosCreateManyEmpresaInputEnvelope_1.DocumentosCreateManyEmpresaInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosCreateManyEmpresaInputEnvelope_1.DocumentosCreateManyEmpresaInputEnvelope)
], DocumentosUpdateManyWithoutEmpresaInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentosUpdateManyWithoutEmpresaInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentosUpdateManyWithoutEmpresaInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentosUpdateManyWithoutEmpresaInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentosUpdateManyWithoutEmpresaInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosUpdateWithWhereUniqueWithoutEmpresaInput_1.DocumentosUpdateWithWhereUniqueWithoutEmpresaInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentosUpdateManyWithoutEmpresaInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosUpdateManyWithWhereWithoutEmpresaInput_1.DocumentosUpdateManyWithWhereWithoutEmpresaInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentosUpdateManyWithoutEmpresaInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosScalarWhereInput_1.DocumentosScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentosUpdateManyWithoutEmpresaInput.prototype, "deleteMany", void 0);
DocumentosUpdateManyWithoutEmpresaInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosUpdateManyWithoutEmpresaInput", {
        isAbstract: true
    })
], DocumentosUpdateManyWithoutEmpresaInput);
exports.DocumentosUpdateManyWithoutEmpresaInput = DocumentosUpdateManyWithoutEmpresaInput;
