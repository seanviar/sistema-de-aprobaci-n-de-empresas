import { GraphQLResolveInfo } from "graphql";
import { FindFirstEmpresaArgs } from "./args/FindFirstEmpresaArgs";
import { Empresa } from "../../../models/Empresa";
export declare class FindFirstEmpresaResolver {
    findFirstEmpresa(ctx: any, info: GraphQLResolveInfo, args: FindFirstEmpresaArgs): Promise<Empresa | null>;
}
