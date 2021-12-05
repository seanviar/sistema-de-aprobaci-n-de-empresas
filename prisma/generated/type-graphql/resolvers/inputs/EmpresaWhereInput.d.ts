import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class EmpresaWhereInput {
    AND?: EmpresaWhereInput[] | undefined;
    OR?: EmpresaWhereInput[] | undefined;
    NOT?: EmpresaWhereInput[] | undefined;
    id?: StringFilter | undefined;
    nombre?: StringFilter | undefined;
    razonSocial?: StringFilter | undefined;
    tipoIdentificacion?: StringFilter | undefined;
    numeroIdentificacion?: StringFilter | undefined;
    numeroEmpleados?: IntFilter | undefined;
    logo?: StringFilter | undefined;
    estado?: StringFilter | undefined;
}
