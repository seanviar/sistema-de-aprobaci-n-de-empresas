"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DocumentosCountOrderByAggregateInput = class DocumentosCountOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosCountOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosCountOrderByAggregateInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosCountOrderByAggregateInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosCountOrderByAggregateInput.prototype, "empresaId", void 0);
DocumentosCountOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosCountOrderByAggregateInput", {
        isAbstract: true
    })
], DocumentosCountOrderByAggregateInput);
exports.DocumentosCountOrderByAggregateInput = DocumentosCountOrderByAggregateInput;
