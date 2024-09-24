import React from "react";
import "../../styles/index.css";


const ContactUs = () => {
    return (
        <div className="contact container">
            <div className="row">
                {/* Primera sección: Información relevante de Star Wars */}
                <div className="col-md-6">
                    <div className="mb-3">
                        <div className="">
                            <h2 className="card-title text-warning">History</h2>
                            <p className="text-white">
                                En una galaxia muy, muy lejana, se libraba una guerra entre la opresiva y tecnológicamente avanzada República Galáctica y los separatistas liderados por el Conde Dooku. En medio de este conflicto, un joven llamado Anakin Skywalker, dotado de habilidades extraordinarias en la Fuerza, es descubierto por el Maestro Jedi Qui-Gon Jinn. Convencido de su potencial, Qui-Gon lo lleva ante el Consejo Jedi en Coruscant, donde es entrenado por Obi-Wan Kenobi.
                            </p>
                            <p className="text-white">
                                Anakin, a pesar de su talento, lucha constantemente con sus propias emociones y deseos, especialmente su amor secreto por Padmé Amidala, la senadora de Naboo. Eventualmente, Anakin se convierte en el legendario Caballero Jedi, pero su destino se ve ensombrecido por la profecía de que él traerá equilibrio a la Fuerza, pero también podría caer en la oscuridad.
                            </p>
                            <p className="text-white">
                                La historia de Star Wars abarca generaciones, con épicas batallas espaciales, intrigas políticas, y una constante lucha entre el bien y el mal. Personajes icónicos como Darth Vader, Luke Skywalker, Leia Organa y muchos más, han dejado una huella indeleble en la cultura popular galáctica.
                            </p>

                            <p className="card-title text-warning">
                                ¡MADE THE FORCE BE WITH YOU!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Segunda sección: Formulario de contacto */}
                <div className="col-md-6">
                    <div className="mb-3">
                        <div className="">
                            <h2 className="card-title text-warning">Contact Us</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label text-white">Full Name</label>
                                    <input type="text" className="form-control" id="fullName" name="fullName" placeholder="Insert your name..." />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-white">Email address</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Insert your email..." />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label text-white">Message</label>
                                    <textarea className="form-control" id="message" name="message" rows="5" placeholder="Insert your message..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-warning">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
