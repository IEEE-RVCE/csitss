"use client";

import { cn } from "../lib/utils";
import { Users, ChevronRight } from "lucide-react";
import { committees } from "../data/committee";

interface CommitteeCardProps {
  name: string;
  path: string;
  featured?: boolean;
  isSinglePerson?: boolean;
}

function CommitteeCard({ name, path, featured = false, isSinglePerson = false }: CommitteeCardProps) {
  return (
    <a
      href={`/committee-details/${path}`}
      className={cn(
        "block rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl",
        "border-2 border-gray-200",
        featured ? "bg-gradient-to-br from-blue-50 to-sky-50" : ""
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "rounded-xl p-3",
              featured ? "bg-gradient-to-br from-blue-500 to-sky-500" : "bg-gradient-to-br from-gray-50 to-gray-100"
            )}
          >
            <Users className={cn("h-5 w-5", featured ? "text-white" : "text-gray-700")} />
          </div>
          <div>
            <h3 className={cn("font-semibold", featured ? "text-xl text-gray-900" : "text-gray-800")}>{name}</h3>
            {!isSinglePerson && <p className="mt-1 text-sm text-gray-500">View Members</p>}
          </div>
        </div>
        <ChevronRight className="h-5 w-5 text-gray-400" />
      </div>
    </a>
  );
}

export default function Committee() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-white to-transparent py-20">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Conference{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">Committee</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Meet the distinguished professionals and academic leaders who form the CSITSS RVCE committee, bringing their expertise and dedication to advance the field through collaborative research and innovation
          </p>
        </div>

        <div className="mb-12">
          <CommitteeCard name={committees[0].name} path={committees[0].path} featured={true} isSinglePerson={true} />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {committees.slice(1).map((committee) => (
            <CommitteeCard key={committee.path} name={committee.name} path={committee.path} />
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-1/3 -z-10 h-64 w-64 translate-x-1/4 transform rounded-full bg-gradient-to-br from-blue-500/20 to-sky-500/20 blur-3xl" />
      <div className="absolute bottom-1/3 left-0 -z-10 h-64 w-64 -translate-x-1/4 transform rounded-full bg-gradient-to-br from-sky-500/20 to-blue-500/20 blur-3xl" />
    </section>
  );
}
