"use client";

import type { ProjectListing } from "@/data/projects";
import { LiveProjectCard } from "./LiveProjectCard";
import { ProjectHoverCursor, useProjectHoverCursor } from "./LiveSelectedWorks";

export function CaseRelatedProjects({ works }: { works: readonly ProjectListing[] }) {
  const { hoverCursorRef, projectCursorHandlers } = useProjectHoverCursor();

  return (
    <>
      <div className="live-allWorksGrid">
        {works.map((work) => (
          <LiveProjectCard
            key={work.slug}
            slug={work.slug}
            title={work.title}
            image={work.listing}
            tags={work.tags}
            externalUrl={work.externalUrl}
            hoverHandlers={projectCursorHandlers}
          />
        ))}
      </div>
      <ProjectHoverCursor cursorRef={hoverCursorRef} />
    </>
  );
}
