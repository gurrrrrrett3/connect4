import ActiveSession from "../../../auth/session/activeSession.js";

export default function Head(props: { session: ActiveSession }) {
	return (
		<head>
			<link rel="stylesheet" href="/generated/index.css" />
			<script src="/generated/index.js" type="module" defer></script>
		</head>
	);
}
