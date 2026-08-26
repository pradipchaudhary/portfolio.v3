import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const RESUME_URL = "/resume/pradip_chaudhary_resume.pdf";

export default function ResumePage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Resume"
        description="View or download my latest resume."
      />

      <section className="rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-zinc-200 p-6 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800">


          <div className="flex gap-3">
            <Link
              href={RESUME_URL}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              <ExternalLink size={16} />
              View PDF
            </Link>

            <Link
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              <Download size={16} />
              Download
            </Link>
          </div>
        </div>

       

        <div className="overflow-hidden rounded-b-2xl bg-zinc-100 dark:bg-zinc-950">
          <iframe
            src={`${RESUME_URL}#toolbar=0&navpanes=0`}
            title="Resume"
            className="block h-[76vh] w-full border-0"
          />
        </div>
      </section>
    </div>
  );
}