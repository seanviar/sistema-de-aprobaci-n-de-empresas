import { EmpresaCreateOrConnectWithoutDocumentosInput } from "../inputs/EmpresaCreateOrConnectWithoutDocumentosInput";
import { EmpresaCreateWithoutDocumentosInput } from "../inputs/EmpresaCreateWithoutDocumentosInput";
import { EmpresaWhereUniqueInput } from "../inputs/EmpresaWhereUniqueInput";
export declare class EmpresaCreateNestedOneWithoutDocumentosInput {
    create?: EmpresaCreateWithoutDocumentosInput | undefined;
    connectOrCreate?: EmpresaCreateOrConnectWithoutDocumentosInput | undefined;
    connect?: EmpresaWhereUniqueInput | undefined;
}
