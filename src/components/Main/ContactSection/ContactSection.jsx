import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./ContactSection.css";

const ContactSection = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const socialLinks = [
        {
            href: "mailto:demoemailforportfolio1@gmail.com",
            icon: "/icons/email.svg",
            label: "My Email",
            isExternal: false,
        },
        {
            href: "https://www.linkedin.com/in/subhajitgorai",
            icon: "/icons/linkedin.svg",
            label: "LinkedIn",
            isExternal: true,
        },
        {
            href: "https://github.com/Dream-World-Coder",
            icon: "/icons/github.svg",
            label: "Github",
            isExternal: true,
        },
        {
            href: "http://www.youtube.com/@sillyscience5",
            icon: "/icons/yt.svg",
            label: "YouTube",
            isExternal: true,
        },
        {
            href: "https://x.com/Subhaji09951021",
            icon: "/icons/twitter.svg",
            label: "X (twitter)",
            isExternal: true,
        },
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        var tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".expC",
                start: "top center",
                end: "bottom center",
                scrub: false,
                markers: false,
            },
        });

        tl3.to(".s5", {
            y: 0,
            delay: 0.2,
            stagger: 0.06,
            duration: 1,
            ease: "power3.out",
            opacity: 1,
        });
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section id="s4-contacts" className="sec4">
            <h4 className="expC">
                <span
                    className="underline-sp headerSpan header__texts inline"
                    id="contact-heading"
                >
                    Contacts
                </span>
            </h4>
            <div className="contacts-container relative">
                <div className="adjuster-div flex">
                    {/* Social icons */}
                    <div className="fs-contacts flex-col">
                        <ul>
                            {socialLinks.map((link, index) => (
                                <li
                                    key={index}
                                    className="animated-underline-white"
                                >
                                    <a
                                        href={link.href}
                                        {...(link.isExternal && {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                        })}
                                    >
                                        <img
                                            src={link.icon}
                                            alt={`${link.label} icon`}
                                            className="size-6"
                                        />
                                        <span className="s4">
                                            <span className="s5">
                                                {link.label}
                                            </span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Contact form */}
                    <div id="email-box" className="email-box">
                        {/* Question part */}
                        <span
                            className="question"
                            onClick={() => setIsFormVisible(true)}
                            style={{
                                display: isFormVisible ? "none" : "block",
                            }}
                        >
                            Have something to share? CLICK HERE! <br />
                            <br />
                            <div className="line"></div>
                        </span>
                        {/* Message box */}
                        <div
                            className="box ta-taX flex-col"
                            style={{ display: isFormVisible ? "flex" : "none" }}
                        >
                            <form
                                id="form"
                                action="https://api.web3forms.com/submit"
                                method="post"
                            >
                                <input
                                    type="hidden"
                                    name="redirect"
                                    value="https://subha-py-c.github.io/Noni/"
                                />
                                <input
                                    type="hidden"
                                    name="access_key"
                                    value="67104936-b712-4f86-abec-8dddf48deff3"
                                />
                                <div className="name-and-email-input flex-col">
                                    <div className="nm">
                                        <label htmlFor="emailer_name">
                                            Your name:
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="emailer_name"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <br />
                                    <div className="eml">
                                        <label htmlFor="email">
                                            Email address for me to contact you:
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email Id [eg. jhon123@example.com]"
                                            required
                                        />
                                    </div>
                                </div>
                                <label htmlFor="msg">Message:</label>
                                <textarea
                                    name="message"
                                    id="msg"
                                    rows="1"
                                    required
                                    placeholder="Your Message"
                                ></textarea>
                                <div className="btnCon">
                                    <button
                                        className="btn email-btn"
                                        type="submit"
                                        id="submit"
                                        value="Send"
                                    >
                                        Send
                                    </button>
                                    <div
                                        className="back-btn flexed"
                                        onClick={() => setIsFormVisible(false)}
                                    >
                                        <img
                                            width="24"
                                            height="24"
                                            src="icons/back-btn.svg"
                                            alt="Back button"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* CV download link */}
                <div id="cv" className="download-cv relative cen">
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://drive.google.com/file/d/1UIkDtRNXdytYzERmwnCE-35yjhMJ2WXD/view?usp=sharing"
                    >
                        •Curriculam Vitae•
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
