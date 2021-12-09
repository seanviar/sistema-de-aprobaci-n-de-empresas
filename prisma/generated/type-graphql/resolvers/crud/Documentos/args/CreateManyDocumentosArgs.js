"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyDocumentosArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentosCreateManyInput_1 = require("../../../inputs/DocumentosCreateManyInput");
let CreateManyDocumentosArgs = class CreateManyDocumentosArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [DocumentosCreateManyInput_1.DocumentosCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyDocumentosArgs.prototype, "data", void 0);
CreateManyDocumentosArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyDocumentosArgs);
exports.CreateManyDocumentosArgs = CreateManyDocumentosArgs;
