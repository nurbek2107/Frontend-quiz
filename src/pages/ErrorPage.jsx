import { Link, useRouteError } from "react-router-dom";
import Spline from '@splinetool/react-spline';
function ErrorPage() {
  const error = useRouteError();

  if (error.status == 404) {
    return (
      <div className="error-container container">
        <div>
        <Spline scene="https://prod.spline.design/u4B9tg1AcNj3m2Oi/scene.splinecode" />
          <Link to="/" className="btn">
            Go To Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="error-container container">
      <div>
      <Spline scene="https://prod.spline.design/u4B9tg1AcNj3m2Oi/scene.splinecode" />
          <Link to="/" className="btn">
            Go To Home
          </Link>
        <Link to="/" className="btn">
          Go To Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
