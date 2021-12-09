"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let DocumentosCreateManyInput = class DocumentosCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosCreateManyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosCreateManyInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosCreateManyInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosCreateManyInput.prototype, "empresaId", void 0);
DocumentosCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosCreateManyInput", {
        isAbstract: true
    })
], DocumentosCreateManyInput);
exports.DocumentosCreateManyInput = DocumentosCreateManyInput;
