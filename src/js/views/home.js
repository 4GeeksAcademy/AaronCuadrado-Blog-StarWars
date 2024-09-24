import React, { useContext, useState } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import { Carrosel } from "./carrousel";
import ContactUs from "../component/contactus";

export const Home = () => {
	const { store, actions } = useContext(Context)

	return (
		<>
			< Carrosel />
			<ContactUs />
		</>
	)
};