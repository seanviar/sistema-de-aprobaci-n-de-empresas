"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDocumentosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentosWhereUniqueInput_1 = require("../../../inputs/DocumentosWhereUniqueInput");
let FindUniqueDocumentosArgs = class FindUniqueDocumentosArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosWhereUniqueInput_1.DocumentosWhereUniqueInput)
], FindUniqueDocumentosArgs.prototype, "where", void 0);
FindUniqueDocumentosArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueDocumentosArgs);
exports.FindUniqueDocumentosArgs = FindUniqueDocumentosArgs;
