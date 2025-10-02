export default async function Page() {
    const url = "https://intercms.dev/api/v2/data.php?method=page&api_key=web_b645586fb53d9be2acebc1bc63939fd87c356dd9726d054196644832f80d&project_id=12&id=186"
    const data = await fetch(url, {
        next: { revalidate: 3 },
        cache: 'no-store'
    })
    const res = await data.json()
    return (
        <div className="flex flex-1">
            {JSON.stringify(res)}
        </div>
    );
};
