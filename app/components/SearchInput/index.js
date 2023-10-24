"use client";

export default function SearchInput() {
	return (
		<div
			className="flex"
			style={{
				marginTop: "50px",
				flexDirection: "row",
				gap: "15px",
			}}
		>
			<input
				style={{
					width: "400px",
					border: "none",
					padding: "10px 20px",
					borderRadius: "15px",
					fontSize: "16px",
				}}
				type="email"
				placeholder="Search for a candidate"
			/>
			<button
				color="primary"
				style={{
					fontSize: "16px",
					padding: "10px 30px",
					background: "#FFF94C",
					borderRadius: "10px",
					border: "none",
				}}
			>
				Search
			</button>
		</div>
	);
}
