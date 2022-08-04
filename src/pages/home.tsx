import { Box, Toolbar, Typography } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <>
      <Box
        component="main"
        className="w-full h-[calc(100vh-56px)] md:h-[calc(100vh-64px)]  "
      >
        <Toolbar />
        <section className="md:flex justify-center h-full ">
          <Box className="md:w-3/6 p-3 text-[#605D83] flex flex-col space-y-20 justify-center h-full ">
            <Box>
              <h3 className="text-[30px] md:text-[48px] font-bold ">
                JaroTechnologies
              </h3>
              <hr className="h-[5px] rounded-lg border-none bg-[#38346D] line-anim md:mt-3" />
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                Jaro's Drone Logistics Company
              </Typography>
            </Box>

            <Box>
              <Box className="flex items-center">
                <Typography
                  variant="h3"
                  className="uppercase"
                  sx={{ fontWeight: "bold", width: "auto" }}
                >
                  Super Fast, and Reliable Service
                </Typography>
                <RocketLaunchIcon
                  sx={{ color: "#E9647F", fontSize: "100px" }}
                />
              </Box>
              {/* #38346D */}
              <Box className="mt-4">
                <Typography variant="button">
                  Deliever to your door step in quick time.
                </Typography>
                <Typography variant="subtitle1">
                  Better ,Faster and Affordatble delievery
                </Typography>

                <Link to="/register">
                  <Button
                    startIcon={<AppRegistrationIcon />}
                    variant="outlined"
                    sx={{
                      color: "white",
                      mr: 1,
                      my: 1,
                      backgroundColor: "#38346D",
                      "&:hover": {
                        color: "#39366b",
                        borderColor: "#38346D",
                      },
                    }}
                  >
                    Signup
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="md:w-3/6 h-full md:flex hidden justify-center ">
            <img src="droneController.svg/" alt="drone-controller" />
          </Box>
        </section>
      </Box>
    </>
  );
}
//  bg-[url('/droneController.svg')] bg-right bg-no-repeat bg-[url('/singleDrone.svg')]
