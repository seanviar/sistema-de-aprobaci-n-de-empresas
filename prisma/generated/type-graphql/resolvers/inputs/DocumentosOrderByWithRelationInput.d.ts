import { EmpresaOrderByWithRelationInput } from "../inputs/EmpresaOrderByWithRelationInput";
export declare class DocumentosOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    empresa?: EmpresaOrderByWithRelationInput | undefined;
    nombre?: "asc" | "desc" | undefined;
    link?: "asc" | "desc" | undefined;
    empresaId?: "asc" | "desc" | undefined;
}
