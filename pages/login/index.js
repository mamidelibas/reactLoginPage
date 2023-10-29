import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import Button from "@mui/material/Button";
import Image from "next/image";
import Foto from "@/public/foto.png";
import Foto2 from "@/public/Vector.png";
import { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (form.username === "" && form.password === "") {
      alert("Please enter your USERNAME and PASSWORD.");
    } else {
      alert("İşlem Başarılı");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-white">
      <div className="justify-start pt-96 inline-block">
        <Image src={Foto2} alt="Foto2" className="" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center gap-5">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-[5rem] font-bold">Welcome</h1>
          <p>We are glad to see you back with us</p>
        </div>
        <div className="w-1/2 flex items-center bg-gray-100 border-white rounded-2xl py-1">
          <Person2OutlinedIcon className="ml-3 text-3xl" />
          <input
            value={form.username}
            onChange={(e) => handleOnChange(e)}
            name="username"
            placeholder="Username"
            type="text"
            className="border-none rounded-2xl bg-gray-100 w-full text-black p-3 outline-none"
            sx={{
              "&:hover": {
                border: "none",
              },
            }}
          />
        </div>
        <div className="w-1/2 flex items-center bg-gray-100 border-white rounded-2xl py-1 ">
          <HttpsOutlinedIcon className="ml-3 text-3xl" />
          <input
            value={form.password}
            onChange={(e) => handleOnChange(e)}
            name="password"
            placeholder="Password"
            type="password"
            className="border-none rounded-2xl bg-gray-100 w-full text-black p-3 outline-none "
            sx={{
              "&:hover": {
                border: "none",
              },
            }}
          />
        </div>
        {/* 
        <div className="w-1/2 flex flex-col justify-center items-center gap-5">
          <TextField
            id="outlined-basic"
            placeholder="Username"
            variant="outlined"
            sx={{
              width: "100%",
            }}
          />
          <TextField
            id="outlined-basic"
            placeholder="Password"
            variant="outlined"
            sx={{
              width: "100%",
            }}
          />
        </div> */}
        <Button
          onClick={() => {
            handleSubmit();
          }}
          variant="contained"
          className="bg-gray-950 text-white w-25% py-3 rounded-2xl shadow-none"
          sx={{
            width: "50%",
            "&:hover": {
              backgroundColor: "#303030",
              boxShadow: "none",
            },
          }}
        >
          LOGIN
        </Button>
        <div className="w-full flex flex-row justify-center items-center gap-5">
          <div className="w-24 border-b  border-gray-300 inline-block"></div>
          <a className="flex" href="#">
            <span className="font-bold normal-case mr-1">Login </span>with
            Others
          </a>
          <div className="w-24 border-b border-gray-300 inline-block"></div>
        </div>
        {/* <a>
          <span className="font-bold">Login</span> with Others
        </a> */}
        <div className="w-1/2 flex flex-col justify-center items-center gap-4">
          <Button
            startIcon={<FcGoogle />}
            sx={{
              width: "100%",
            }}
            className="text-black gap-1 normal-case border-black py-3 rounded-2xl"
            variant="outlined"
          >
            Login with<span className="font-bold">google</span>
          </Button>

          <Button
            startIcon={<FacebookIcon className="text-[#1976d2]" />}
            sx={{
              width: "100%",
            }}
            className="text-black gap-1 normal-case border-black py-3 rounded-2xl"
            variant="outlined"
          >
            Login with <span className="font-bold">Facebook</span>
          </Button>
        </div>
      </div>

      <div className="w-1/2 flex  justify-center items-center">
        <Image src={Foto} alt="Foto" className="p-4 hover:p-2" />
      </div>
    </div>
  );
}
