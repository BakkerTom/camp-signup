import Logo from "@/components/logo";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>WZV Zwemkamp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative min-h-screen">
        <div className="fixed inset-0 min-h-screen -z-10">
          <video
            autoPlay
            playsInline
            muted
            loop
            className="fixed h-full inset-0 object-cover"
          >
            <source src="/videos/hero.mp4" />
          </video>
          <div className="bg-gradient-to-b from-slate-900/60 to-slate-900 absolute inset-0"></div>
        </div>
        <div className="pt-32 sm:pt-0 sm:min-h-screen flex flex-col items-center justify-center">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Logo />
          </motion.div>
          <p className="text-center mt-8">
            Ben jij een echte survivor? Meld je aan voor een weekend vol
            avontuur.
          </p>
          <Link
            href="/inschrijven"
            className="bg-white/20 py-4 px-8 mt-8 uppercase font-bold tracking-wider"
          >
            Aanmelden
          </Link>
        </div>
      </main>
    </>
  );
}
