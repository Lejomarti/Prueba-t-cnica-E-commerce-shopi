import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { useContext, useState, useRef } from "react";
import { ShoppingCartContext } from "../../Context";

function SignIn() {
  const context = useContext(ShoppingCartContext);
  const [view, setView] = useState("user-info");
  const form = useRef(null)

  //Account
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);
  //Has an account
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = parsedAccount
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  function createAnAccount(){
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    }
    //provisional console.log
    console.log(data)
  }

  function renderLogIn() {
    return (
      <div className="flex flex-col w-80 font-medium">
        <p>
          <span className="font-light text-sm">Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <p>
          <span className="font-light text-sm">Password: </span>
          <span>{parsedAccount?.password}</span>
        </p>
        <Link to="/">
          <button
            className="bg-black text-white rounded-lg disabled:bg-black/40 w-full py-3 mt-4 mb-4"
            disabled={!hasUserAnAccount}
          >
            Log in
          </button>
        </Link>
        <div className="text-center">
          <a className="mt-6 underline underline-offset-4 font-light">
            Forgot my Password
          </a>
        </div>
        <button
          className="bg-white text-black rounded-lg border-black disabled:bg-black/40 border w-full py-3 mt-6"
          onClick={() => setView("create-user-info")}
          disabled={hasUserAnAccount}
        >
          Sign up
        </button>
      </div>
    );
  }

  function renderCreateUserInfo() {
    return (
      <form ref={form} className="flex flex-col gap-4 w-80">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-light text-sm">
            {" "}
            Your name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount?.name}
            placeholder="Name"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-light text-sm">
            {" "}
            Your email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={parsedAccount?.name}
            placeholder="email@example.com"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-light text-sm">
            {" "}
            Your password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue={parsedAccount?.name}
            placeholder="******"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <Link to="/">
          <button className="bg-black text-white rounded-lg w-full py-3 mb-4" onClick={()=> createAnAccount()}>
            Create
          </button>
        </Link>
      </form>
    );
  }

  function renderView() {
    return view === "create-user-info" ? renderCreateUserInfo() : renderLogIn();
  }

  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>

      {renderCreateUserInfo()}
      {/* {renderView()} */}
    </Layout>
  );
}

export default SignIn;
