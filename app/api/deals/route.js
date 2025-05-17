import { openDb } from '@/lib/db';

export async function GET() {
  try {
    const db = await openDb();
    const rows = await db.all('SELECT * FROM deals_products');
    return Response.json(rows);
  } catch (error) {
    console.error("Deals API error:", error.message);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch deals', details: error.message }),
      { status: 500 }
    );
  }
}
