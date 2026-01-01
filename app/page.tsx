import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { redirect } from "next/navigation";

export default async function Home() {
  // const session = await getSession(); // Todo: implement getSession
  const session = false;

  if (session) {
    redirect("/dashboard");
    return;
  }

  return (
    <div>
      <h1>Welcome to the Invoicing App</h1>
      <p>Please log in to continue.</p>
      <Button component={Link} href="/about" variant="contained">
        Go to About Page
      </Button>
    </div>
  );
}
