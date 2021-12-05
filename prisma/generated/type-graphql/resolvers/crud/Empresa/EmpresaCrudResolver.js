"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateEmpresaArgs_1 = require("./args/AggregateEmpresaArgs");
const CreateEmpresaArgs_1 = require("./args/CreateEmpresaArgs");
const CreateManyEmpresaArgs_1 = require("./args/CreateManyEmpresaArgs");
const DeleteEmpresaArgs_1 = require("./args/DeleteEmpresaArgs");
const DeleteManyEmpresaArgs_1 = require("./args/DeleteManyEmpresaArgs");
const FindFirstEmpresaArgs_1 = require("./args/FindFirstEmpresaArgs");
const FindManyEmpresaArgs_1 = require("./args/FindManyEmpresaArgs");
const FindUniqueEmpresaArgs_1 = require("./args/FindUniqueEmpresaArgs");
const GroupByEmpresaArgs_1 = require("./args/GroupByEmpresaArgs");
const UpdateEmpresaArgs_1 = require("./args/UpdateEmpresaArgs");
const UpdateManyEmpresaArgs_1 = require("./args/UpdateManyEmpresaArgs");
const UpsertEmpresaArgs_1 = require("./args/UpsertEmpresaArgs");
const helpers_1 = require("../../../helpers");
const Empresa_1 = require("../../../models/Empresa");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateEmpresa_1 = require("../../outputs/AggregateEmpresa");
const EmpresaGroupBy_1 = require("../../outputs/EmpresaGroupBy");
let EmpresaCrudResolver = class EmpresaCrudResolver {
    async empresa(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).empresa.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstEmpresa(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).empresa.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async empresas(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).empresa.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createEmpresa(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).empresa.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyEmpresa(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).empresa.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteEmpresa(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).empresa.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateEmpresa(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).empresa.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyEmpresa(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).empresa.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyEmpresa(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).empresa.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertEmpresa(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).empresa.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateEmpresa(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).empresa.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByEmpresa(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).empresa.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Empresa_1.Empresa, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueEmpresaArgs_1.FindUniqueEmpresaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpresaCrudResolver.prototype, "empresa", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Empresa_1.Empresa, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstEmpresaArgs_1.FindFirstEmpresaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpresaCrudResolver.prototype, "findFirstEmpresa", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Empresa_1.Empresa], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyEmpresaArgs_1.FindManyEmpresaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpresaCrudResolver.prototype, "empresas", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Empresa_1.Empresa, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateEmpresaArgs_1.CreateEmpresaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpresaCrudResolver.prototype, "createEmpresa", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyEmpresaArgs_1.CreateManyEmpresaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpresaCrudResolver.prototype, "createManyEmpresa", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Empresa_1.Empresa, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteEmpresaArgs_1.DeleteEmpresaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpresaCrudResolver.prototype, "deleteEmpresa", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Empresa_1.Empresa, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateEmpresaArgs_1.UpdateEmpresaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpresaCrudResolver.prototype, "updateEmpresa", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyEmpresaArgs_1.DeleteManyEmpresaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpresaCrudResolver.prototype, "deleteManyEmpresa", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyEmpresaArgs_1.UpdateManyEmpresaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpresaCrudResolver.prototype, "updateManyEmpresa", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Empresa_1.Empresa, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertEmpresaArgs_1.UpsertEmpresaArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpresaCrudResolver.prototype, "upsertEmpresa", null);
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
], EmpresaCrudResolver.prototype, "aggregateEmpresa", null);
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
], EmpresaCrudResolver.prototype, "groupByEmpresa", null);
EmpresaCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Empresa_1.Empresa)
], EmpresaCrudResolver);
exports.EmpresaCrudResolver = EmpresaCrudResolver;
