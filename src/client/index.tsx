import ActiveSession from "../auth/session/activeSession.js";
import Head from "./components/global/Head.js";

export async function IndexPage(props: { session: ActiveSession }) {
	return (
		<>
			{"<!DOCTYPE html>"}
			<html>
				<Head session={props.session} />
				<body hx-ext="ws" ws-connect="/ws"></body>
			</html>
		</>
	);
}
