// React imports
import { useState, useEffect } from "react";
// Components
import PodcastCard from "./components/PodcastCard.jsx";
import Loading from "./components/Loading.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
// Global CSS for styling
import "./index.css";

/**
 * App component is the root of the podcast application.
 * It handles fetching podcast data from an API, managing
 * loading and error states, and rendering the list of podcasts.
 *
 * @component
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  // State to store the list of podcasts fetched from the API
  const [podcasts, setPodcasts] = useState([]);
  // State to track loading status
  const [loading, setLoading] = useState(true);
  // State to store any error messages
  const [error, setError] = useState(null);

  /**
   * useEffect hook is used to fetch podcasts when the component mounts.
   * The empty dependency array [] ensures this runs only once.
   */
  useEffect(() => {
    /**
     * Asynchronous function to fetch podcasts from the API.
     * Handles loading, successful fetch, and errors.
     */
    async function fetchPodcasts() {
      try {
        // Make API request
        const response = await fetch("https://podcast-api.netlify.app/");
        // Check if response is okay (status 200-299)
        if (!response.ok) throw new Error("Failed to fetch podcasts");
        // Parse JSON data from response
        const data = await response.json();
        // Update podcasts state with fetched data
        setPodcasts(data);
      } catch (err) {
        // If an error occurs, set the error state
        setError(err.message);
      } finally {
        // Set loading to false regardless of success or failure
        setLoading(false);
      }
    }

    // Call the fetch function
    fetchPodcasts();
  }, []);

  // Conditional rendering based on state
  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (podcasts.length === 0) return <p>No podcasts found.</p>;

  // Render the list of podcasts in a grid
  return (
    <div className="podcast-grid">
      {podcasts.map((podcast) => (
        // Each podcast is rendered as a PodcastCard
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </div>
  );
}
