import ourServiceImage from './assets/img/img_service.png'
import iconComplete from './assets/img/icon_complete.png'
import iconPrice from './assets/img/icon_price.png'
import iconProfessional from './assets/img/icon_professional.png'
import icon24Hours from './assets/img/icon_24hrs.png'
import styles from './assets/css/landingPage.module.css'
import Form from 'react-bootstrap/Form';
import { data } from '../Testimonials/assets/data/data'
import { Carousel } from "react-bootstrap";
import Testimonial from '../Testimonials/Testimonials'

const LandingPage = () => {

    return (
        <div>
            <section id="our-service">
                <div className="d-flex flex-row justify-content-center flex-wrap p-lg-5 p-md-4 py-5 my-5">
                    <div className="px-5 py-3">
                        <img src={ourServiceImage} alt="img_service" className="img-fluid" />
                    </div>
                    <div className="px-5 py-5" style={{ width: "500px" }}>
                        <h1 className={styles.textTitle}>Best Car Rental for any kind of trip in Jogjakarta!</h1>
                        <p className={styles.textSubtitle}>Sewa mobil di (Lokasimu) bersama Binar Car Rental
                            jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan
                            terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                        <div>
                            <ul className={styles.ul}>
                                <li className={styles.textSubtitle}>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                                <li className={styles.textSubtitle}>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                                <li className={styles.textSubtitle}>Sewa Mobil Jangka Panjang Bulanan</li>
                                <li className={styles.textSubtitle}>Gratis Antar - Jemput Mobil di Bandara</li>
                                <li className={styles.textSubtitle}>Layanan Airport Transfer / Drop In Out</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <section id="why-us">
                <div className="container px-5">
                    <h1 className={styles.textTitle}>Why Us?</h1>
                    <p className={styles.textSubtitle}>Mengapa harus pilih Binar Car Rental?</p>
                    <div className="d-flex justify-content-center row">
                        <div className="col col-lg-3 col-md-6 col-9 d-flex p-2 p-lg-4">
                            <div className="card" style={{ width: "100%" }}>
                                <div className="p-4">
                                    <img src={iconComplete} alt="icon_complete" className="py-2" />
                                    <h6 className={styles.textSubtitle}><strong>Mobil Lengkap</strong></h6>
                                    <p className={styles.textSubtitle}>Tersedia banyak pilihan mobil, kondisi masih baru,bersih dan
                                        terawat</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-9 d-flex p-2 p-lg-4">
                            <div className="card" style={{ width: "100%" }}>
                                <div className="p-4">
                                    <img src={iconPrice} alt="icon_price" className="py-2" />
                                    <h6 className={styles.textSubtitle}><strong>Harga Murah</strong>
                                    </h6>
                                    <p className={styles.textSubtitle}>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
                                        mobil lain</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-9 d-flex p-2 p-lg-4">
                            <div className="card" style={{ width: "100%" }}>
                                <div className="p-4">
                                    <img src={icon24Hours} alt="icon_24hrs" className="py-2" />
                                    <h6 className={styles.textSubtitle}><strong>Layanan 24 Jam</strong> </h6>
                                    <p className={styles.textSubtitle}>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                                        tersedia di akhir minggu</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-9 d-flex p-2 p-lg-4">
                            <div className="card" style={{ width: "100%" }}>
                                <div className="p-4">
                                    <img src={iconProfessional} alt="icon_professional" className="py-2" />
                                    <h6 className={styles.textSubtitle}><strong>Sopir Profesional</strong></h6>
                                    <p className={styles.textSubtitle}>Sopir yang profesional,berpengalaman, jujur, ramah dan selalu tepat
                                        waktu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             
            <section id="testimonial">
                <div className="container p-5">
                    <div className="justify-content-center row">
                        <div className="col-12" style={{ textAlign: "center" }}>
                            <h1 className={styles.textTitle}>Testimonial</h1>
                            <p className={styles.textSubtitle}>Berbagai review positif dari para pelanggan kami
                            </p>
                        </div>
                        <Carousel className ="col-10 col-lg-6">
                                {data.map(event => (
                                    <Carousel.Item key={event.id}>
                                        <Testimonial
                                            name={event.name}
                                            comment={event.comment}
                                            address={event.address}
                                            image={event.image} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            </div>
                            </div>
                            </section>
                        


            <section id="faq">
                <div className="container p-5">
                    <div className="row">
                        <div className="col col-12 col-lg-5">
                            <div>
                                <h1 className={styles.textTitle}> Frequently Asked Question</h1>
                                <p className={styles.textSubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </div>
                        <div className="col col-12 col-lg-7">
                            <Form.Select size="sm" type="text"
                                className={styles.faqFormPadding}
                            >
                                <option value="">Apa saja syarat yang dibutuhkan?</option>
                                <option value="1">option 1</option>
                                <option value="2">option 2</option>
                                <option value="3">option 3</option>
                            </Form.Select>
                            <Form.Select size="sm" type="text"
                                className={styles.faqFormPadding}
                            >
                                <option value="">Berapa hari minimal sewa mobil lepas kunci?</option>
                                <option value="1">option 1</option>
                                <option value="2">option 2</option>
                                <option value="3">option 3</option>
                            </Form.Select>
                            <Form.Select size="sm" type="text"
                                className={styles.faqFormPadding}
                            >
                                <option value="">Berapa hari sebelumnya sabaiknya booking sewa mobil?</option>
                                <option value="1">option 1</option>
                                <option value="2">option 2</option>
                                <option value="3">option 3</option>
                            </Form.Select>
                            <Form.Select size="sm" type="text"
                                className={styles.faqFormPadding}
                            >
                                <option value="" hidden>Apakah Ada biaya antar-jemput?</option>
                                <option value="1">option 1</option>
                                <option value="2">option 2</option>
                                <option value="3">option 3</option>
                            </Form.Select>
                            <Form.Select size="sm" type="text"
                                className={styles.faqFormPadding}
                            >
                                <option value="">Bagaimana jika terjadi kecelakaan?</option>
                                <option value="1">option 1</option>
                                <option value="2">option 2</option>
                                <option value="3">option 3</option>
                            </Form.Select>
                        </div>
                    </div>
                </div>
            </section>


        </div >
    )
}

export default LandingPage