import TabExpenseIncome from "@/components/user/overview/TabExpenseIncome";

export default function page({
  params,
}: {
  params: { lng: string; username: string };
}) {
  return (
    <main className="md:container min-h-screen px-4 py-4 space-y-4">
      <h2>Overview</h2>
      <TabExpenseIncome />
    </main>
  );
}
