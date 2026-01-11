import ButtonFilled from "@/components/ui/button_filled";
import { GlobeAltIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Home() {
  // const session = await getSession(); // Todo: implement getSession
  const session = false;

  if (session) {
    redirect("/dashboard");
    return;
  }

  return (
    <div className="p-6">
      <div className="flex flex-col justify-end h-52 p-4 rounded-lg bg-[var(--primary)]">
        <div className="flex flex-row items-center gap-2">
          <GlobeAltIcon className="size-8 text-on-primary" />
          <a className="text-4xl text-on-primary">Acme</a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-center p-4 gap-4 w-auto md:w-120 rounded-lg bg-[var(--primary-container)] text-on-surface text-2xl mt-4">
          <span>
            <a className="font-bold">Welcome to Acme.</a>
            <a>This is the example for the </a>
            <a href="https://nextjs.org/learn/">Next.js Learn Course</a>
            <a>, brought to you by Vercel.</a>
          </span>
          <Link href="/login">
            <ButtonFilled text="Login" />
          </Link>
        </div>
        <div className="mt-4 p-4 text-base">
          <Image
            src="onboard/hero-desktop.png"
            width={1000}
            height={760}
            alt="Screenshots of the dashboard project showing desktop version"
            className="hidden md:block"
          />
          <Image
            src="onboard/hero-mobile.png"
            width={560}
            height={620}
            alt="Screenshot of the dashboard project showing mobile version"
            className="block md:hidden"
          />
        </div>
      </div>
    </div>
  );
}
