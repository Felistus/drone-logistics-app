import { Button, Toolbar, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Toolbar />
      <section className="w-full h-[calc(100vh-56px)] md:h-[calc(100vh-64px)] flex items-center justify-center px-4 bg-[url('/singleDrone.svg')] bg-no-repeat bg-contain   ">
        <form className="md:w-[400px] max-w-[400px] bg-[#38346D] py-4 px-8 rounded-lg  ">
          <div className="w-40 h-40 mb-4 mx-auto  ">
            <img src="/droneOne.svg" alt="drone" className="droneUpAndDown" />
            <div className="droneShadow "></div>
          </div>
          <input
            type="email"
            autoComplete="off"
            className="px-2 py-2 outline-none rounded-md w-full bg-white text-black  "
            placeholder="Enter your email address"
          />
          <input
            type="password"
            className="px-2 py-2 outline-none rounded-md my-4 w-full bg-white text-black "
            placeholder="Enter password"
          />
          <Button
            endIcon={<LoginIcon />}
            variant="contained"
            sx={{
              color: "#38346D",
              mr: 1,
              backgroundColor: "#FFF",
              fontWeight: "bold",
              "&:hover": {
                color: "#FFF",
                backgroundColor: "#B96B6B",
              },
            }}
          >
            login
          </Button>
          <div className="my-2 text-center">
            <Typography variant="caption">
              If you have no account, kindly
              <Link
                to="/register"
                className="mx-2 font-bold  hover:text-[#B96B6B]"
              >
                Click Here
              </Link>
              to register
            </Typography>
          </div>
        </form>
      </section>
    </>
  );
}
