/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900/20 to-gray-900 pt-32 md:pt-40 lg:pt-48 pb-20">
            <div className="max-w-3xl mx-auto px-4 md:px-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft size={16} />
                    Back Home
                </Link>

                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                <p className="text-gray-500 text-sm mb-10">Last updated: July 2026</p>

                <div className="space-y-8 text-gray-300">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">Overview</h2>
                        <p>
                            This is a personal portfolio site belonging to Emmanuel Oluwatobi Awe. This page
                            explains what information is collected when you visit or use this site, and how
                            it's handled.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">What I Collect</h2>
                        <p className="mb-2">
                            The only personal information collected through this site comes from the{' '}
                            <Link href="/contact" className="text-green-400 hover:underline">contact form</Link>,
                            which asks for:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-gray-400">
                            <li>Your name</li>
                            <li>Your email address</li>
                            <li>The subject and content of your message</li>
                        </ul>
                        <p className="mt-2">
                            I don't use cookies, analytics trackers, or any form of behavioral tracking on this site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">Why I Collect It</h2>
                        <p>
                            The information submitted through the contact form is used for one purpose only:
                            to read and respond to your message. It isn't used for marketing, added to any
                            mailing list, or shared for any purpose beyond replying to you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">Third-Party Services</h2>
                        <p>
                            Contact form submissions are delivered using{' '}
                            <a
                                href="https://resend.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-400 hover:underline"
                            >
                                Resend
                            </a>
                            , an email delivery service. When you submit the form, your name, email, and
                            message pass through Resend's infrastructure in order to reach my inbox. Resend
                            has its own privacy practices governing that process, which you can review on
                            their site.
                        </p>
                        <p className="mt-2">
                            This site is hosted on Vercel, which may log standard technical information
                            (such as IP address and request timing) as part of normal web hosting operations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">Data Retention & Deletion</h2>
                        <p>
                            Messages sent through the contact form are kept only as long as needed to respond
                            to your inquiry. If you'd like any information you've submitted deleted, email me
                            directly and I'll remove it.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">Changes to This Policy</h2>
                        <p>
                            If this policy changes, the update will be reflected on this page with a revised
                            "Last updated" date above.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">Contact</h2>
                        <p>
                            Questions about this policy or your data? Reach out via the{' '}
                            <Link href="/contact" className="text-green-400 hover:underline">contact page</Link>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}