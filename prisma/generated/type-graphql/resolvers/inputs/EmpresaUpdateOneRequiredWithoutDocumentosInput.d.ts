import { EmpresaCreateOrConnectWithoutDocumentosInput } from "../inputs/EmpresaCreateOrConnectWithoutDocumentosInput";
import { EmpresaCreateWithoutDocumentosInput } from "../inputs/EmpresaCreateWithoutDocumentosInput";
import { EmpresaUpdateWithoutDocumentosInput } from "../inputs/EmpresaUpdateWithoutDocumentosInput";
import { EmpresaUpsertWithoutDocumentosInput } from "../inputs/EmpresaUpsertWithoutDocumentosInput";
import { EmpresaWhereUniqueInput } from "../inputs/EmpresaWhereUniqueInput";
export declare class EmpresaUpdateOneRequiredWithoutDocumentosInput {
    create?: EmpresaCreateWithoutDocumentosInput | undefined;
    connectOrCreate?: EmpresaCreateOrConnectWithoutDocumentosInput | undefined;
    upsert?: EmpresaUpsertWithoutDocumentosInput | undefined;
    connect?: EmpresaWhereUniqueInput | undefined;
    update?: EmpresaUpdateWithoutDocumentosInput | undefined;
}
