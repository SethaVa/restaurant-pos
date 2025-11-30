import BottomNav from "../components/shared/BottomNav";

const Home = () => {
    return (
        <section className="bg-[var(--color-background)] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
            {/* LEFT DIV */}
            <div className="flex-[3] bg-[var(--color-background)] "></div>

            {/* RIGHT DIV */}
            <div className="flex-[2] bg-[var(--color-background)] "></div>
            <BottomNav />
        </section>
    )
}

export default Home;