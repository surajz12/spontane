import Link from "next/link";

export const metadata = {
    title: "Privacy Policy | Spontane",
    description: "Privacy Policy for Spontane waitlist",
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#0c0811] text-white/90 py-20 px-6">
            <div className="max-w-3xl mx-auto space-y-8 font-sans">
                <Link href="/" className="text-accent hover:underline mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
                <p className="text-sm text-white/50">Last Updated: {new Date().toLocaleDateString()}</p>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
                    <p>
                        When you join our waitlist or provide feedback, we collect your email address and any additional information you choose to provide (such as your name or travel preferences).
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">2. How We Use Your Information</h2>
                    <p>
                        We use your email primarily to notify you about the launch of the Spontane app and to provide early access. If you have provided feedback, we use it to improve our service.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">3. Data Storage and Security</h2>
                    <p>
                        Your data is stored securely using Supabase (our database provider) and hosted on Vercel. We do not sell your personal information to third parties.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">4. Cookies</h2>
                    <p>
                        We may use basic cookies or local storage to enhance your experience, such as remembering your form submissions.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">5. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us via our official channels or via Instagram @spontane.app.
                    </p>
                </section>

                <div className="pt-10 border-t border-white/10">
                    <p className="text-sm text-white/40 italic">
                        Spontane is committed to protecting your mindful travel journey.
                    </p>
                </div>
            </div>
        </main>
    );
}
