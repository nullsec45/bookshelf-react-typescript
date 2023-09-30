const Input = () => {
    return (
        <>
            <section className="input_section">
                <h2>Masukkan Buku Baru</h2>
                <form id="inputBook">
                    <div className="input">
                        <label htmlFor="input_book_title">Judul</label>
                        <input id="input_book_title" className="input_book" type="text" placeholder="Judul" required />
                    </div>
                    <div className="input">
                        <label htmlFor="input_book_author">Penulis</label>
                        <input id="input_book_author" className="input_book" type="text" placeholder="Penulis" required />
                    </div>
                    <div className="input">
                        <label htmlFor="input_book_year">Tahun Terbit</label>
                        <input id="input_book_year" className="input_book" type="number" placeholder="Tahun Terbit" required />
                    </div>
                    <div className="input_inline">
                        <label htmlFor="input_book_is_complete">Selesai dibaca</label>
                        <input id="input_book_is_complete" type="checkbox" />
                    </div>

                    <button id="book_submit" type="submit">Masukkan Buku ke rak <span id="text_button_submit">Belum</span> selesai
                        dibaca</button>
                </form>
            </section>
        </>
    )
}

export default Input