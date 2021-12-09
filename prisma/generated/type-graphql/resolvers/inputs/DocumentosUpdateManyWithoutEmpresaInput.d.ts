import { DocumentosCreateManyEmpresaInputEnvelope } from "../inputs/DocumentosCreateManyEmpresaInputEnvelope";
import { DocumentosCreateOrConnectWithoutEmpresaInput } from "../inputs/DocumentosCreateOrConnectWithoutEmpresaInput";
import { DocumentosCreateWithoutEmpresaInput } from "../inputs/DocumentosCreateWithoutEmpresaInput";
import { DocumentosScalarWhereInput } from "../inputs/DocumentosScalarWhereInput";
import { DocumentosUpdateManyWithWhereWithoutEmpresaInput } from "../inputs/DocumentosUpdateManyWithWhereWithoutEmpresaInput";
import { DocumentosUpdateWithWhereUniqueWithoutEmpresaInput } from "../inputs/DocumentosUpdateWithWhereUniqueWithoutEmpresaInput";
import { DocumentosUpsertWithWhereUniqueWithoutEmpresaInput } from "../inputs/DocumentosUpsertWithWhereUniqueWithoutEmpresaInput";
import { DocumentosWhereUniqueInput } from "../inputs/DocumentosWhereUniqueInput";
export declare class DocumentosUpdateManyWithoutEmpresaInput {
    create?: DocumentosCreateWithoutEmpresaInput[] | undefined;
    connectOrCreate?: DocumentosCreateOrConnectWithoutEmpresaInput[] | undefined;
    upsert?: DocumentosUpsertWithWhereUniqueWithoutEmpresaInput[] | undefined;
    createMany?: DocumentosCreateManyEmpresaInputEnvelope | undefined;
    set?: DocumentosWhereUniqueInput[] | undefined;
    disconnect?: DocumentosWhereUniqueInput[] | undefined;
    delete?: DocumentosWhereUniqueInput[] | undefined;
    connect?: DocumentosWhereUniqueInput[] | undefined;
    update?: DocumentosUpdateWithWhereUniqueWithoutEmpresaInput[] | undefined;
    updateMany?: DocumentosUpdateManyWithWhereWithoutEmpresaInput[] | undefined;
    deleteMany?: DocumentosScalarWhereInput[] | undefined;
}
