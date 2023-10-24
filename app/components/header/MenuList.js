import Link from "next/link";

function MenuList() {
  return (
    <div
      className="flex"
      style={{
        flexDirection: "row",
        alignItems: "center",
        // THIS GIVES AN SPACE BETWEEN THE LINKS
        gap: "30px",
      }}
    >
      <Link href="/login">Login</Link>
      {/* IT SENDS ME TO THE LOGIN TOO, BUT I SEND PARAMETERS TO OPEN A MODAL WITH THE REGISTRATION FORM */}
      <Link
        href="/login?register=true"
        style={{
          padding: "10px 30px",
          background: "#FFF94C",
          borderRadius: "10px",
        }}
      >
        Register
      </Link>
    </div>
  );
}

export default MenuList;
