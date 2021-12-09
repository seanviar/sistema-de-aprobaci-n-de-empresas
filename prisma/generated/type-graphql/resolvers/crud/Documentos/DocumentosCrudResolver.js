"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateDocumentosArgs_1 = require("./args/AggregateDocumentosArgs");
const CreateDocumentosArgs_1 = require("./args/CreateDocumentosArgs");
const CreateManyDocumentosArgs_1 = require("./args/CreateManyDocumentosArgs");
const DeleteDocumentosArgs_1 = require("./args/DeleteDocumentosArgs");
const DeleteManyDocumentosArgs_1 = require("./args/DeleteManyDocumentosArgs");
const FindFirstDocumentosArgs_1 = require("./args/FindFirstDocumentosArgs");
const FindManyDocumentosArgs_1 = require("./args/FindManyDocumentosArgs");
const FindUniqueDocumentosArgs_1 = require("./args/FindUniqueDocumentosArgs");
const GroupByDocumentosArgs_1 = require("./args/GroupByDocumentosArgs");
const UpdateDocumentosArgs_1 = require("./args/UpdateDocumentosArgs");
const UpdateManyDocumentosArgs_1 = require("./args/UpdateManyDocumentosArgs");
const UpsertDocumentosArgs_1 = require("./args/UpsertDocumentosArgs");
const helpers_1 = require("../../../helpers");
const Documentos_1 = require("../../../models/Documentos");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateDocumentos_1 = require("../../outputs/AggregateDocumentos");
const DocumentosGroupBy_1 = require("../../outputs/DocumentosGroupBy");
let DocumentosCrudResolver = class DocumentosCrudResolver {
    async findUniqueDocumentos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documentos.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDocumentos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documentos.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyDocumentos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documentos.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createDocumentos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documentos.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyDocumentos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documentos.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteDocumentos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documentos.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateDocumentos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documentos.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyDocumentos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documentos.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyDocumentos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documentos.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertDocumentos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documentos.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateDocumentos(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).documentos.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByDocumentos(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documentos.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Documentos_1.Documentos, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueDocumentosArgs_1.FindUniqueDocumentosArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentosCrudResolver.prototype, "findUniqueDocumentos", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Documentos_1.Documentos, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstDocumentosArgs_1.FindFirstDocumentosArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentosCrudResolver.prototype, "findFirstDocumentos", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Documentos_1.Documentos], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyDocumentosArgs_1.FindManyDocumentosArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentosCrudResolver.prototype, "findManyDocumentos", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Documentos_1.Documentos, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateDocumentosArgs_1.CreateDocumentosArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentosCrudResolver.prototype, "createDocumentos", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyDocumentosArgs_1.CreateManyDocumentosArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentosCrudResolver.prototype, "createManyDocumentos", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Documentos_1.Documentos, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteDocumentosArgs_1.DeleteDocumentosArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentosCrudResolver.prototype, "deleteDocumentos", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Documentos_1.Documentos, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateDocumentosArgs_1.UpdateDocumentosArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentosCrudResolver.prototype, "updateDocumentos", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyDocumentosArgs_1.DeleteManyDocumentosArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentosCrudResolver.prototype, "deleteManyDocumentos", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyDocumentosArgs_1.UpdateManyDocumentosArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentosCrudResolver.prototype, "updateManyDocumentos", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Documentos_1.Documentos, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertDocumentosArgs_1.UpsertDocumentosArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentosCrudResolver.prototype, "upsertDocumentos", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateDocumentos_1.AggregateDocumentos, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateDocumentosArgs_1.AggregateDocumentosArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentosCrudResolver.prototype, "aggregateDocumentos", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [DocumentosGroupBy_1.DocumentosGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByDocumentosArgs_1.GroupByDocumentosArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentosCrudResolver.prototype, "groupByDocumentos", null);
DocumentosCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Documentos_1.Documentos)
], DocumentosCrudResolver);
exports.DocumentosCrudResolver = DocumentosCrudResolver;
