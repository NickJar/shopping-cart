import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="overflow-hidden">
      <div
        className="hero min-h-screen overflow-hidden"
        style={{
          backgroundImage: `url("/imgs/background.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">Shoe Shop</h1>
            <p className="mb-5 text-white">Shop Shoes</p>
            <Link to={"/store"}>
              <button className="btn btn-primary text-white">Shop</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
