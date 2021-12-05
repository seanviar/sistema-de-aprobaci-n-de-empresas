import { GraphQLResolveInfo } from "graphql";
import { FindManyEmpresaArgs } from "./args/FindManyEmpresaArgs";
import { Empresa } from "../../../models/Empresa";
export declare class FindManyEmpresaResolver {
    empresas(ctx: any, info: GraphQLResolveInfo, args: FindManyEmpresaArgs): Promise<Empresa[]>;
}
