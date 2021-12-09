"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let DocumentosMinAggregate = class DocumentosMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosMinAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosMinAggregate.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosMinAggregate.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DocumentosMinAggregate.prototype, "empresaId", void 0);
DocumentosMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("DocumentosMinAggregate", {
        isAbstract: true
    })
], DocumentosMinAggregate);
exports.DocumentosMinAggregate = DocumentosMinAggregate;
