import { footer } from "@/data/portfolio";
import { FaAngleUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between items-center gap-4 px-[5%] md:px-[9%] py-8 bg-muted">
      <div className="text-[1.6rem]">
        <p>{footer.copyright}</p>
        {footer.earlyProjectsUrl && (
          <a
            href={footer.earlyProjectsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-[1.4rem] mt-2 inline-block"
          >
            {footer.earlyProjectsLabel}
          </a>
        )}
      </div>
      <a
        href={footer.backToTopHref}
        className="inline-flex justify-center items-center px-4 py-3 bg-primary rounded-lg transition-all duration-500 hover:shadow-[0_0_1rem_#5982f4]"
        aria-label="Back to top"
      >
        <FaAngleUp className="text-[2.5rem] text-muted" />
      </a>
    </footer>
  );
};

export default Footer;
