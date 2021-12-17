export function Chapter(props) {
    if (!props.slokas) {
        return <></>
    }

    let chap = props.slokas
    let chapName = chap.name
    let slokas = Object.values(chap)

    return <>
        <table border={1} align={"left"} style={{textAlign: "left", fontSize: 20, lineHeight: 1.8}}>
            <thead>
            <td colSpan={2} style={{textAlign: "center"}}>
                <h2 style={{margin: 0}}>{chapName}</h2>
            </td>
            </thead>
            {slokas.map((sloka, i) =>
                <tr>
                    {/*   index   */}
                    <td style={{padding: 10, textAlign: "center"}}>
                        {i + 1}
                    </td>
                    {/*   sloka   */}
                    <td style={{paddingLeft: "3rem"}}>
                        {sloka.split("\\n").map(line => <>{line} <br/></>)}
                    </td>
                </tr>
            )}
        </table>
    </>
}