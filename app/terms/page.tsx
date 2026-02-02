"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-transparent pt-32 pb-20 px-6">
            <div className="max-w-3xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-manrope font-bold text-white mb-8 tracking-tight">
                        Terms of Service
                    </h1>
                    <p className="text-white/60 mb-12 font-inter">Last Updated: February 2, 2026</p>

                    <div className="space-y-10 text-white/80 font-inter leading-relaxed">
                        <section>
                            <h2 className="text-xl font-manrope font-semibold text-white mb-4">1. Introduction</h2>
                            <p>
                                Welcome to Spontane. This website (spontane.quest) is currently used for waitlisting and early access applications. By accessing or using our website, you agree to be bound by these Terms of Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-manrope font-semibold text-white mb-4">2. Eligibility</h2>
                            <p>
                                You must be at least 13 years old to use this website. By providing your email address, you represent that you meet this age requirement and are providing your information voluntarily.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-manrope font-semibold text-white mb-4">3. Data Collection</h2>
                            <p>
                                We collect email addresses provided by users for the purpose of waitlist management and early access updates. All data is handled in accordance with our <Link href="/privacy" className="text-accent-dynamic hover:underline">Privacy Policy</Link>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-manrope font-semibold text-white mb-4">4. Acceptable Use</h2>
                            <p>
                                You agree not to misuse, spam, or abuse our website or systems. Any attempt to hack, manipulate, or interfere with the website's performance is strictly prohibited.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-manrope font-semibold text-white mb-4">5. Intellectual Property</h2>
                            <p>
                                Spontane owns all rights to the website, brand name, logo, and content. Your use of the site does not grant you any ownership rights or licenses to our intellectual property.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-manrope font-semibold text-white mb-4">6. No Guarantees</h2>
                            <p>
                                Submitting your email does not guarantee early access, a specific launch date, or the inclusion of certain features in the final product. This website is provided on an "as is" basis.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-manrope font-semibold text-white mb-4">7. Limitation of Liability</h2>
                            <p>
                                Spontane and its team shall not be responsible for any damages, losses, or service interruptions resulting from your use of this website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-manrope font-semibold text-white mb-4">8. Changes to Terms</h2>
                            <p>
                                We may update these terms at any time. Continued use of the website after changes are posted constitutes your acceptance of the new terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-manrope font-semibold text-white mb-4">9. Governing Law</h2>
                            <p>
                                These terms are governed by and construed in accordance with the laws of India.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-manrope font-semibold text-white mb-4">10. Contact</h2>
                            <p>
                                If you have any questions, please contact us at: <a href="mailto:support@spontane.quest" className="text-accent-dynamic hover:underline">support@spontane.quest</a>
                            </p>
                        </section>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/10">
                        <Link href="/" className="text-white/40 hover:text-white transition-colors flex items-center gap-2">
                            <span>←</span> Back to Home
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
