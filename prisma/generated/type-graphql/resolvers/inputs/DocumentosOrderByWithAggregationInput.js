"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentosCountOrderByAggregateInput_1 = require("../inputs/DocumentosCountOrderByAggregateInput");
const DocumentosMaxOrderByAggregateInput_1 = require("../inputs/DocumentosMaxOrderByAggregateInput");
const DocumentosMinOrderByAggregateInput_1 = require("../inputs/DocumentosMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DocumentosOrderByWithAggregationInput = class DocumentosOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosOrderByWithAggregationInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosOrderByWithAggregationInput.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosOrderByWithAggregationInput.prototype, "empresaId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosCountOrderByAggregateInput_1.DocumentosCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosCountOrderByAggregateInput_1.DocumentosCountOrderByAggregateInput)
], DocumentosOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosMaxOrderByAggregateInput_1.DocumentosMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosMaxOrderByAggregateInput_1.DocumentosMaxOrderByAggregateInput)
], DocumentosOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosMinOrderByAggregateInput_1.DocumentosMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosMinOrderByAggregateInput_1.DocumentosMinOrderByAggregateInput)
], DocumentosOrderByWithAggregationInput.prototype, "_min", void 0);
DocumentosOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosOrderByWithAggregationInput", {
        isAbstract: true
    })
], DocumentosOrderByWithAggregationInput);
exports.DocumentosOrderByWithAggregationInput = DocumentosOrderByWithAggregationInput;
