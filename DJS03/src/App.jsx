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
}
