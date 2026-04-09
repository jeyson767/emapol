export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import sharp from 'sharp';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const imageName = searchParams.get('image');

    if (!imageName) {
        return new NextResponse('Falta el nombre de la imagen', { status: 400 });
    }

    try {
        // 1. Construir rutas de archivos
        const imagePath = path.join(process.cwd(), 'public/images', imageName);
        const logoPath = path.join(process.cwd(), 'public/images/logobnE.png');

        // Leer archivos
        const imageBuffer = await fs.readFile(imagePath);
        const logoBuffer = await fs.readFile(logoPath);

        // 2. Procesar el logo para que sea una verdadera marca de agua
        // Redimensionamos y aplicamos un canal alpha (transparencia) al 30%
        const watermark = await sharp(logoBuffer)
            .resize(300) // Un poco más grande para que se note
            .composite([{
                input: Buffer.from([255, 255, 255, 77]), // 77 es ~30% de 255 en transparencia
                raw: { width: 1, height: 1, channels: 4 },
                tile: true,
                blend: 'dest-in'
            }])
            .toBuffer();

        // 3. Fusionar la imagen principal con la marca de agua
        const outputBuffer = await sharp(imageBuffer)
            .composite([
                {
                    input: watermark,
                    gravity: 'center', // O puedes usar 'southeast' para la esquina inferior derecha
                    blend: 'over'
                }
            ])
            .jpeg({ quality: 80 }) // Comprimimos un poco para mejorar la velocidad
            .toBuffer();

        // 4. Retornar la respuesta
        return new NextResponse(new Uint8Array(outputBuffer), {
            headers: {
                'Content-Type': 'image/jpeg',
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });

    } catch (error: any) {
        console.error("Error en Sharp:", error);
        return new NextResponse(`Error al procesar la imagen: ${error.message}`, { status: 500 });
    }
}