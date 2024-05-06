import BankCard from "@/components/BankCard";
import HeaderBox from "@/components/HeaderBox";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const MyBanks =async () => {
    const loggedIn =  await getLoggedInUser()
    const accounts = await getAccounts({ 
        userId: loggedIn.$id 
      })
  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox
          title="My Banks Account"
          subtext="Effortlessly Access and manage your account and transaction."
        />
        <div className="space-y-4">
            <h2 className="header-2">
                Your Cards
            </h2>
            <div className="flex flex-wrap gap-6">
                {accounts && accounts.data.map((a:Account)=>(
                    <BankCard
                    key={a.id}
                    account={a}
                    userName={loggedIn?.firstName}
                    />
                
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};
export default MyBanks;
