"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyDocumentosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentosUpdateManyMutationInput_1 = require("../../../inputs/DocumentosUpdateManyMutationInput");
const DocumentosWhereInput_1 = require("../../../inputs/DocumentosWhereInput");
let UpdateManyDocumentosArgs = class UpdateManyDocumentosArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosUpdateManyMutationInput_1.DocumentosUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosUpdateManyMutationInput_1.DocumentosUpdateManyMutationInput)
], UpdateManyDocumentosArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosWhereInput_1.DocumentosWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosWhereInput_1.DocumentosWhereInput)
], UpdateManyDocumentosArgs.prototype, "where", void 0);
UpdateManyDocumentosArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyDocumentosArgs);
exports.UpdateManyDocumentosArgs = UpdateManyDocumentosArgs;
