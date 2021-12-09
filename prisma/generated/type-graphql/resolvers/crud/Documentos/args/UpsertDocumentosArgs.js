"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertDocumentosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentosCreateInput_1 = require("../../../inputs/DocumentosCreateInput");
const DocumentosUpdateInput_1 = require("../../../inputs/DocumentosUpdateInput");
const DocumentosWhereUniqueInput_1 = require("../../../inputs/DocumentosWhereUniqueInput");
let UpsertDocumentosArgs = class UpsertDocumentosArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput)
], UpsertDocumentosArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosCreateInput_1.DocumentosCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosCreateInput_1.DocumentosCreateInput)
], UpsertDocumentosArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosUpdateInput_1.DocumentosUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosUpdateInput_1.DocumentosUpdateInput)
], UpsertDocumentosArgs.prototype, "update", void 0);
UpsertDocumentosArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertDocumentosArgs);
exports.UpsertDocumentosArgs = UpsertDocumentosArgs;
