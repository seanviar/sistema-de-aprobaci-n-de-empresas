"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDocumentosResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateDocumentosArgs_1 = require("./args/CreateDocumentosArgs");
const Documentos_1 = require("../../../models/Documentos");
const helpers_1 = require("../../../helpers");
let CreateDocumentosResolver = class CreateDocumentosResolver {
    async createDocumentos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).documentos.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], CreateDocumentosResolver.prototype, "createDocumentos", null);
CreateDocumentosResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Documentos_1.Documentos)
], CreateDocumentosResolver);
exports.CreateDocumentosResolver = CreateDocumentosResolver;
