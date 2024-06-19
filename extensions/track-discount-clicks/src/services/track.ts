export async function sendEventData(eventName: string) {
  const url = "https://prisma-node-express.vercel.app/api/v1/trackings";
  const body = {
    eventName: eventName,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Track HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Track Success:", data);
  } catch (error) {
    console.error("Track Error:", error);
  }
}