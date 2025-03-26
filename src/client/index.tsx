import ActiveSession from "../auth/session/activeSession.js";

export async function IndexPage(props: { session: ActiveSession }) {
	return (
		<>
			{"<!DOCTYPE html>"}
			<html>
				<head>
					<title>Connect4</title>
				</head>
				<body>
					<div id="root"></div>
				</body>
			</html>
		</>
	);
}
