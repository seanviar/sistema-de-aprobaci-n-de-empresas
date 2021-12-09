"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosUpdateManyWithWhereWithoutEmpresaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentosScalarWhereInput_1 = require("../inputs/DocumentosScalarWhereInput");
const DocumentosUpdateManyMutationInput_1 = require("../inputs/DocumentosUpdateManyMutationInput");
let DocumentosUpdateManyWithWhereWithoutEmpresaInput = class DocumentosUpdateManyWithWhereWithoutEmpresaInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosScalarWhereInput_1.DocumentosScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosScalarWhereInput_1.DocumentosScalarWhereInput)
], DocumentosUpdateManyWithWhereWithoutEmpresaInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosUpdateManyMutationInput_1.DocumentosUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosUpdateManyMutationInput_1.DocumentosUpdateManyMutationInput)
], DocumentosUpdateManyWithWhereWithoutEmpresaInput.prototype, "data", void 0);
DocumentosUpdateManyWithWhereWithoutEmpresaInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosUpdateManyWithWhereWithoutEmpresaInput", {
        isAbstract: true
    })
], DocumentosUpdateManyWithWhereWithoutEmpresaInput);
exports.DocumentosUpdateManyWithWhereWithoutEmpresaInput = DocumentosUpdateManyWithWhereWithoutEmpresaInput;
