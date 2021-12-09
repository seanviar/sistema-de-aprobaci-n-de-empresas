import { StringFilter } from "../inputs/StringFilter";
export declare class DocumentosScalarWhereInput {
    AND?: DocumentosScalarWhereInput[] | undefined;
    OR?: DocumentosScalarWhereInput[] | undefined;
    NOT?: DocumentosScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    nombre?: StringFilter | undefined;
    link?: StringFilter | undefined;
    empresaId?: StringFilter | undefined;
}
