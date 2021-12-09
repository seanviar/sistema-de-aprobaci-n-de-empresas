"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let DocumentosMaxAggregate = class DocumentosMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosMaxAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosMaxAggregate.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosMaxAggregate.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosMaxAggregate.prototype, "empresaId", void 0);
DocumentosMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("DocumentosMaxAggregate", {
        isAbstract: true
    })
], DocumentosMaxAggregate);
exports.DocumentosMaxAggregate = DocumentosMaxAggregate;
