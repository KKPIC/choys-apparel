import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import Showcase from "./pages/Showcase";
import Signup from "./pages/Signup";
import Item from "./pages/Item";
// import AppLayout from "./ui/AppLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
}); //for React Query
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <StyleSheetManager
          shouldForwardProp={(propName, elementToBeRendered) => {
            return typeof elementToBeRendered === "string"
              ? isPropValid(propName)
              : true;
          }}
        >
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route
                  index
                  element={<Navigate replace to="showcase" />}
                ></Route>
                <Route path="showcase" element={<Showcase />}></Route>
                <Route path="showcase/:productId" element={<Item />}></Route>
                <Route path="itemDetail" element={<Item />}></Route>
              </Route>
              {/* <Route element={<Navigate replace to="login" />}></Route> */}
              {/* <Route path="login" element={<Login />}></Route> */}
              <Route path="login" element={<Login />}></Route>
              <Route path="signup" element={<Signup />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </BrowserRouter>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
        </StyleSheetManager>
      </QueryClientProvider>
    </>
  );
}

export default App;
