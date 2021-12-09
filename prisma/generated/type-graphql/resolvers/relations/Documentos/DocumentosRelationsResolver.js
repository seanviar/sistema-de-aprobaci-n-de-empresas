"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Documentos_1 = require("../../../models/Documentos");
const Empresa_1 = require("../../../models/Empresa");
const helpers_1 = require("../../../helpers");
let DocumentosRelationsResolver = class DocumentosRelationsResolver {
    async empresa(documentos, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).documentos.findUnique({
            where: {
                id: documentos.id,
            },
        }).empresa({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => Empresa_1.Empresa, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Documentos_1.Documentos, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DocumentosRelationsResolver.prototype, "empresa", null);
DocumentosRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Documentos_1.Documentos)
], DocumentosRelationsResolver);
exports.DocumentosRelationsResolver = DocumentosRelationsResolver;
