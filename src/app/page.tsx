import Main from "./Pages/Main";
import { ThemeProvider } from "./Providers/ThemeProvider";

export default function Home() {
  return (
    <div className="overflow-y-hidden">
      <ThemeProvider>
        <Main/>
      </ThemeProvider>
        
    </div>
  );
}
