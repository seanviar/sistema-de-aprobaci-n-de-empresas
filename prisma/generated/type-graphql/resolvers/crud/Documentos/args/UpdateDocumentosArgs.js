"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDocumentosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentosUpdateInput_1 = require("../../../inputs/DocumentosUpdateInput");
const DocumentosWhereUniqueInput_1 = require("../../../inputs/DocumentosWhereUniqueInput");
let UpdateDocumentosArgs = class UpdateDocumentosArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosUpdateInput_1.DocumentosUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosUpdateInput_1.DocumentosUpdateInput)
], UpdateDocumentosArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput)
], UpdateDocumentosArgs.prototype, "where", void 0);
UpdateDocumentosArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateDocumentosArgs);
exports.UpdateDocumentosArgs = UpdateDocumentosArgs;
