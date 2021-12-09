"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaOrderByWithRelationInput_1 = require("../inputs/EmpresaOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DocumentosOrderByWithRelationInput = class DocumentosOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaOrderByWithRelationInput_1.EmpresaOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaOrderByWithRelationInput_1.EmpresaOrderByWithRelationInput)
], DocumentosOrderByWithRelationInput.prototype, "empresa", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosOrderByWithRelationInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosOrderByWithRelationInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosOrderByWithRelationInput.prototype, "empresaId", void 0);
DocumentosOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosOrderByWithRelationInput", {
        isAbstract: true
    })
], DocumentosOrderByWithRelationInput);
exports.DocumentosOrderByWithRelationInput = DocumentosOrderByWithRelationInput;
