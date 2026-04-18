export default function Footer() {
    return (
        <footer className="bg-[#0b0b0b] text-white pt-14 px-4">

            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

                {/* ABOUT */}
                <div>
                    <h2 className="text-yellow-400 font-bold text-lg mb-4">
                        HAND TOOLS POWERTOOLS & INDUSTRIAL HARDWARE
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        We, HJ Enterprise are an apex firm involved in trading, supplying,
                        exporting and distributing of hand tools, power tools, cutting tools,
                        industrial tools and equipment.
                    </p>
                </div>

                {/* CONTACT */}
                <div>
                    <h3 className="text-yellow-400 font-semibold mb-4">Contact</h3>

                    <p className="text-gray-300 text-sm mb-2">
                        📧 harshagency9@yahoo.co.in
                    </p>

                    <p className="text-gray-300 text-sm mb-2">
                        📞 +91 8866277142
                    </p>

                    <p className="text-gray-300 text-sm mb-2">
                        📞 +91 8048264815
                    </p>

                    <p className="text-gray-400 text-sm mt-3">
                        Shop No 2, Pal Shopping Center, SVP Road No 4,
                        Udhna Udhyog Nagar, Surat, Gujarat 394210
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h3 className="text-yellow-400 font-semibold mb-4">Quick Links</h3>

                    <ul className="space-y-2 text-sm text-gray-300">
                        <li className="hover:text-yellow-400 cursor-pointer">Homepage</li>
                        <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Products</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Services</li>
                        <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
                    </ul>

                    <div className="mt-4 space-y-2 text-sm">
                        <p className="hover:text-yellow-400 cursor-pointer">Facebook</p>
                        <p className="hover:text-yellow-400 cursor-pointer">Instagram</p>
                        <p className="hover:text-yellow-400 cursor-pointer">YouTube</p>
                    </div>
                </div>

                {/* MAP */}
                <div>
                    <h3 className="text-yellow-400 font-semibold mb-4">
                        Locate Us Here
                    </h3>

                    <div className="w-full h-52 md:h-64 rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183.5203590936123!2d72.95743528570033!3d21.3838599304345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be039bee309e639%3A0xecdb7838c31e53a9!2sEagle%20Agencies!5e1!3m2!1sen!2sin!4v1776111734556!5m2!1sen!2sin"
                            className="w-full h-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-gray-800 mt-10 py-5 text-center text-gray-500 text-sm">
                © Copyright 2023 HJ Enterprise. All Rights Reserved | Designed and Maintained by Creative Kshetra
            </div>

        </footer>
    );
}