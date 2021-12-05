import { GraphQLResolveInfo } from "graphql";
import { UpdateEmpresaArgs } from "./args/UpdateEmpresaArgs";
import { Empresa } from "../../../models/Empresa";
export declare class UpdateEmpresaResolver {
    updateEmpresa(ctx: any, info: GraphQLResolveInfo, args: UpdateEmpresaArgs): Promise<Empresa | null>;
}
