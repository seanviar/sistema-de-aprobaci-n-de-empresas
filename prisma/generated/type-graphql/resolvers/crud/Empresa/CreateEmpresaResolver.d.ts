import { GraphQLResolveInfo } from "graphql";
import { CreateEmpresaArgs } from "./args/CreateEmpresaArgs";
import { Empresa } from "../../../models/Empresa";
export declare class CreateEmpresaResolver {
    createEmpresa(ctx: any, info: GraphQLResolveInfo, args: CreateEmpresaArgs): Promise<Empresa>;
}
