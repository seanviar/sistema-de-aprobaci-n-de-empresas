"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDocumentosResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByDocumentosArgs_1 = require("./args/GroupByDocumentosArgs");
const Documentos_1 = require("../../../models/Documentos");
const DocumentosGroupBy_1 = require("../../outputs/DocumentosGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByDocumentosResolver = class GroupByDocumentosResolver {
    async groupByDocumentos(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documentos.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
], GroupByDocumentosResolver.prototype, "groupByDocumentos", null);
GroupByDocumentosResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Documentos_1.Documentos)
], GroupByDocumentosResolver);
exports.GroupByDocumentosResolver = GroupByDocumentosResolver;
