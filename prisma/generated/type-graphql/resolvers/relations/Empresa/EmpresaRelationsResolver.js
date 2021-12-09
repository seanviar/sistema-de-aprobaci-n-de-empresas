"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Documentos_1 = require("../../../models/Documentos");
const Empresa_1 = require("../../../models/Empresa");
const EmpresaDocumentosArgs_1 = require("./args/EmpresaDocumentosArgs");
const helpers_1 = require("../../../helpers");
let EmpresaRelationsResolver = class EmpresaRelationsResolver {
    async documentos(empresa, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).empresa.findUnique({
            where: {
                id: empresa.id,
            },
        }).documentos(args);
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => [Documentos_1.Documentos], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Empresa_1.Empresa, Object, EmpresaDocumentosArgs_1.EmpresaDocumentosArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpresaRelationsResolver.prototype, "documentos", null);
EmpresaRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Empresa_1.Empresa)
], EmpresaRelationsResolver);
exports.EmpresaRelationsResolver = EmpresaRelationsResolver;
