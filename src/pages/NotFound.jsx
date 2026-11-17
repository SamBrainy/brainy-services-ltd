import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

export default function NotFound() {
  return (
    <div className="px-6 md:px-10 py-32 text-center">
      <Helmet>
        <title>Page not found | Brainy Services Ltd</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 className="text-4xl font-bold mb-4">Page not found</h1>
      <p className="text-gray-600 mb-8">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="flex justify-center gap-6">
        <Link to="/" className="text-brainy font-semibold underline">Go home</Link>
        <Link to="/services" className="text-brainy font-semibold underline">See our services</Link>
      </div>
    </div>
  )
}
