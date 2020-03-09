import React from "react"

const Post = (props) => {
    return (
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel" />
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">{props.nama}</div>
                <p className="isi-artikel">{props.nim}</p>
                <p className="isi-artikel">{props.nama}</p>
                <p className="isi-artikel">{props.alamat}</p>
                <p className="isi-artikel">{props.hp}</p>
                <p className="isi-artikel">{props.angkatan}</p>
                <p className="isi-artikel">{props.status}</p>
                <button className="btn btn-sm btn-warning" onClick={props.hapusArtikel}>Hapus</button>
            </div>
        </div>
    )
}

export default Post;