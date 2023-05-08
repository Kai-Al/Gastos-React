import { useGlobalState } from "../context/GlobalState"

function Balance() {

    const  transactions  = useGlobalState();
    return (
        <div>
            <h1>Balance</h1>
        </div>
    )
}

export default Balance