"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDocumentosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentosWhereUniqueInput_1 = require("../../../inputs/DocumentosWhereUniqueInput");
let DeleteDocumentosArgs = class DeleteDocumentosArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput)
], DeleteDocumentosArgs.prototype, "where", void 0);
DeleteDocumentosArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteDocumentosArgs);
exports.DeleteDocumentosArgs = DeleteDocumentosArgs;
