import { Provider } from "@/core/components/chakraui/provider";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";
import router from "@core/configs/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </Provider>
  );
}

export default App;
