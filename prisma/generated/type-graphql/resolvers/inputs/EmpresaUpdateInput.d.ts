import { DocumentosUpdateManyWithoutEmpresaInput } from "../inputs/DocumentosUpdateManyWithoutEmpresaInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class EmpresaUpdateInput {
    nombre?: StringFieldUpdateOperationsInput | undefined;
    razonSocial?: StringFieldUpdateOperationsInput | undefined;
    tipoIdentificacion?: StringFieldUpdateOperationsInput | undefined;
    numeroIdentificacion?: StringFieldUpdateOperationsInput | undefined;
    numeroEmpleados?: IntFieldUpdateOperationsInput | undefined;
    logo?: StringFieldUpdateOperationsInput | undefined;
    estado?: StringFieldUpdateOperationsInput | undefined;
    documentos?: DocumentosUpdateManyWithoutEmpresaInput | undefined;
}
