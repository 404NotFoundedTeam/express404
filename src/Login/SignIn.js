import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import LogInWrapper from "./styled";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import UserContext from "../contexts/User";
import {createUserWithEmailAndPassword, auth} from "../firebase/functions.js"

export default function SignIn() {
  const { register, reset, handleSubmit } = useForm();
  const [userUid, setUserUid] = useContext(UserContext);
  const onSubmit = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(auth, data.email, data.password)
		.then((cred) => {
			console.log(cred)
			alert("Saytga muvaffaqqiyatli kirdingiz!")
			// const userData2 = userData;
			// userData2.uid = cred.user.uid;
			setUserUid(cred.user.uid);
			// userUid = cred.user.uid;
			// addUser(userData2)
		})
		.catch(e => {
		})
  };
  
  return (
    <LogInWrapper className="rounded p-4 shadow text-center">
      <h2 style={{ fontWeight: "700" }} className="mb-4">
        Kirish
      </h2>
      <p className={"mb-2"}>Express404'da hali akkauntingiz mavjud emasmi?</p>
      <NavLink to={"../"} className="link pb-4">
        Ro'yxatdan o'tish
      </NavLink>

      <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className="text-field d-block mb-4"
          type={"email"}
          label={"Emailni kiriting"}
          {...register("email", { required: true })}
        />
        <TextField
          className="text-field d-block"
          type={"passworn"}
          label={"Passwordni kiriting"}
          {...register("password", { required: true })}
        />
        <button className="styledBtn mt-4" type="submit">
          Kirish
        </button>
      </form>
    </LogInWrapper>
  );
}
