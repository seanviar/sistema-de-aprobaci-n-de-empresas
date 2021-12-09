"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosUpsertWithWhereUniqueWithoutEmpresaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentosCreateWithoutEmpresaInput_1 = require("../inputs/DocumentosCreateWithoutEmpresaInput");
const DocumentosUpdateWithoutEmpresaInput_1 = require("../inputs/DocumentosUpdateWithoutEmpresaInput");
const DocumentosWhereUniqueInput_1 = require("../inputs/DocumentosWhereUniqueInput");
let DocumentosUpsertWithWhereUniqueWithoutEmpresaInput = class DocumentosUpsertWithWhereUniqueWithoutEmpresaInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput)
], DocumentosUpsertWithWhereUniqueWithoutEmpresaInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosUpdateWithoutEmpresaInput_1.DocumentosUpdateWithoutEmpresaInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosUpdateWithoutEmpresaInput_1.DocumentosUpdateWithoutEmpresaInput)
], DocumentosUpsertWithWhereUniqueWithoutEmpresaInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosCreateWithoutEmpresaInput_1.DocumentosCreateWithoutEmpresaInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosCreateWithoutEmpresaInput_1.DocumentosCreateWithoutEmpresaInput)
], DocumentosUpsertWithWhereUniqueWithoutEmpresaInput.prototype, "create", void 0);
DocumentosUpsertWithWhereUniqueWithoutEmpresaInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosUpsertWithWhereUniqueWithoutEmpresaInput", {
        isAbstract: true
    })
], DocumentosUpsertWithWhereUniqueWithoutEmpresaInput);
exports.DocumentosUpsertWithWhereUniqueWithoutEmpresaInput = DocumentosUpsertWithWhereUniqueWithoutEmpresaInput;
