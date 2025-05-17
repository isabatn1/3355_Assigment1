import { openDb } from '@/lib/db';

export async function GET() {
  try {
    const db = await openDb();
    const rows = await db.all('SELECT * FROM slider_products');
    return Response.json(rows);
  } catch (error) {
    console.error("Slider API error:", error.message);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch slider products', details: error.message }),
      { status: 500 }
    );
  }
}
