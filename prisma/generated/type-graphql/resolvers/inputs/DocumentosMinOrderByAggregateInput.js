"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DocumentosMinOrderByAggregateInput = class DocumentosMinOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosMinOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosMinOrderByAggregateInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosMinOrderByAggregateInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosMinOrderByAggregateInput.prototype, "empresaId", void 0);
DocumentosMinOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosMinOrderByAggregateInput", {
        isAbstract: true
    })
], DocumentosMinOrderByAggregateInput);
exports.DocumentosMinOrderByAggregateInput = DocumentosMinOrderByAggregateInput;
