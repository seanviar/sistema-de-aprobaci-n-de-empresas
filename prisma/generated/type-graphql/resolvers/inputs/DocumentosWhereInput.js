"use strict";
var DocumentosWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaRelationFilter_1 = require("../inputs/EmpresaRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let DocumentosWhereInput = DocumentosWhereInput_1 = class DocumentosWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentosWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentosWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], DocumentosWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], DocumentosWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaRelationFilter_1.EmpresaRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaRelationFilter_1.EmpresaRelationFilter)
], DocumentosWhereInput.prototype, "empresa", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], DocumentosWhereInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], DocumentosWhereInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], DocumentosWhereInput.prototype, "empresaId", void 0);
DocumentosWhereInput = DocumentosWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosWhereInput", {
        isAbstract: true
    })
], DocumentosWhereInput);
exports.DocumentosWhereInput = DocumentosWhereInput;
