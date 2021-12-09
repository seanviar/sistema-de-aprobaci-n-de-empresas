"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = (0, tslib_1.__importStar)(require("tslib"));
const crudResolvers = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = (0, tslib_1.__importStar)(require("./resolvers/crud/args.index"));
const actionResolvers = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = (0, tslib_1.__importStar)(require("./resolvers/relations/resolvers.index"));
const models = (0, tslib_1.__importStar)(require("./models"));
const outputTypes = (0, tslib_1.__importStar)(require("./resolvers/outputs"));
const inputTypes = (0, tslib_1.__importStar)(require("./resolvers/inputs"));
const crudResolversMap = {
    Empresa: crudResolvers.EmpresaCrudResolver,
    Documentos: crudResolvers.DocumentosCrudResolver
};
const actionResolversMap = {
    Empresa: {
        empresa: actionResolvers.FindUniqueEmpresaResolver,
        findFirstEmpresa: actionResolvers.FindFirstEmpresaResolver,
        empresas: actionResolvers.FindManyEmpresaResolver,
        createEmpresa: actionResolvers.CreateEmpresaResolver,
        createManyEmpresa: actionResolvers.CreateManyEmpresaResolver,
        deleteEmpresa: actionResolvers.DeleteEmpresaResolver,
        updateEmpresa: actionResolvers.UpdateEmpresaResolver,
        deleteManyEmpresa: actionResolvers.DeleteManyEmpresaResolver,
        updateManyEmpresa: actionResolvers.UpdateManyEmpresaResolver,
        upsertEmpresa: actionResolvers.UpsertEmpresaResolver,
        aggregateEmpresa: actionResolvers.AggregateEmpresaResolver,
        groupByEmpresa: actionResolvers.GroupByEmpresaResolver
    },
    Documentos: {
        findUniqueDocumentos: actionResolvers.FindUniqueDocumentosResolver,
        findFirstDocumentos: actionResolvers.FindFirstDocumentosResolver,
        findManyDocumentos: actionResolvers.FindManyDocumentosResolver,
        createDocumentos: actionResolvers.CreateDocumentosResolver,
        createManyDocumentos: actionResolvers.CreateManyDocumentosResolver,
        deleteDocumentos: actionResolvers.DeleteDocumentosResolver,
        updateDocumentos: actionResolvers.UpdateDocumentosResolver,
        deleteManyDocumentos: actionResolvers.DeleteManyDocumentosResolver,
        updateManyDocumentos: actionResolvers.UpdateManyDocumentosResolver,
        upsertDocumentos: actionResolvers.UpsertDocumentosResolver,
        aggregateDocumentos: actionResolvers.AggregateDocumentosResolver,
        groupByDocumentos: actionResolvers.GroupByDocumentosResolver
    }
};
const crudResolversInfo = {
    Empresa: ["empresa", "findFirstEmpresa", "empresas", "createEmpresa", "createManyEmpresa", "deleteEmpresa", "updateEmpresa", "deleteManyEmpresa", "updateManyEmpresa", "upsertEmpresa", "aggregateEmpresa", "groupByEmpresa"],
    Documentos: ["findUniqueDocumentos", "findFirstDocumentos", "findManyDocumentos", "createDocumentos", "createManyDocumentos", "deleteDocumentos", "updateDocumentos", "deleteManyDocumentos", "updateManyDocumentos", "upsertDocumentos", "aggregateDocumentos", "groupByDocumentos"]
};
const argsInfo = {
    FindUniqueEmpresaArgs: ["where"],
    FindFirstEmpresaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyEmpresaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateEmpresaArgs: ["data"],
    CreateManyEmpresaArgs: ["data"],
    DeleteEmpresaArgs: ["where"],
    UpdateEmpresaArgs: ["data", "where"],
    DeleteManyEmpresaArgs: ["where"],
    UpdateManyEmpresaArgs: ["data", "where"],
    UpsertEmpresaArgs: ["where", "create", "update"],
    AggregateEmpresaArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByEmpresaArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueDocumentosArgs: ["where"],
    FindFirstDocumentosArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyDocumentosArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateDocumentosArgs: ["data"],
    CreateManyDocumentosArgs: ["data"],
    DeleteDocumentosArgs: ["where"],
    UpdateDocumentosArgs: ["data", "where"],
    DeleteManyDocumentosArgs: ["where"],
    UpdateManyDocumentosArgs: ["data", "where"],
    UpsertDocumentosArgs: ["where", "create", "update"],
    AggregateDocumentosArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByDocumentosArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Empresa: relationResolvers.EmpresaRelationsResolver,
    Documentos: relationResolvers.DocumentosRelationsResolver
};
const relationResolversInfo = {
    Empresa: ["documentos"],
    Documentos: ["empresa"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Empresa: ["id", "nombre", "razonSocial", "tipoIdentificacion", "numeroIdentificacion", "numeroEmpleados", "logo", "estado"],
    Documentos: ["id", "nombre", "link", "empresaId"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateEmpresa: ["_count", "_avg", "_sum", "_min", "_max"],
    EmpresaGroupBy: ["id", "nombre", "razonSocial", "tipoIdentificacion", "numeroIdentificacion", "numeroEmpleados", "logo", "estado", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateDocumentos: ["_count", "_min", "_max"],
    DocumentosGroupBy: ["id", "nombre", "link", "empresaId", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    EmpresaCount: ["documentos"],
    EmpresaCountAggregate: ["id", "nombre", "razonSocial", "tipoIdentificacion", "numeroIdentificacion", "numeroEmpleados", "logo", "estado", "_all"],
    EmpresaAvgAggregate: ["numeroEmpleados"],
    EmpresaSumAggregate: ["numeroEmpleados"],
    EmpresaMinAggregate: ["id", "nombre", "razonSocial", "tipoIdentificacion", "numeroIdentificacion", "numeroEmpleados", "logo", "estado"],
    EmpresaMaxAggregate: ["id", "nombre", "razonSocial", "tipoIdentificacion", "numeroIdentificacion", "numeroEmpleados", "logo", "estado"],
    DocumentosCountAggregate: ["id", "nombre", "link", "empresaId", "_all"],
    DocumentosMinAggregate: ["id", "nombre", "link", "empresaId"],
    DocumentosMaxAggregate: ["id", "nombre", "link", "empresaId"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    EmpresaWhereInput: ["AND", "OR", "NOT", "id", "nombre", "razonSocial", "tipoIdentificacion", "numeroIdentificacion", "numeroEmpleados", "logo", "estado", "documentos"],
    EmpresaOrderByWithRelationInput: ["id", "nombre", "razonSocial", "tipoIdentificacion", "numeroIdentificacion", "numeroEmpleados", "logo", "estado", "documentos"],
    EmpresaWhereUniqueInput: ["id"],
    EmpresaOrderByWithAggregationInput: ["id", "nombre", "razonSocial", "tipoIdentificacion", "numeroIdentificacion", "numeroEmpleados", "logo", "estado", "_count", "_avg", "_max", "_min", "_sum"],
    EmpresaScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nombre", "razonSocial", "tipoIdentificacion", "numeroIdentificacion", "numeroEmpleados", "logo", "estado"],
    DocumentosWhereInput: ["AND", "OR", "NOT", "id", "empresa", "nombre", "link", "empresaId"],
    DocumentosOrderByWithRelationInput: ["id", "empresa", "nombre", "link", "empresaId"],
    DocumentosWhereUniqueInput: ["id"],
    DocumentosOrderByWithAggregationInput: ["id", "nombre", "link", "empresaId", "_count", "_max", "_min"],
    DocumentosScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nombre", "link", "empresaId"],
    EmpresaCreateInput: ["id", "nombre", "razonSocial", "tipoIdentificacion", "numeroIdentificacion", "numeroEmpleados", "logo", "estado", "documentos"],
    EmpresaUpdateInput: ["nombre", "razonSocial", "tipoIdentificacion", "numeroIdentificacion", "numeroEmpleados", "logo", "estado", "documentos"],
    EmpresaCreateManyInput: ["id", "nombre", "razonSocial", "tipoIdentificacion", "numeroIdentificacion", "numeroEmpleados", "logo", "estado"],
    EmpresaUpdateManyMutationInput: ["nombre", "razonSocial", "tipoIdentificacion", "numeroIdentificacion", "numeroEmpleados", "logo", "estado"],
    DocumentosCreateInput: ["id", "nombre", "link", "empresa"],
    DocumentosUpdateInput: ["nombre", "link", "empresa"],
    DocumentosCreateManyInput: ["id", "nombre", "link", "empresaId"],
    DocumentosUpdateManyMutationInput: ["nombre", "link"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DocumentosListRelationFilter: ["every", "some", "none"],
    DocumentosOrderByRelationAggregateInput: ["_count"],
    EmpresaCountOrderByAggregateInput: ["id", "nombre", "razonSocial", "tipoIdentificacion", "numeroIdentificacion", "numeroEmpleados", "logo", "estado"],
    EmpresaAvgOrderByAggregateInput: ["numeroEmpleados"],
    EmpresaMaxOrderByAggregateInput: ["id", "nombre", "razonSocial", "tipoIdentificacion", "numeroIdentificacion", "numeroEmpleados", "logo", "estado"],
    EmpresaMinOrderByAggregateInput: ["id", "nombre", "razonSocial", "tipoIdentificacion", "numeroIdentificacion", "numeroEmpleados", "logo", "estado"],
    EmpresaSumOrderByAggregateInput: ["numeroEmpleados"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    EmpresaRelationFilter: ["is", "isNot"],
    DocumentosCountOrderByAggregateInput: ["id", "nombre", "link", "empresaId"],
    DocumentosMaxOrderByAggregateInput: ["id", "nombre", "link", "empresaId"],
    DocumentosMinOrderByAggregateInput: ["id", "nombre", "link", "empresaId"],
    DocumentosCreateNestedManyWithoutEmpresaInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    DocumentosUpdateManyWithoutEmpresaInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    EmpresaCreateNestedOneWithoutDocumentosInput: ["create", "connectOrCreate", "connect"],
    EmpresaUpdateOneRequiredWithoutDocumentosInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DocumentosCreateWithoutEmpresaInput: ["id", "nombre", "link"],
    DocumentosCreateOrConnectWithoutEmpresaInput: ["where", "create"],
    DocumentosCreateManyEmpresaInputEnvelope: ["data"],
    DocumentosUpsertWithWhereUniqueWithoutEmpresaInput: ["where", "update", "create"],
    DocumentosUpdateWithWhereUniqueWithoutEmpresaInput: ["where", "data"],
    DocumentosUpdateManyWithWhereWithoutEmpresaInput: ["where", "data"],
    DocumentosScalarWhereInput: ["AND", "OR", "NOT", "id", "nombre", "link", "empresaId"],
    EmpresaCreateWithoutDocumentosInput: ["id", "nombre", "razonSocial", "tipoIdentificacion", "numeroIdentificacion", "numeroEmpleados", "logo", "estado"],
    EmpresaCreateOrConnectWithoutDocumentosInput: ["where", "create"],
    EmpresaUpsertWithoutDocumentosInput: ["update", "create"],
    EmpresaUpdateWithoutDocumentosInput: ["nombre", "razonSocial", "tipoIdentificacion", "numeroIdentificacion", "numeroEmpleados", "logo", "estado"],
    DocumentosCreateManyEmpresaInput: ["id", "nombre", "link"],
    DocumentosUpdateWithoutEmpresaInput: ["nombre", "link"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
