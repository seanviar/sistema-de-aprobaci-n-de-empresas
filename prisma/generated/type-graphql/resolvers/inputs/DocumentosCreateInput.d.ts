import { EmpresaCreateNestedOneWithoutDocumentosInput } from "../inputs/EmpresaCreateNestedOneWithoutDocumentosInput";
export declare class DocumentosCreateInput {
    id?: string | undefined;
    nombre: string;
    link: string;
    empresa: EmpresaCreateNestedOneWithoutDocumentosInput;
}
