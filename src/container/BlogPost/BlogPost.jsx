import React, { Component } from "react";
import './BlogPost.css';

import Post from "../../component/BlogPost/Post";

class BlogPost extends Component {

    state = {
        listArtikel: [],
        insertArtikel: {
            NIM: "",
            id: 1,
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/mahasiswa')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusArtikel = (data) => {
        fetch(`http://localhost:3001/mahasiswa/${data}`, { method: 'DELETE' })
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = { ...this.state.insertArtikel };
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">

                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">
                            Nama Mahasiswa
                            </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahArtikel} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="NIM" className="col-sm-2 col-form-label">
                            NIM
                            </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="NIM" name="NIM" rows="3" onChange={this.handleTambahArtikel} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">
                            alamat
                            </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="alamat" name="alamat" rows="3" onChange={this.handleTambahArtikel} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="hp" className="col-sm-2 col-form-label">
                            hp
                            </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="hp" name="hp" rows="3" onChange={this.handleTambahArtikel} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">
                            angkatan
                            </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="angkatan" name="angkatan" rows="3" onChange={this.handleTambahArtikel} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">
                            status
                            </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="status" name="status" rows="3" onChange={this.handleTambahArtikel} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={() => this.handleTombolSimpan()}>Simpan</button>
                </div>
                <h2>Daftar Biodata Mahasiswa</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} nim={artikel.NIM} nama={artikel.nama} alamat={artikel.alamat} hp={artikel.hp} angkatan={artikel.angkatan} status={artikel.status} hapusArtikel={() => this.handleHapusArtikel(artikel.id)} />
                    })
                }
            </div>
        )
    }
}

export default BlogPost;