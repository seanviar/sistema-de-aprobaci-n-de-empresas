import { DocumentosCreateNestedManyWithoutEmpresaInput } from "../inputs/DocumentosCreateNestedManyWithoutEmpresaInput";
export declare class EmpresaCreateInput {
    id?: string | undefined;
    nombre: string;
    razonSocial: string;
    tipoIdentificacion: string;
    numeroIdentificacion: string;
    numeroEmpleados: number;
    logo: string;
    estado: string;
    documentos?: DocumentosCreateNestedManyWithoutEmpresaInput | undefined;
}
