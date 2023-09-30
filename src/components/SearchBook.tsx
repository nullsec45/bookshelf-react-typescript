
const SearchBook = () => {
    return (
        <>
            <section className="search_section">
                <h2>Cari Buku (Opsional)</h2>
                <form id="searchBook">
                    <label htmlFor="search_book_title">Judul</label>
                    <input id="search_book_title" type="text" placeholder="Search Title" />
                    <button id="search_submit" type="submit">Cari</button>
                </form>
            </section>
        </>
    )
}

export default SearchBook