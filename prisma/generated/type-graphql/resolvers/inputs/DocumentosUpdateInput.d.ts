import { EmpresaUpdateOneRequiredWithoutDocumentosInput } from "../inputs/EmpresaUpdateOneRequiredWithoutDocumentosInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class DocumentosUpdateInput {
    nombre?: StringFieldUpdateOperationsInput | undefined;
    link?: StringFieldUpdateOperationsInput | undefined;
    empresa?: EmpresaUpdateOneRequiredWithoutDocumentosInput | undefined;
}
