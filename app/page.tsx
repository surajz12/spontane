import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AppPreview } from "@/components/app-preview";
import { WhyThisApp } from "@/components/why-this-app";
import { WaitlistForm } from "@/components/waitlist-form";
import { FeedbackForm } from "@/components/feedback-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <AppPreview />
      <WaitlistForm />
      <WhyThisApp />
      <FeedbackForm />
      <Footer />
    </main>
  );
}
