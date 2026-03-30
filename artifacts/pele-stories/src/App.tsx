import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StoriesViewer from "./components/StoriesViewer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StoriesViewer />
    </QueryClientProvider>
  );
}

export default App;
