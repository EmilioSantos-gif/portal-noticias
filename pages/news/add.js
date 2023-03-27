import Link from "next/link"
import {useState} from "react"
import { useRouter } from "next/router"
import Layout from "@/components/Layout"
import API_URL from "@/config/index"
import styles from "@/styles/Form.module.css"
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function AddNews () {
    const [values, setValues] = useState({
        name: "",
        detail: "",
        date: "",
        time: ""
    });
    
    const {name, detail, date, time} = values;

    const handleSubmit = (e) => {
        console.log("submitted")
        e.preventDefault();
        const emptyFieldCheck = Object.values(values).some(element => element === "");

        if (emptyFieldCheck) {
            toast.error("Por favor, rellene todos los campos")
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
    };

    return (
        <Layout title="Añadir Nueva Noticia Deportiva">
            <Link href="/news">Go back</Link>
            <h2>Añadir Noticia Deportiva</h2>
            <ToastContainer />
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.grid}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                        name="name"
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <input
                        name="date"
                        type="date"
                        id="date"
                        value={date}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="time">Time</label>
                        <input
                        name="time"
                        type="text"
                        id="time"
                        value={time}
                        onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="detail">Detail</label>
                    <textarea
                    name="detail"
                    type="text"
                    id="detail"
                    value={detail}
                    onChange={handleInputChange}
                    />
                </div>
                <input className="btn" type="submit" value="Añadir Noticia"/>
            </form>
        </Layout>
    );
}
 