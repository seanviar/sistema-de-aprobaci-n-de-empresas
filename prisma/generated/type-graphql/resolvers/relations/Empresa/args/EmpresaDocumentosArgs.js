"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaDocumentosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentosOrderByWithRelationInput_1 = require("../../../inputs/DocumentosOrderByWithRelationInput");
const DocumentosWhereInput_1 = require("../../../inputs/DocumentosWhereInput");
const DocumentosWhereUniqueInput_1 = require("../../../inputs/DocumentosWhereUniqueInput");
const DocumentosScalarFieldEnum_1 = require("../../../../enums/DocumentosScalarFieldEnum");
let EmpresaDocumentosArgs = class EmpresaDocumentosArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosWhereInput_1.DocumentosWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosWhereInput_1.DocumentosWhereInput)
], EmpresaDocumentosArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosOrderByWithRelationInput_1.DocumentosOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EmpresaDocumentosArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput)
], EmpresaDocumentosArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], EmpresaDocumentosArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], EmpresaDocumentosArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosScalarFieldEnum_1.DocumentosScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EmpresaDocumentosArgs.prototype, "distinct", void 0);
EmpresaDocumentosArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], EmpresaDocumentosArgs);
exports.EmpresaDocumentosArgs = EmpresaDocumentosArgs;
