import { PrismaClient } from '@prisma/client';
//hot reload fix on development server
const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === 'production') global.prismadb = client;

export default client;
