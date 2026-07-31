"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Resource } from "@/types";
import ResourceCard from "@/components/resources/ResourceCard";

export default function ResourcesExplorer({ resources }: { resources: Resource[] }) {
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(resources.map((r) => r.category)))],
    [resources]
  );

  const filtered = useMemo(
    () => (category === "All" ? resources : resources.filter((r) => r.category === category)),
    [resources, category]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              category === cat
                ? "bg-navy text-white"
                : "bg-paper-soft text-ink-muted hover:bg-paper-line"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((resource, i) => (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
          >
            <ResourceCard resource={resource} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
