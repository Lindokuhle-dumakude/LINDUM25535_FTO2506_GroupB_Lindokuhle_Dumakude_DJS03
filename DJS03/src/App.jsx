import { useState, useEffect } from "react";
import PodcastCard from "./components/PodcastCard";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";

/**
 * @component App
 * @description
 * Main application component responsible for fetching and displaying podcasts.
 * It handles loading, error, and empty data states.
 *
 * @returns {JSX.Element} The rendered podcast grid or a loading/error message.
 */
function App() {
  /**
   * @state {Array} podcasts - List of podcast data fetched from the API.
   */
  const [podcasts, setPodcasts] = useState([]);

  /**
   * @state {boolean} loading - Tracks whether the API request is in progress.
   */
  const [loading, setLoading] = useState(true);

  /**
   * @state {string|null} error - Stores any error message that occurs during fetching.
   */
  const [error, setError] = useState(null);

  /**
   * useEffect hook that runs once when the component mounts.
   * It fetches podcast data from the API and updates the component state.
   */
  useEffect(() => {
    /**
     * Fetches podcast data asynchronously.
     * Handles success, error, and cleanup of the loading state.
     *
     * @async
     * @function fetchPodcasts
     * @returns {Promise<void>}
     */
    async function fetchPodcasts() {
      try {
        const response = await fetch("https://podcast-api.netlify.app/");
        if (!response.ok) throw new Error("Failed to fetch podcasts");
        const data = await response.json();
        setPodcasts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPodcasts();
  }, []);

  // Conditional rendering: handle different states before displaying the main UI
  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (podcasts.length === 0) return <p>No podcasts found.</p>;

  /**
   * Renders the podcast grid once data has been successfully fetched.
   */
  return (
    <div className="podcast-grid">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </div>
  );
}

export default App;
