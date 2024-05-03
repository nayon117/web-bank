import HeaderBox from "@/components/HeaderBox";

const Home = () => {
    const loggedIn = {firstName:"Hasibul"}
    return(
        <section className="home">
             <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                    type="greeting"
                    title="welcome"
                    user={loggedIn?.firstName || "Guest"}
                    subtext="Access and manage your account and transaction."
                    />
                </header>
             </div>
        </section>
    )
}
export default Home;