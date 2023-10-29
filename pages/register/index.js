import Button from "@mui/material/Button";
import Image from "next/image";
import Foto from "@/public/foto.png";
import Foto2 from "@/public/Vector.png";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [termsCheck, setTermsCheck] = useState(false);

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (termsCheck === false) {
      alert("You must accept the terms of use and privacy policy.");
    } else if (form.password !== form.password2) {
      alert("Your passwords doesn't match.");
    } else {
      // await createAccountService();
      alert("İşlem Başarılı");
    }
  };

  return (
    <div className="flex w-full h-screen justify-center items-center bg-white">
      <div className="justify-start pt-96 inline-block ">
        <Image src={Foto2} alt="Foto2" className="" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center gap-5">
        <div className=" flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-2">
            Please Create An New Account
          </h1>
          <p>Let's create a new account and socialize!</p>
        </div>

        <div className="w-5/6 flex justify-center items-center rounded-lg gap-2 p-1">
          <input
            value={form.name}
            onChange={(e) => handleOnChange(e)}
            name="name"
            placeholder="Name"
            type="text"
            className="w-5/6 border-none rounded-2xl bg-gray-100  text-black p-3 outline-none"
            sx={{
              "&:hover": {
                border: "none",
              },
            }}
          />

          {/* <div>|</div> */}

          <input
            value={form.surname}
            onChange={(e) => handleOnChange(e)}
            name="surname"
            placeholder="Surname"
            type="text"
            className="border-none rounded-2xl bg-gray-100 w-5/6 text-black p-3 outline-none"
            sx={{
              "&:hover": {
                border: "none",
              },
            }}
          />
        </div>

        <div className="w-5/6 flex justify-center items-center rounded-lg gap-2  p-1">
          <input
            value={form.username}
            onChange={(e) => handleOnChange(e)}
            name="username"
            placeholder="Enter your username"
            type="text"
            className="w-5/6 border-none rounded-2xl bg-gray-100 text-black p-3 outline-none"
            sx={{
              "&:hover": {
                border: "none",
              },
            }}
          />

          {/* <div>|</div> */}

          <input
            value={form.email}
            onChange={(e) => handleOnChange(e)}
            name="email"
            placeholder="Enter Your e-mail"
            type="email"
            className="w-5/6 border-none rounded-2xl bg-gray-100 text-black p-3 outline-none"
            sx={{
              "&:hover": {
                border: "none",
              },
            }}
          />
        </div>

        <div className="w-5/6 flex items-center bg-gray-100 border-white rounded-2xl py-1">
          <input
            value={form.password}
            onChange={(e) => handleOnChange(e)}
            name="password"
            placeholder="Enter your password"
            type="password"
            className="border-none rounded-2xl bg-gray-100 w-full text-black p-3 outline-none"
            sx={{
              "&:hover": {
                border: "none",
              },
            }}
          />
        </div>
        <div className="w-5/6 flex items-center bg-gray-100 border-white rounded-2xl py-1 ">
          <input
            value={form.password2}
            onChange={(e) => handleOnChange(e)}
            name="password2"
            placeholder="Re-type your password"
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

        <div className="flex items-center justify-center">
          <Checkbox
            size="small"
            checked={termsCheck}
            onChange={() => {
              setTermsCheck(!termsCheck);
            }}
          />
          <span className="text-gray-500">
            I accept the Privacy Policy and Terms of Use.
          </span>
        </div>

        <Button
          onClick={() => {
            handleSubmit();
          }}
          variant="contained"
          className="bg-gray-950 text-white w-25% py-3 rounded-2xl shadow-none w-5/6"
          sx={{
            width: "50%",
            "&:hover": {
              backgroundColor: "#303030",
              boxShadow: "none",
            },
          }}
        >
          CREATE A NEW ACCOUNT
        </Button>

        {/* <div className="w-full flex flex-row justify-center items-center gap-3">
          <div className="w-28 border-b  border-gray-300 inline-block"></div>
          <a className="flex" href="#">
            <span className="font-bold normal-case">Login</span>with Others
          </a>
          <div className="w-28 border-b border-gray-300 inline-block"></div>
        </div> */}
        {/* <a>
          <span className="font-bold">Login</span> with Others
        </a> */}
        <div className=" flex flex-col justify-center items-center gap-4 w-5/6">
          <Button
            startIcon={<FcGoogle />}
            sx={{
              width: "100%",
            }}
            className="text-black gap-1 normal-case border-black py-3 rounded-2xl "
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
