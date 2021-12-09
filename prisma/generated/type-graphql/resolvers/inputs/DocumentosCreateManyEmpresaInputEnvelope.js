"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosCreateManyEmpresaInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentosCreateManyEmpresaInput_1 = require("../inputs/DocumentosCreateManyEmpresaInput");
let DocumentosCreateManyEmpresaInputEnvelope = class DocumentosCreateManyEmpresaInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosCreateManyEmpresaInput_1.DocumentosCreateManyEmpresaInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentosCreateManyEmpresaInputEnvelope.prototype, "data", void 0);
DocumentosCreateManyEmpresaInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosCreateManyEmpresaInputEnvelope", {
        isAbstract: true
    })
], DocumentosCreateManyEmpresaInputEnvelope);
exports.DocumentosCreateManyEmpresaInputEnvelope = DocumentosCreateManyEmpresaInputEnvelope;
