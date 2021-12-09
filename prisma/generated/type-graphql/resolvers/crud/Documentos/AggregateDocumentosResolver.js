"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDocumentosResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateDocumentosArgs_1 = require("./args/AggregateDocumentosArgs");
const Documentos_1 = require("../../../models/Documentos");
const AggregateDocumentos_1 = require("../../outputs/AggregateDocumentos");
const helpers_1 = require("../../../helpers");
let AggregateDocumentosResolver = class AggregateDocumentosResolver {
    async aggregateDocumentos(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).documentos.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
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
], AggregateDocumentosResolver.prototype, "aggregateDocumentos", null);
AggregateDocumentosResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Documentos_1.Documentos)
], AggregateDocumentosResolver);
exports.AggregateDocumentosResolver = AggregateDocumentosResolver;
