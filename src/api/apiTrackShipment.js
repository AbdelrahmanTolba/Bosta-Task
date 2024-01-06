const API_URL = "https://tracking.bosta.co/shipments/track";

export async function fetchTrackingData(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error(`Couldn't find track #${id}`);
  }
  const data = await response.json();
  return data;
}
