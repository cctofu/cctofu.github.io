import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import ProjectDetailClient from "./ProjectDetailClient"

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
