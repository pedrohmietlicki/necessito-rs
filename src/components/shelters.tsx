import { useEffect } from "react";
import app from "../config/firebase"

import { getDatabase, ref, child, get } from "firebase/database";

export const Shelters = () => {
    useEffect(() => {
        const dbRef = ref(getDatabase(app));
        get(child(dbRef, `refugios`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        })
    },[])

    return (
        <div>
            <h1>Teste</h1>
        </div>
    )
}