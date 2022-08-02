import { Button, Toolbar, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <Toolbar />
      <section className="w-full h-[calc(100vh-56px)] md:h-[calc(100vh-64px)] flex items-center justify-center px-4 bg-[url('/smallTownBg.svg')] bg-no-repeat bg-contain ">
        <form className="md:w-[400px] max-w-[400px] bg-[#38346D] py-4  px-8 rounded-lg text-black ">
          <div className="w-28 h-28 mb-2 mx-auto  ">
            <img src="/droneTwo.svg" alt="drone with camera" />
          </div>
          <input
            type="text"
            className="px-2 py-2 outline-none rounded-md w-full bg-white "
            placeholder="Enter your first & last name..."
          />
          <input
            type="text"
            maxLength={11}
            className="px-2 py-2 outline-none rounded-md my-2 w-full bg-white "
            placeholder="Enter your phone number"
          />
          <input
            type="email"
            autoComplete="off"
            className="px-2 py-2 outline-none rounded-md w-full bg-white  "
            placeholder="Enter your email address"
          />
          <input
            type="password"
            className="px-2 py-2 outline-none rounded-md my-2 w-full bg-white "
            placeholder="Enter password"
          />
          <input
            type="password"
            className="px-2 py-2 outline-none rounded-md w-full bg-white "
            placeholder="Confirm password"
          />
          <input
            type="text"
            className="px-2 py-2 outline-none rounded-md my-2 w-full bg-white "
            placeholder="Enter location"
          />

          <Button
            endIcon={<SendIcon />}
            variant="contained"
            sx={{
              color: "#38346D",
              mr: 1,
              backgroundColor: "#FFF",
              width: "100%",
              fontWeight: "bold",
              "&:hover": {
                color: "#FFF",
                backgroundColor: "#E9647F",
              },
            }}
          >
            submit
          </Button>
          <div className="mt-2 text-center text-white">
            <Typography variant="caption">
              If you already have an account, kindly
              <Link
                to="/login"
                className="mx-2 font-medium hover:text-[#E9647F]"
              >
                Click Here
              </Link>
              to login
            </Typography>
          </div>
        </form>
      </section>
    </>
  );
}
