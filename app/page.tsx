import { redirect } from "next/navigation";

export default async function Home() {
  // const session = await getSession(); // Todo: implement getSession
  const session = true;

  if (!session) redirect("/login");
  redirect("/dashboard");
}
