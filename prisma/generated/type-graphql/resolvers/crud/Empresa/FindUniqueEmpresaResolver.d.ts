import { GraphQLResolveInfo } from "graphql";
import { FindUniqueEmpresaArgs } from "./args/FindUniqueEmpresaArgs";
import { Empresa } from "../../../models/Empresa";
export declare class FindUniqueEmpresaResolver {
    empresa(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEmpresaArgs): Promise<Empresa | null>;
}
