"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEmpresaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateEmpresaArgs_1 = require("./args/AggregateEmpresaArgs");
const Empresa_1 = require("../../../models/Empresa");
const AggregateEmpresa_1 = require("../../outputs/AggregateEmpresa");
const helpers_1 = require("../../../helpers");
let AggregateEmpresaResolver = class AggregateEmpresaResolver {
    async aggregateEmpresa(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).empresa.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateEmpresa_1.AggregateEmpresa, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateEmpresaArgs_1.AggregateEmpresaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateEmpresaResolver.prototype, "aggregateEmpresa", null);
AggregateEmpresaResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Empresa_1.Empresa)
], AggregateEmpresaResolver);
exports.AggregateEmpresaResolver = AggregateEmpresaResolver;
