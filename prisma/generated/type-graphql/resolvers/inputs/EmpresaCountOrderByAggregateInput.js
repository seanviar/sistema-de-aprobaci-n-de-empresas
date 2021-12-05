"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let EmpresaCountOrderByAggregateInput = class EmpresaCountOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaCountOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaCountOrderByAggregateInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaCountOrderByAggregateInput.prototype, "razonSocial", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaCountOrderByAggregateInput.prototype, "tipoIdentificacion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaCountOrderByAggregateInput.prototype, "numeroIdentificacion", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaCountOrderByAggregateInput.prototype, "numeroEmpleados", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaCountOrderByAggregateInput.prototype, "logo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EmpresaCountOrderByAggregateInput.prototype, "estado", void 0);
EmpresaCountOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EmpresaCountOrderByAggregateInput", {
        isAbstract: true
    })
], EmpresaCountOrderByAggregateInput);
exports.EmpresaCountOrderByAggregateInput = EmpresaCountOrderByAggregateInput;
