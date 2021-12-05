import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class EmpresaScalarWhereWithAggregatesInput {
    AND?: EmpresaScalarWhereWithAggregatesInput[] | undefined;
    OR?: EmpresaScalarWhereWithAggregatesInput[] | undefined;
    NOT?: EmpresaScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    nombre?: StringWithAggregatesFilter | undefined;
    razonSocial?: StringWithAggregatesFilter | undefined;
    tipoIdentificacion?: StringWithAggregatesFilter | undefined;
    numeroIdentificacion?: StringWithAggregatesFilter | undefined;
    numeroEmpleados?: IntWithAggregatesFilter | undefined;
    logo?: StringWithAggregatesFilter | undefined;
    estado?: StringWithAggregatesFilter | undefined;
}
