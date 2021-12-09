"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let DocumentosWhereUniqueInput = class DocumentosWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosWhereUniqueInput.prototype, "id", void 0);
DocumentosWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosWhereUniqueInput", {
        isAbstract: true
    })
], DocumentosWhereUniqueInput);
exports.DocumentosWhereUniqueInput = DocumentosWhereUniqueInput;
