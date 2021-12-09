"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DocumentosMaxOrderByAggregateInput = class DocumentosMaxOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosMaxOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosMaxOrderByAggregateInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosMaxOrderByAggregateInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosMaxOrderByAggregateInput.prototype, "empresaId", void 0);
DocumentosMaxOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosMaxOrderByAggregateInput", {
        isAbstract: true
    })
], DocumentosMaxOrderByAggregateInput);
exports.DocumentosMaxOrderByAggregateInput = DocumentosMaxOrderByAggregateInput;
