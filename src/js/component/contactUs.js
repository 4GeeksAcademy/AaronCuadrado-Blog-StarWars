import React from "react";
import "../../styles/index.css";


const ContactUs = () => {
    return (
        <div className="contact container">
            <div className="row">
                {/* Primera sección: Información relevante de Star Wars */}
                <div className="">
                    <div className="">
                        <div className="">
                            <h2 className="card-title text-warning">Historia</h2>
                            <p className="text-white">
                            Star Wars comienza con la lucha entre la República y los Sith, una orden oscura de usuarios de la Fuerza. Anakin Skywalker es entrenado como Jedi, pero su miedo lo lleva al lado oscuro, convirtiéndose en Darth Vader y ayudando a los Sith a dominar la galaxia.
                            </p>
                            <p className="text-white">
                            La Alianza Rebelde lucha contra el Imperio Galáctico, liderado por Vader y el Emperador Palpatine. Luke Skywalker, hijo de Anakin, se convierte en Jedi y destruye la Estrella de la Muerte. Con la ayuda de Leia y Han Solo, los rebeldes siguen combatiendo.
                            </p>
                            <p className="text-white">
                            Luke enfrenta a su padre en una batalla decisiva, logrando que Anakin regrese al lado luminoso y destruya al Emperador. La galaxia celebra la caída del Imperio, pero nuevos conflictos y amenazas como el Primero Orden surgen en los años posteriores.
                            </p>

                            <p className="card-title text-warning">
                                ¡MADE THE FORCE BE WITH YOU! ( No he visto StarWars ( Aaron ))
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;
