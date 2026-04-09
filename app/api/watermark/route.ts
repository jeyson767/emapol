import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import sharp from 'sharp';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const imageName = searchParams.get('image');

    if (!imageName) return new NextResponse('Falta el nombre de la imagen', { status: 400 });

    try {
        // Rutas basadas en tu estructura de carpetas
        const imagePath = path.join(process.cwd(), 'public/images', imageName);
        const logoPath = path.join(process.cwd(), 'public/images/logobn.png');

        const imageBuffer = await fs.readFile(imagePath);
        const logoBuffer = await fs.readFile(logoPath);

        // 1. Primero procesamos el logo para que tenga transparencia y un tamaño adecuado
        const processedLogo = await sharp(logoBuffer)
            .resize({ width: 200 }) // Ajusta este valor (200px) según qué tan grande quieras el logo
            .ensureAlpha(0.3)      // Esto le da una opacidad del 30% (marca de agua)
            .toBuffer();

        // 2. Fusionamos el producto con el logo procesado
        const outputBuffer = await sharp(imageBuffer)
            .composite([
                {
                    input: processedLogo,
                    gravity: 'center', // Lo pone al centro del repuesto
                    blend: 'over'
                }
            ])
            .toBuffer();

        return new NextResponse(new Uint8Array(outputBuffer), {
            headers: {
                'Content-Type': 'image/jpeg',
                'Cache-Control': 'public, max-age=31536000, immutable'
            },
        });
    } catch (error) {
        console.error("Error en Sharp:", error);
        return new NextResponse('Error al procesar la imagen', { status: 500 });
    }
}