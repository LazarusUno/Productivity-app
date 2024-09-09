import { Target } from 'lucide-react'
import { Rocket } from 'lucide-react'
import { Github, Twitter, Zap, LayoutDashboard, KeyRound, Users, Bell, Sparkles } from 'lucide-react'


export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden py-20">
                {/* Background circles */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full opacity-10"
                            style={{
                                width: `${(i + 1) * 40}%`,
                                height: `${(i + 1) * 40}%`,
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                border: '1px solid white',
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                            Sira<sup className="text-xs font-normal bg-gray-800 text-white">BETA</sup>
                        </h1>
                    </div>

                    {/* GitHub stars */}
                    <a
                        href="/dashboard"
                        className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 text-sm mb-8 hover:bg-gray-700 transition-colors"
                    >
                        <Rocket className="w-4 h-4 mr-2" />
                        V 0.0.1
                        <span className="ml-2">→</span>
                    </a>

                    {/* Main heading */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                        Master your day,
                        <br />
                        <span className="text-gray-400">One task at a time.</span>
                    </h2>

                    {/* Subheading */}
                    <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        At Sira, we believe that productivity should be seamless. Our platform simplifies your tasks, streamlines your projects, and empowers you to stay organized so you can achieve more with less effort.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/dashboard"
                            className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                        >
                            Get Started
                            <span className="ml-2">→</span>
                        </a>
                        <a
                            href="#"
                            className="px-6 py-3 rounded-full bg-gray-800 font-semibold hover:bg-gray-700 transition-colors inline-flex items-center justify-center"
                        >
                            <Target className="w-5 h-5 mr-2" />
                            Learn More
                        </a>
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h2 className="text-4xl font-bold mb-2">Boost your productivity</h2>
                <h3 className="text-2xl text-gray-400 mb-8">with our powerful features.</h3>
                <p className="text-gray-300 mb-12 max-w-3xl">
                    Sira offers all the essential tools you need to transform your workflow and skyrocket your productivity. Our intuitive interface and powerful features work seamlessly together to help you achieve more.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Zap className="w-8 h-8" />,
                            title: 'Task Management',
                            description: 'Efficiently organize and prioritize your tasks with our intuitive task management system.',
                        },
                        {
                            icon: <LayoutDashboard className="w-8 h-8" />,
                            title: 'Productivity Dashboard',
                            description: 'Get a clear overview of your progress and productivity with our customizable dashboard.',
                        },
                        {
                            icon: <KeyRound className="w-8 h-8" />,
                            title: 'Secure Data Sync',
                            description: 'Keep your data safe and accessible across all your devices with our secure sync feature.',
                        },
                        {
                            icon: <Users className="w-8 h-8" />,
                            title: 'Team Collaboration',
                            description: 'Seamlessly collaborate with your team members on projects and tasks in real-time.',
                        },
                        {
                            icon: <Bell className="w-8 h-8" />,
                            title: 'Smart Notifications',
                            description: 'Stay on top of your tasks with intelligent reminders and notifications.',
                        },
                        {
                            icon: <Sparkles className="w-8 h-8" />,
                            title: 'AI-Powered Insights',
                            description: 'Gain valuable insights into your work habits and receive personalized productivity tips.',
                        },
                    ].map((card, index) => (
                        <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-6 hover:bg-opacity-75 transition-colors">
                            <div className="bg-purple-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                            <p className="text-gray-400">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 md:p-12">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="md:w-1/2 mb-6 md:mb-0">
                            <h2 className="text-4xl font-bold mb-4">Stay productive</h2>
                            <p className="text-gray-300">
                                Get the latest productivity tips, feature updates, and be the first to know when we launch new tools to supercharge your workflow.
                            </p>
                        </div>
                        <div className="md:w-1/2 md:pl-8">
                            <form className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-grow px-4 py-3 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Sira</h2>
                            <p className="mb-4">We are on a mission to revolutionize productivity and streamline workflows for teams and individuals.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Twitter className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                        <p>© 2024 Sira. All rights reserved.</p>
                        <p className="mt-2 text-sm">
                            Made with <span className="text-purple-500">♥</span> by the Sira team
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}