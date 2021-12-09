"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DocumentosOrderByRelationAggregateInput = class DocumentosOrderByRelationAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosOrderByRelationAggregateInput.prototype, "_count", void 0);
DocumentosOrderByRelationAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("DocumentosOrderByRelationAggregateInput", {
        isAbstract: true
    })
], DocumentosOrderByRelationAggregateInput);
exports.DocumentosOrderByRelationAggregateInput = DocumentosOrderByRelationAggregateInput;
