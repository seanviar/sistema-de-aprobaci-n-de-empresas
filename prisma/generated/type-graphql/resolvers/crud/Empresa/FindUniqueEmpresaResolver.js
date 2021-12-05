"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEmpresaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindUniqueEmpresaArgs_1 = require("./args/FindUniqueEmpresaArgs");
const Empresa_1 = require("../../../models/Empresa");
const helpers_1 = require("../../../helpers");
let FindUniqueEmpresaResolver = class FindUniqueEmpresaResolver {
    async empresa(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).empresa.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], FindUniqueEmpresaResolver.prototype, "empresa", null);
FindUniqueEmpresaResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Empresa_1.Empresa)
], FindUniqueEmpresaResolver);
exports.FindUniqueEmpresaResolver = FindUniqueEmpresaResolver;
