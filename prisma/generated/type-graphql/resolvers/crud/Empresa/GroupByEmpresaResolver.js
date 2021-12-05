"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByEmpresaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByEmpresaArgs_1 = require("./args/GroupByEmpresaArgs");
const Empresa_1 = require("../../../models/Empresa");
const EmpresaGroupBy_1 = require("../../outputs/EmpresaGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByEmpresaResolver = class GroupByEmpresaResolver {
    async groupByEmpresa(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).empresa.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [EmpresaGroupBy_1.EmpresaGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByEmpresaArgs_1.GroupByEmpresaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByEmpresaResolver.prototype, "groupByEmpresa", null);
GroupByEmpresaResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Empresa_1.Empresa)
], GroupByEmpresaResolver);
exports.GroupByEmpresaResolver = GroupByEmpresaResolver;
