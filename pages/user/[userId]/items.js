import React from "react";
import styles from "../styles/Home.module.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { ItemList, Landing, Sockets } from "../../../components";
import { AccountsProvider } from "../../../services/accounts";
import { InstitutionsProvider } from "../../../services/institutions";
import { ItemsProvider } from "../../../services/items";
import { LinkProvider } from "../../../services/link";
import { TransactionsProvider } from "../../../services/transactions";
import { UsersProvider } from "../../../services/users";

export default function Home() {
  toast.configure({
    autoClose: 8000,
    draggable: false,
    toastClassName: "box toast__background",
    bodyClassName: "toast__body",
    hideProgressBar: true,
  });
  return (
    <div className={styles.container}>
      <InstitutionsProvider>
        <ItemsProvider>
          <LinkProvider>
            <AccountsProvider>
              <TransactionsProvider>
                <UsersProvider>
                  <Sockets />
                  <ItemList />
                </UsersProvider>
              </TransactionsProvider>
            </AccountsProvider>
          </LinkProvider>
        </ItemsProvider>
      </InstitutionsProvider>
    </div>
  );
}
