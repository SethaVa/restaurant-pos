import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/orders/OrderCard";
import BackButton from "../components/shared/BackButton";

const Orders = () => {
  const [status, setStatus] = useState("all");
  return (
    <section className="bg-[var(--color-background)] h-[calc(100vh-8rem)] overflow-auto scrollbar-hide">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[var(--color-primary)] text-2xl font-bold tracking-wide">
            Orders
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
          <button
            onClick={() => setStatus("ready")}
            className={`text-[var(--color-secondary)] text-lg rounded-lg px-5 py-2 font-semibold ${
              status == "ready" && "bg-[var(--color-dark-gray)]"
            }`}
          >
            Ready
          </button>
          <button
            onClick={() => setStatus("completed")}
            className={`text-[var(--color-secondary)] text-lg rounded-lg px-5 py-2 font-semibold ${
              status == "completed" && "bg-[var(--color-dark-gray)]"
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 px-16 py-4">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>

      <BottomNav />
    </section>
  );
};

export default Orders;
