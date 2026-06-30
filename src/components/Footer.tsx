import Link from "next/link";
import { footer, site, socialLinks } from "@/data/portfolio";
import {
  FaAngleUp,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const socialIconMap = {
  facebook: FaFacebookF,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  github: FaGithub,
};

const Footer = () => {
  return (
    <footer className="px-[5%] md:px-[9%] py-12 bg-gray-200 dark:bg-muted border-t border-gray-300 dark:border-white/10">
      <div className="flex flex-wrap justify-between items-start gap-10 mb-10">
        <div className="flex-1 min-w-[220px] max-w-md">
          <p className="text-[2rem] font-bold text-dark dark:text-white">{site.name}</p>
          {footer.tagline && (
            <p className="text-[1.5rem] text-primary mt-1">{footer.tagline}</p>
          )}
          <p className="text-[1.4rem] text-dark/70 dark:text-white/70 mt-3">{footer.copyright}</p>
        </div>

        <div className="flex-1 min-w-[160px]">
          <p className="text-[1.6rem] font-bold text-dark dark:text-white mb-3">Quick links</p>
          <ul className="space-y-2">
            {footer.quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[1.4rem] text-dark/80 dark:text-white/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {footer.learningJourneyHref && (
              <li>
                <Link
                  href={footer.learningJourneyHref}
                  className="text-[1.4rem] text-dark/80 dark:text-white/80 hover:text-primary transition-colors"
                >
                  {footer.learningJourneyLabel}
                </Link>
              </li>
            )}
            {footer.testimonialsHref && (
              <li>
                <Link
                  href={footer.testimonialsHref}
                  className="text-[1.4rem] text-dark/80 dark:text-white/80 hover:text-primary transition-colors"
                >
                  {footer.testimonialsLabel}
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="flex-1 min-w-[200px]">
          <p className="text-[1.6rem] font-bold text-dark dark:text-white mb-3">Connect</p>
          {footer.email && (
            <a
              href={`mailto:${footer.email}`}
              className="block text-[1.4rem] text-primary hover:underline mb-4"
            >
              {footer.email}
            </a>
          )}
          {footer.showSocial && (
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon as keyof typeof socialIconMap];
                if (!Icon) return null;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex justify-center items-center w-12 h-12 border-2 border-primary rounded-full text-[1.8rem] text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4 pt-6 border-t border-gray-300 dark:border-white/10">
        {footer.builtWith && (
          <p className="text-[1.3rem] text-dark/60 dark:text-white/60">{footer.builtWith}</p>
        )}
        <Link
          href={footer.backToTopHref}
          className="inline-flex justify-center items-center px-4 py-3 bg-primary rounded-lg transition-all duration-500 hover:shadow-[0_0_1rem_#5982f4] ml-auto"
          aria-label="Back to home"
        >
          <FaAngleUp className="text-[2.5rem] text-white" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
