import { useEffect, useState } from "react";
import { getPosterUrls } from "../../shared/api";

export default function Posters() {
  const [posterUrls, setPosterUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosters() {
      try {
        setLoading(true);
        const urls = await getPosterUrls();
        setPosterUrls(urls);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load posters");
        console.error("Error fetching posters:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosters();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (posterUrls.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-600">No posters found</p>
      </div>
    );
  }

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {posterUrls.map((url, index) => (
        <div
          key={index}
          className="group relative overflow-hidden break-inside-avoid"
        >
          <img
            src={url}
            alt={`Poster ${index + 1}`}
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
