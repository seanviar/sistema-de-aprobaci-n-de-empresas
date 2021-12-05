"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmpresaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateEmpresaArgs_1 = require("./args/UpdateEmpresaArgs");
const Empresa_1 = require("../../../models/Empresa");
const helpers_1 = require("../../../helpers");
let UpdateEmpresaResolver = class UpdateEmpresaResolver {
    async updateEmpresa(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).empresa.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateEmpresaResolver.prototype, "updateEmpresa", null);
UpdateEmpresaResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Empresa_1.Empresa)
], UpdateEmpresaResolver);
exports.UpdateEmpresaResolver = UpdateEmpresaResolver;
