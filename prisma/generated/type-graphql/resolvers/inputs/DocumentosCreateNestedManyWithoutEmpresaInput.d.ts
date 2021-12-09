import { DocumentosCreateManyEmpresaInputEnvelope } from "../inputs/DocumentosCreateManyEmpresaInputEnvelope";
import { DocumentosCreateOrConnectWithoutEmpresaInput } from "../inputs/DocumentosCreateOrConnectWithoutEmpresaInput";
import { DocumentosCreateWithoutEmpresaInput } from "../inputs/DocumentosCreateWithoutEmpresaInput";
import { DocumentosWhereUniqueInput } from "../inputs/DocumentosWhereUniqueInput";
export declare class DocumentosCreateNestedManyWithoutEmpresaInput {
    create?: DocumentosCreateWithoutEmpresaInput[] | undefined;
    connectOrCreate?: DocumentosCreateOrConnectWithoutEmpresaInput[] | undefined;
    createMany?: DocumentosCreateManyEmpresaInputEnvelope | undefined;
    connect?: DocumentosWhereUniqueInput[] | undefined;
}
