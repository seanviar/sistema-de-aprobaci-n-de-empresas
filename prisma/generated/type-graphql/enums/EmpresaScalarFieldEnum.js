"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
var EmpresaScalarFieldEnum;
(function (EmpresaScalarFieldEnum) {
    EmpresaScalarFieldEnum["id"] = "id";
    EmpresaScalarFieldEnum["nombre"] = "nombre";
    EmpresaScalarFieldEnum["razonSocial"] = "razonSocial";
    EmpresaScalarFieldEnum["tipoIdentificacion"] = "tipoIdentificacion";
    EmpresaScalarFieldEnum["numeroIdentificacion"] = "numeroIdentificacion";
    EmpresaScalarFieldEnum["numeroEmpleados"] = "numeroEmpleados";
    EmpresaScalarFieldEnum["logo"] = "logo";
    EmpresaScalarFieldEnum["estado"] = "estado";
})(EmpresaScalarFieldEnum = exports.EmpresaScalarFieldEnum || (exports.EmpresaScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(EmpresaScalarFieldEnum, {
    name: "EmpresaScalarFieldEnum",
    description: undefined,
});
