"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EmpresaAvgOrderByAggregateInput_1 = require("../inputs/EmpresaAvgOrderByAggregateInput");
const EmpresaCountOrderByAggregateInput_1 = require("../inputs/EmpresaCountOrderByAggregateInput");
const EmpresaMaxOrderByAggregateInput_1 = require("../inputs/EmpresaMaxOrderByAggregateInput");
const EmpresaMinOrderByAggregateInput_1 = require("../inputs/EmpresaMinOrderByAggregateInput");
const EmpresaSumOrderByAggregateInput_1 = require("../inputs/EmpresaSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let EmpresaOrderByWithAggregationInput = class EmpresaOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaOrderByWithAggregationInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaOrderByWithAggregationInput.prototype, "razonSocial", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaOrderByWithAggregationInput.prototype, "tipoIdentificacion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaOrderByWithAggregationInput.prototype, "numeroIdentificacion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaOrderByWithAggregationInput.prototype, "numeroEmpleados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaOrderByWithAggregationInput.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaOrderByWithAggregationInput.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaCountOrderByAggregateInput_1.EmpresaCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaCountOrderByAggregateInput_1.EmpresaCountOrderByAggregateInput)
], EmpresaOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaAvgOrderByAggregateInput_1.EmpresaAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaAvgOrderByAggregateInput_1.EmpresaAvgOrderByAggregateInput)
], EmpresaOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaMaxOrderByAggregateInput_1.EmpresaMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaMaxOrderByAggregateInput_1.EmpresaMaxOrderByAggregateInput)
], EmpresaOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaMinOrderByAggregateInput_1.EmpresaMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaMinOrderByAggregateInput_1.EmpresaMinOrderByAggregateInput)
], EmpresaOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EmpresaSumOrderByAggregateInput_1.EmpresaSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EmpresaSumOrderByAggregateInput_1.EmpresaSumOrderByAggregateInput)
], EmpresaOrderByWithAggregationInput.prototype, "_sum", void 0);
EmpresaOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EmpresaOrderByWithAggregationInput", {
        isAbstract: true
    })
], EmpresaOrderByWithAggregationInput);
exports.EmpresaOrderByWithAggregationInput = EmpresaOrderByWithAggregationInput;
