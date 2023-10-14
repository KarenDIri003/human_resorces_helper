import MenuList from "./MenuList";

export function Header() {
	return (
		<header style={{
			width: "100%",
			padding: "20px 40px",
			background: "#FFFFFF",
			borderRadius: "0 0 20px 20px",
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			boxShadow: "1px 10px 36px 0px rgba(178, 178, 178, 0.75)",
		}}>
			<div className="header-container_logo">
				<a className="container-flex_left" href="/">
					<h2 style={{
						fontWeight: "bold",
					}}>HUMAN RESOURCES HELPER</h2>
				</a>
			</div>
			<div className="menu-buttons" style={{
				display: "flex",
				justifyContent: "space-between"
			}}>
				<MenuList />
				{/* <LogIn/>
                <Register/> */}
			</div>
		</header >
	)
}