import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
    const loggedIn = {firstName:"Hasibul",lastName:"Hasan", email:"contact@gmail.com"}
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

                    <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                    />
                </header>
                Transactions
             </div>
             <RightSidebar 
             user={loggedIn}
             transactions={[]}
             banks={[]}
             />
        </section>
    )
}
export default Home;