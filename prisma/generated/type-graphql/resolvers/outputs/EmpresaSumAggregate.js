"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let EmpresaSumAggregate = class EmpresaSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], EmpresaSumAggregate.prototype, "numeroEmpleados", void 0);
EmpresaSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("EmpresaSumAggregate", {
        isAbstract: true
    })
], EmpresaSumAggregate);
exports.EmpresaSumAggregate = EmpresaSumAggregate;
