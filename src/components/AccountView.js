import React from "react";

const AccountView = () => {
    
    const accountsURL = "http://localhost:8080/api/account"
    const [accountData, setAccounts] = useState([]);

    const getAllAccounts = () => {
        axios.get(accountsURL)
        .then((response) => {
            const allAccounts = response.data
            setAccounts(allAccounts)
        })
    }
}