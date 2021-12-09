import { EmpresaRelationFilter } from "../inputs/EmpresaRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class DocumentosWhereInput {
    AND?: DocumentosWhereInput[] | undefined;
    OR?: DocumentosWhereInput[] | undefined;
    NOT?: DocumentosWhereInput[] | undefined;
    id?: StringFilter | undefined;
    empresa?: EmpresaRelationFilter | undefined;
    nombre?: StringFilter | undefined;
    link?: StringFilter | undefined;
    empresaId?: StringFilter | undefined;
}
