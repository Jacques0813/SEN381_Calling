import { GetUserMode } from "../functions/UserMode";

const users = [
  { username: "user1", password: "password1", role: "admin" },
  { username: "user2", password: "password2", role: "client" },
];

function handleLogin() {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    if (user.role == "admin") {
      window.location.href = "/admin";
    } else if (user.role == "client") {
      window.location.href = "/client";
    } else if (user.role == "callcenter") {
      window.location.href = "/clientcentre";
    } else {
      window.location.href = "/technician";
    }
  } else {
    alert("Invalid username or password");
  }
}

const redirectToRegister = () => {
  window.location.href = "/register";
};

var username = "";
var password = "";

function Login() {
  const isMobile = GetUserMode();

  if (isMobile) {
    return (
      <body className="bg-black h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-center text-black">
            Premier Service
          </h2>
          <h2 className="text-2xl font-bold text-center mb-4 text-black">
            Solutions
          </h2>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              id="username"
              onChange={(e) => (username = e.target.value)}
              className="border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-red-500 mb-2"
              required
            ></input>

            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              onChange={(e) => (password = e.target.value)}
              className="border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-red-500"
              required
            ></input>

            <div className="flex flex-col justify-center items-center">
              <button
                type="submit"
                className="bg-red-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32 mb-2 mt-2"
              >
                Login
              </button>
              <button
                className="bg-red-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32"
                onClick={redirectToRegister}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </body>
    );
  } else {
    return (
      <body className="bg-black h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-4 text-black">
            Premier Service Solutions
          </h2>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              id="username"
              onChange={(e) => (username = e.target.value)}
              className="border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-red-500 mb-2"
              required
            ></input>

            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              onChange={(e) => (password = e.target.value)}
              className="border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-red-500"
              required
            ></input>

            <div className="flex flex-col justify-center items-center">
              <button
                type="submit"
                className="bg-red-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32 mb-2 mt-2"
              >
                Login
              </button>
              <button
                className="bg-red-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32"
                onClick={redirectToRegister}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </body>
    );
  }
}

export default Login;
