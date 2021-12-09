"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyDocumentosResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindManyDocumentosArgs_1 = require("./args/FindManyDocumentosArgs");
const Documentos_1 = require("../../../models/Documentos");
const helpers_1 = require("../../../helpers");
let FindManyDocumentosResolver = class FindManyDocumentosResolver {
    async findManyDocumentos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documentos.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindManyDocumentosResolver.prototype, "findManyDocumentos", null);
FindManyDocumentosResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Documentos_1.Documentos)
], FindManyDocumentosResolver);
exports.FindManyDocumentosResolver = FindManyDocumentosResolver;
