"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDocumentosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentosCreateInput_1 = require("../../../inputs/DocumentosCreateInput");
let CreateDocumentosArgs = class CreateDocumentosArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosCreateInput_1.DocumentosCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosCreateInput_1.DocumentosCreateInput)
], CreateDocumentosArgs.prototype, "data", void 0);
CreateDocumentosArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateDocumentosArgs);
exports.CreateDocumentosArgs = CreateDocumentosArgs;
