"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyDocumentosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentosWhereInput_1 = require("../../../inputs/DocumentosWhereInput");
let DeleteManyDocumentosArgs = class DeleteManyDocumentosArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosWhereInput_1.DocumentosWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosWhereInput_1.DocumentosWhereInput)
], DeleteManyDocumentosArgs.prototype, "where", void 0);
DeleteManyDocumentosArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyDocumentosArgs);
exports.DeleteManyDocumentosArgs = DeleteManyDocumentosArgs;
