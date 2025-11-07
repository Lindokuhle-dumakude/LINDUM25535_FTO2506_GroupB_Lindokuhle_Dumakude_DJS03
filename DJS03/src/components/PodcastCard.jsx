import { formatDistanceToNow } from "date-fns";
import genres from "../data/genres";

/**
 * PodcastCard component renders a preview card for a single podcast.
 * @param {Object} props - Component props.
 * @param {Object} props.podcast - Podcast data object.
 * @returns {JSX.Element} A podcast preview card.
 */
function PodcastCard({ podcast }) {
  const { title, image, updated, genres: genreIds, seasons } = podcast;

  // Safely map genre IDs to their titles
  const genreNames = Array.isArray(genreIds)
    ? genreIds
        .map((id) => {
          const match = genres.find((genre) => genre.id === id);
          return match ? match.title : "Unknown";
        })
        .join(", ")
    : "No genres available";
}
