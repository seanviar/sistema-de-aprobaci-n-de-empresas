"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDocumentos = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DocumentosCountAggregate_1 = require("../outputs/DocumentosCountAggregate");
const DocumentosMaxAggregate_1 = require("../outputs/DocumentosMaxAggregate");
const DocumentosMinAggregate_1 = require("../outputs/DocumentosMinAggregate");
let AggregateDocumentos = class AggregateDocumentos {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosCountAggregate_1.DocumentosCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosCountAggregate_1.DocumentosCountAggregate)
], AggregateDocumentos.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosMinAggregate_1.DocumentosMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosMinAggregate_1.DocumentosMinAggregate)
], AggregateDocumentos.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DocumentosMaxAggregate_1.DocumentosMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DocumentosMaxAggregate_1.DocumentosMaxAggregate)
], AggregateDocumentos.prototype, "_max", void 0);
AggregateDocumentos = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateDocumentos", {
        isAbstract: true
    })
], AggregateDocumentos);
exports.AggregateDocumentos = AggregateDocumentos;
