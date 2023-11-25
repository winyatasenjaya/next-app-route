type DetailProdukPageProps = { params: {slug: string} }
export default function DetailProdukPage(props: DetailProdukPageProps) {
    const {params} = props;
    console.log(params)
    return (
        <div>
            <h1>{params.slug ? "Detail Produk Page" : "Produk Page"}</h1>
            {params.slug && (
                <>
                    <p>Category :  {params.slug[0]}</p>
                    <p>Gender :  {params.slug[1]}</p>
                    <p>Id :  {params.slug[2]}</p>
                </>
            )}
        </div>
    )
}