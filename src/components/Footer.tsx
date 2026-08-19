import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-[2rem] px-2 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} {site.name} · {site.company}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-[12px] tracking-[0.16em] uppercase text-[var(--muted)]">
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--gold)]">
            LinkedIn
          </a>
          <a href={site.socials.github} target="_blank" rel="noreferrer" className="hover:text-[var(--gold)]">
            GitHub
          </a>
          <a href={site.companyUrl} target="_blank" rel="noreferrer" className="hover:text-[var(--gold)]">
            Company
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-[var(--gold)]">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
