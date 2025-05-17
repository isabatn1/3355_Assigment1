import { openDb } from '@/lib/db';

export async function GET() {
  const db = await openDb();
  const rows = await db.all('SELECT * FROM quicklinks');
  return Response.json(rows);
  
}
