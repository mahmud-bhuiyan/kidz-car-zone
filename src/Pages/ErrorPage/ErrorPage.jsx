import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { status } = useRouteError();
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/h7HWhkj/404.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-25"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">{status || "404"}</h1>
            <p className="mb-5"></p>
            <Link to="/" className="btn btn-primary btn-lg">
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
