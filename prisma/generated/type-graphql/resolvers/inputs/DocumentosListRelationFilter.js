"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentosWhereInput_1 = require("../inputs/DocumentosWhereInput");
let DocumentosListRelationFilter = class DocumentosListRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosWhereInput_1.DocumentosWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosWhereInput_1.DocumentosWhereInput)
], DocumentosListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosWhereInput_1.DocumentosWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosWhereInput_1.DocumentosWhereInput)
], DocumentosListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosWhereInput_1.DocumentosWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosWhereInput_1.DocumentosWhereInput)
], DocumentosListRelationFilter.prototype, "none", void 0);
DocumentosListRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosListRelationFilter", {
        isAbstract: true
    })
], DocumentosListRelationFilter);
exports.DocumentosListRelationFilter = DocumentosListRelationFilter;
