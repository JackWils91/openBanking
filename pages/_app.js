// import "../styles/index.css";
import "../styles/globals.css";

import { AccountsProvider } from "../services/accounts";
import { InstitutionsProvider } from "../services/institutions";
import { ItemsProvider } from "../services/items";
import { LinkProvider } from "../services/link";
import { TransactionsProvider } from "../services/transactions";
import { UsersProvider } from "../services/users";
import { Sockets } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <InstitutionsProvider>
      <ItemsProvider>
        <LinkProvider>
          <AccountsProvider>
            <TransactionsProvider>
              <UsersProvider>
                <Sockets />
                <Component {...pageProps} />
              </UsersProvider>
            </TransactionsProvider>
          </AccountsProvider>
        </LinkProvider>
      </ItemsProvider>
    </InstitutionsProvider>
  );
}

export default MyApp;
