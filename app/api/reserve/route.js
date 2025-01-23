// app/api/reserve/route.js
export async function POST(req) {
  const { name, email, people, date, time } = await req.json();

  // Simple validation
  if (!name || !email || !people || !date || !time) {
    return new Response(
      JSON.stringify({ success: false, message: 'All fields are required.' }),
      { status: 400 }
    );
  }

  // Here you would typically save the reservation to a database
  console.log('New Reservation:', { name, email, people, date, time });

  // Send a success response
  return new Response(
    JSON.stringify({ success: true }),
    { status: 200 }
  );
}
