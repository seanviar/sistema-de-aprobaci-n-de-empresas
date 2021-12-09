"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyDocumentosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentosOrderByWithRelationInput_1 = require("../../../inputs/DocumentosOrderByWithRelationInput");
const DocumentosWhereInput_1 = require("../../../inputs/DocumentosWhereInput");
const DocumentosWhereUniqueInput_1 = require("../../../inputs/DocumentosWhereUniqueInput");
const DocumentosScalarFieldEnum_1 = require("../../../../enums/DocumentosScalarFieldEnum");
let FindManyDocumentosArgs = class FindManyDocumentosArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosWhereInput_1.DocumentosWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosWhereInput_1.DocumentosWhereInput)
], FindManyDocumentosArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosOrderByWithRelationInput_1.DocumentosOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyDocumentosArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput)
], FindManyDocumentosArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyDocumentosArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyDocumentosArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosScalarFieldEnum_1.DocumentosScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyDocumentosArgs.prototype, "distinct", void 0);
FindManyDocumentosArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindManyDocumentosArgs);
exports.FindManyDocumentosArgs = FindManyDocumentosArgs;
