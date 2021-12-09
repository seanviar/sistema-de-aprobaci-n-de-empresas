"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDocumentosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentosOrderByWithAggregationInput_1 = require("../../../inputs/DocumentosOrderByWithAggregationInput");
const DocumentosScalarWhereWithAggregatesInput_1 = require("../../../inputs/DocumentosScalarWhereWithAggregatesInput");
const DocumentosWhereInput_1 = require("../../../inputs/DocumentosWhereInput");
const DocumentosScalarFieldEnum_1 = require("../../../../enums/DocumentosScalarFieldEnum");
let GroupByDocumentosArgs = class GroupByDocumentosArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosWhereInput_1.DocumentosWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosWhereInput_1.DocumentosWhereInput)
], GroupByDocumentosArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosOrderByWithAggregationInput_1.DocumentosOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByDocumentosArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosScalarFieldEnum_1.DocumentosScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByDocumentosArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosScalarWhereWithAggregatesInput_1.DocumentosScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosScalarWhereWithAggregatesInput_1.DocumentosScalarWhereWithAggregatesInput)
], GroupByDocumentosArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByDocumentosArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByDocumentosArgs.prototype, "skip", void 0);
GroupByDocumentosArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByDocumentosArgs);
exports.GroupByDocumentosArgs = GroupByDocumentosArgs;
