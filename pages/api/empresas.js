import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();


const rutataEmpresas = async (req , res) => {
    if (req.method === 'GET' ) {
        const empresas = await prisma.empresa.findMany();
        res.status(200).json({empresas})
    }
};

export default rutataEmpresas;