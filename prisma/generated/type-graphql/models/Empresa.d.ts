import { Documentos } from "../models/Documentos";
import { EmpresaCount } from "../resolvers/outputs/EmpresaCount";
export declare class Empresa {
    id: string;
    nombre: string;
    razonSocial: string;
    tipoIdentificacion: string;
    numeroIdentificacion: string;
    numeroEmpleados: number;
    logo: string;
    estado: string;
    documentos?: Documentos[];
    _count: EmpresaCount;
}
