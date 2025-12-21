import React, { useState } from "react";
import BackButton from "../components/shared/BackButton";
import BottomNav from "../components/shared/BottomNav";
import TableCard from "../components/tables/TableCard";
import { tables } from "../dump";

export interface Table {
  id: number;
  name: string;
  status: string;
  initial: string;
  seats: number;
}

const Tables = () => {
  const [status, setStatus] = useState("all");
  return (
    <section className="bg-[var(--color-background)] ">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[var(--color-primary)] text-2xl font-bold tracking-wide">
            Tables
          </h1>
        </div>

        <div className="flex items-center justify-around gap-4">
          <button
            onClick={() => setStatus("all")}
            className={`text-[var(--color-secondary)] text-lg rounded-lg px-5 py-2 font-semibold ${
              status == "all" && "bg-[var(--color-dark-gray)]"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setStatus("in_progress")}
            className={`text-[var(--color-secondary)] text-lg rounded-lg px-5 py-2 font-semibold ${
              status == "in_progress" && "bg-[var(--color-dark-gray)]"
            }`}
          >
            In Progress
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 px-16 py-4 pb-16 h-[calc(100vh-5rem-5rem)] overflow-auto scrollbar-hide">
        {tables.map((table: Table) => (
          <TableCard key={table.id} {...table} />
        ))}
      </div>

      <BottomNav />
    </section>
  );
};

export default Tables;
