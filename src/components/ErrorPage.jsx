import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  // console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-indigo-600 mb-4">
          {error?.status || 404}
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! Something went wrong.
        </h2>
        <p className="text-gray-600 mb-6">
          {error?.statusText || error?.message || "The page you're looking for doesn't exist."}
        </p>

        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md shadow hover:bg-indigo-700 transition-colors duration-200"
        >
          Go Back Home
        </Link>
      </div>

      <footer className="mt-12 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Rishi
      </footer>
    </div>
  );
}
