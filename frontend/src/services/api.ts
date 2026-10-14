// Only public configuration belongs in Vite environment variables.
const baseUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, "");
export async function getBackendHealth(): Promise<{
  status: string;
  database: string;
}> {
  if (!baseUrl) throw new Error("Backend URL is not configured");
  const response = await fetch(`${baseUrl}/api/health`);
  if (!response.ok) throw new Error("Backend health request failed");
  return response.json();
}
