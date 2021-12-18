import stats from '../resources/stats.png'
import FloatingMenu from "./FloatingMenu";

export default function Stats() {
    return <>
        <img src={stats} alt={"Bhagavad Gita"} align={"center"}/>
        <FloatingMenu />
    </>
}