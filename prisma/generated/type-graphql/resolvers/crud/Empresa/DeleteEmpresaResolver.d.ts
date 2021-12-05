import { GraphQLResolveInfo } from "graphql";
import { DeleteEmpresaArgs } from "./args/DeleteEmpresaArgs";
import { Empresa } from "../../../models/Empresa";
export declare class DeleteEmpresaResolver {
    deleteEmpresa(ctx: any, info: GraphQLResolveInfo, args: DeleteEmpresaArgs): Promise<Empresa | null>;
}
