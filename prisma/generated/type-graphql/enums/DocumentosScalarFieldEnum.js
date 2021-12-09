"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var DocumentosScalarFieldEnum;
(function (DocumentosScalarFieldEnum) {
    DocumentosScalarFieldEnum["id"] = "id";
    DocumentosScalarFieldEnum["nombre"] = "nombre";
    DocumentosScalarFieldEnum["link"] = "link";
    DocumentosScalarFieldEnum["empresaId"] = "empresaId";
})(DocumentosScalarFieldEnum = exports.DocumentosScalarFieldEnum || (exports.DocumentosScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(DocumentosScalarFieldEnum, {
    name: "DocumentosScalarFieldEnum",
    description: undefined,
});
