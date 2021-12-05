import { EmpresaOrderByWithRelationInput } from "../../../inputs/EmpresaOrderByWithRelationInput";
import { EmpresaWhereInput } from "../../../inputs/EmpresaWhereInput";
import { EmpresaWhereUniqueInput } from "../../../inputs/EmpresaWhereUniqueInput";
export declare class AggregateEmpresaArgs {
    where?: EmpresaWhereInput | undefined;
    orderBy?: EmpresaOrderByWithRelationInput[] | undefined;
    cursor?: EmpresaWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
