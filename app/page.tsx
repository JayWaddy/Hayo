import InputConverterHistoryCard from "./components/conversion-history-card/conversion-history-card";
import InputConverter from "./components/input-converter/input-converter";

export default function Home() {
  return (
    <main className="relative mt-6 flex flex-col justify-center">
      <InputConverter />
      <div>
        <InputConverterHistoryCard />
      </div>
    </main>
  );
}
