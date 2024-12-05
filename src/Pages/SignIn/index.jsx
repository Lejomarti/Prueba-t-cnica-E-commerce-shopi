import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";

function SignIn() {
  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
      <div className="flex flex-col w-80 font-medium">
        <p>
          <span className="font-light text-sm">Email: </span>
          <span>alejo@gmail.com</span>
        </p>
        <p>
          <span className="font-light text-sm">Password: </span>
          <span>******</span>
        </p>
        <Link to="/">
          <button className="bg-black text-white rounded-lg disabled:bg-black/40 w-full py-3 mt-4 mb-4">
            Log in
          </button>
        </Link>
        <div className="text-center">
          <a className="mt-6 underline underline-offset-4 font-light">
            Forgot my Password
          </a>
        </div>
        <button className="bg-white text-black rounded-lg border-black disabled:bg-black/40 border w-full py-3 mt-6">
          Sign up
        </button>
      </div>
    </Layout>
  );
}

export default SignIn;
