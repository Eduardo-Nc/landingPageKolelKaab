import React, { useState } from 'react';
import './Privacidad.css';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';
import moment from 'moment';


const Terminos = () => {

    const [idioma, setIdioma] = useState(false)


    return (
        <div className="cont-prin-privacidad">

            <div className="cont-header-privacidad">
                <div className="cont-btn-back">
                    <Link to="/">
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                </div>

                <div className="cont-logo-privacidad">
                    <div>
                        <img src={Logo} />
                    </div>
                </div>
            </div>

            <div className="cont-text-privacidad">



                <div className="cont-title-privacidad">
                    <div className="idioma-all-privacidad">
                        <h5 onClick={() => {
                            setIdioma(false)
                        }} style={{ fontWeight: idioma ? '500' : 'bold' }} >English</h5>
                        <h4 style={{ marginRight: '5px', marginLeft: '5px' }}>/</h4>
                        <h5 onClick={() => {
                            setIdioma(true)
                        }} style={{ fontWeight: idioma ? 'bold' : '500' }}>Spanish</h5>
                    </div>
                    {idioma ?
                        <h1>TÉRMINOS Y CONDICIONES QUE RIGEN EL USO DE LA APLICACIÓN “BeyondLife (app)”  OPERADA POR MÁS ALLÁ DE LA VIDA, S.A.P.I. DE C.V., EN ADELANTE REFERIDO COMO “BEYONDLIFE”, CON LOS USUARIOS DE DICHA APLICACIÓN, EN ADELANTE REFERIDO COMO “USUARIO” Y/O “USTED”.</h1>
                        :
                        <h1>TERMS AND CONDITIONS GOVERNING THE USE OF THE “BeyondLife (app)” APPLICATION OPERATED BY MÁS ALLÁ DE LA VIDA, S.A.P.I. DE C.V., HEREIN REFERRED TO AS “BEYONDLIFE”, WITH THE USERS OF SAID APPLICATION, HEREIN REFERRED TO AS “USER” AND/OR “YOU”.</h1>
                    }
                </div>


                {idioma ?
                    <div className="cont-parrafos-privacidad">
                        <strong>
                            1. INTRODUCCIÓN.
                        </strong>
                        <p>
                            BeyondLife (app) es una aplicación de software de dispositivo móvil que ofrece funciones de crear, almacenar, guardar, administrar, etiquetar, recopilar, organizar, compartir y/o transferir información en la propia BeyondLife (app), es decir, no fuera de ésta, mediante una bóveda virtual de alta seguridad con la capacidad de asignar información a terceros después del fallecimiento del Usuario en la propia BeyondLife (app) (conjuntamente las “Funciones BeyondLife” o “Función BeyondLife”). Por lo tanto, al descargar, acceder, navegar y/o utilizar la BeyondLife (app), y cualquier  otra aplicación móvil y/o página de internet de la propiedad, controladas u ofrecidas por BEYONDLIFE, se interpretará como un hecho inequívoco de que Usted reconoce que ha leído detenidamente y acepta que quedará obligado por estos términos y condiciones (los  “Términos”). Si no está de acuerdo con estos Términos, por favor, deje de utilizar nuestra BeyondLife (app) inmediatamente. BEYONDLIFE se reserva el derecho de modificar estos Términos en  cualquier momento. Le recomendamos que compruebe periódicamente la BeyondLife (app) y/o  la página web de BEYONDLIFE para consultar cualquier actualización. Al acceder, navegar y/o  utilizar cualquier Función BeyondLife después de que los cambios a los Términos hayan sido publicados, Usted acepta que quedará obligado por los Términos actualizados. En su caso,  BEYONDLIFE sin estar obligado, le podrá requerir en cualquier momento, la aceptación expresa de cualquier modificación  a los Términos para que Usted pueda continuar con el uso de la BeyondLife (app).
                            <br></br><br></br>
                            Estos términos constituyen el contrato obligatorio entre Usted y BEYONDLIFE.
                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            2. LICENCIA DE USO.
                        </strong>
                        <p>
                            Sujeto al cumplimiento de los Términos en todos sus aspectos, BEYONDLIFE le concede una  licencia limitada, no exclusiva, no transferible, no sub-licenciable y revocable para acceder  y guardar información en la BeyondLife (app) para el uso personal, no comercial y exclusivo de Usted como Usuario.

                            Se requiere a los Usuarios de las Funciones BeyondLife, no copiar, imprimir, fotografiar, grabar, obtener capturas de pantalla o de cualquier otra manera reproducir el contenido de la BeyondLife (app) para un uso distinto del aquí mencionado y sin contar con autorización para ello. De igual modo, la reproducción y comunicación pública fuera de la BeyondLife (app) de fotografías, videos, obras o cualquier otro contenido publicado se encuentra estrictamente  prohibido y puede resultar en la cancelación de las Funciones BeyondLife a Usted,  independientemente de cualquier otra acción que BEYONDLIFE considere necesaria o  conveniente para perseguir este incumplimiento.

                            BEYONDLIFE se reserva el derecho de terminar la licencia otorgada a Usted para utilizar las  Funciones BeyondLife en cualquier momento y por cualquier causa, incluyendo, sin limitar, la  violación a los Términos y condiciones que aquí se establecen.

                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            3. ELEGIBILIDAD PARA EL USO ADECUADO DE LA BEYONDLIFE (app).
                        </strong>
                        <p>
                            Para algunas Funciones BeyondLife es necesario que el Usuario cuente con la mayoría de edad establecida en el país donde resida, por lo que es su responsabilidad confirmar que el uso de la BeyondLife (app) es permisible bajo las leyes y reglamentos aplicables en la jurisdicción en donde hace uso de la misma. Si las leyes y reglamentos aplicables prohíben el uso de la BeyondLife (app), deberá abstenerse de utilizarla.
                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            4. NO GARANTÍA Y LIMITACIÓN DE RESPONSABILIDAD.
                        </strong>
                        <p>
                            BEYONDLIFE OFRECE LAS FUNCIONES BEYONDLIFE “CÓMO SE ENCUENTRAN” Y “CÓMO ESTÁN  DISPONIBLES”. BEYONDLIFE Y SUS MATRICES, CONTROLADORAS, FILIALES, SUBSIDIARIAS,  REPRESENTANTES, DIRECTORES, EMPLEADOS, AGENTES, APODERADOS, SOCIOS Y/O LICENCIATARIOS (INDISTINTAMENTE DENOMINADOS DE IGUAL MANERA COMO “BEYONDLIFE”)  NO OFRECEN NINGÚN TIPO DE GARANTÍA, NI TIENEN NINGÚN TIPO DE RESPONSABILIDAD SOBRE LAS FUNCIONES BEYONDLIFE, LA INFORMACIÓN ALMACENADA, LAS INSTRUCCIONES QUE EL USUARIO DESEE LLEVAR A CABO AL MOMENTO DE SU FALLECIMIENTO, NI DE LA VERACIDAD DE LA INFORMACIÓN INGRESADA POR EL USUARIO. BEYONDLIFE NO REALIZA NINGÚN TIPO DE AFIRMACIÓN, ASESORÍA Y/O GARANTÍA ACERCA DE LA VERACIDAD, PRECISIÓN Y/O INTEGRIDAD DE LA INFORMACIÓN CONTENIDA Y PROPORCIONADA EN LA BEYONDLIFE (APP) Y/O EN CUALQUIERA DE LAS FUNCIONES BEYONDLIFE. BEYONDLIFE NO SE RESPONSABILIZA POR, NI GARANTIZA QUE, NI LA BEYONDLIFE (APP) NI LAS FUNCIONES BEYONDLIFE, SEAN ININTERRUMPIDAS O LIBRES DE ERRORES, ASÍ  COMO QUE TAMPOCO GARANTIZA QUE DICHOS ERRORES SE CORREGIRÁN O QUE LA BEYONDLIFE (APP) O SERVIDORES QUE LA HACEN DISPONIBLE Y/O A SUS FUNCIONES ESTARÁN LIBRES  DE VIRUS U OTROS COMPONENTES DAÑINOS.
                            <br></br> <br></br>
                            USTED COMPRENDE Y ACEPTA QUE EL USO Y DESCARGA DE LA BEYONDLIFE (APP), ASÍ COMO LAS FUNCIONES BEYONDLIFE, SE ACEPTAN A SU ENTERA DISCRECIÓN Y COMPLETO RIESGO, ASÍ COMO QUE USTED SERÁ EL ÚNICO RESPONSABLE DE CUALQUIER DAÑO QUE DERIVE DE DICHO USO Y/O TRANSFERENCIA DENTRO DE LA PROPIA BEYONDLIFE (APP) Y QUE ESTÁ USTED CONSCIENTE QUE NO SE PUEDE TRANSMITIR INFORMACIÓN FUERA DE LA BEYONDLIFE (APP), SI NO ES A OTRO USUARIO AUTORIZADO Y ELEGIDO POR USTED.  BAJO NINGUNA CIRCUNSTANCIA BEYONDLIFE SERÁ RESPONSABLE POR CUALESQUIERA DAÑOS  DIRECTOS, INDIRECTOS, ESPECIALES, INCIDENTALES, CONSECUENCIALES, PUNITIVOS DE  CUALQUIER TIPO, EJEMPLARES O POR PERJUICIOS (INCLUYENDO EN FORMA ENUNCIATIVA  Y NO LIMITATIVA AL “LUCRO CESANTE, DAÑO MORAL, DAÑOS INDIRECTOS, DAÑOS  ULTERIORES, ETC.”), PÉRDIDA DE GANANCIAS, PÉRDIDA DE INGRESOS, PÉRDIDA DE USO DE LAS FUNCIONES BEYONDLIFE O DE CUALQUIER SERVICIO RELACIONADO, INTERRUPCIÓN DE NEGOCIOS, COSTO DE CAPITAL, COSTO DE COBERTURAS, COSTO PROVOCADOS POR TIEMPO NO TRABAJADO, LAS RECLAMACIONES DE LOS CLIENTES DEL USUARIO POR TALES DAÑOS O CUALESQUIERA OTROS DAÑOS (ORIGINADOS POR CUALQUIER CAUSA, POR EJEMPLO, NEGLIGENCIA, ETC.), INCLUYENDO, SIN LIMITACIÓN, DAÑOS RELACIONADOS  CON EL USO, MAL USO, CONFIANZA EN O INCOMPETENCIA PARA UTILIZAR LAS FUNCIONES BEYONDLIFE Y LA INTERRUPCIÓN, SUSPENSIÓN O TERMINACIÓN DE CUALQUIER FUNCIÓN BEYONDLIFE Y DAÑOS RESULTANTES DE LA PÉRDIDA DE DATOS, YA SEA QUE BEYONDLIFE HAYA O NO SIDO  NOTIFICADA DE DICHA POSIBILIDAD Y CON INDEPENDENCIA DE QUE DICHOS DAÑOS  PUDIERAN HABER SIDO PREVISTOS. SU ÚNICO DERECHO CON RESPECTO A UNA  INCONFORMIDAD CON LAS FUNCIONES BEYONDLIFE SERÁ TERMINAR EL USO DE LA BEYONDLIFE (APP) Y ELIMINARLA DE SU DISPOSITIVO MÓVIL.
                            <br></br> <br></br>
                            USTED COMPRENDE QUE EL USO DE LAS FUNCIONES BEYONDLIFE PODRÍA INVOLUCRAR RIESGOS  CONOCIDOS O RIESGOS NO ANTICIPADOS QUE PUDIERAN RESULTAR EN LESIONES, MUERTE  O ENFERMEDAD INCLUYENDO, SIN LIMITAR, PELIGROS QUE PUDIERAN SER CAUSADOS POR  ACTOS DE TERCEROS, U OCURRENCIAS FUERA DEL CONTROL DE BEYONDLIFE. AL UTILIZAR LA BEYONDLIFE (APP) Y/O LAS FUNCIONES BEYONDLIFE, USTED ASUME TODOS LOS RIESGOS, PELIGROS Y LA RESPONSABILIDAD POR CUALQUIER PÉRDIDA Y/O DAÑOS. USTED VOLUNTARIAMENTE LIBERA A BEYONDLIFE, DE CUALQUIER RESPONSABILIDAD Y RENUNCIA A FORMULAR CUALQUIER RECLAMO, DEMANDA O CAUSA DE ACCIÓN CONTRA  BEYONDLIFE POR DAÑOS CORPORALES, PÉRDIDA O DAÑOS A LA PROPIEDAD, MUERTE, PÉRDIDA DE INGRESOS O SERVICIOS DE TERCEROS O CUALESQUIERA OTRAS CAUSAS QUE PUDIERAN  ORIGINARSE O RELACIONARSE CON EL USO DE LAS FUNCIONES BEYONDLIFE Y/O LA BEYONDLIFE (APP).
                            <br></br> <br></br>
                            LAS FUNCIONES BEYONDLIFE SON PARA USO PERSONAL, INDIVIDUAL, NO COMERCIAL.
                            <br></br> <br></br>
                            USTED RECONOCE Y ACEPTA QUE BEYONDLIFE HA OFRECIDO LAS FUNCIONES BEYONDLIFE,  ESTABLECIDO SUS PRECIOS, Y CELEBRADO ESTOS TÉRMINOS BASADO EN LAS  DECLARACIONES ANTERIORES. DE IGUAL MODO RECONOCE Y ACEPTA QUE LA NO  GARANTÍA Y LA LIMITACIÓN DE RESPONSABILIDAD CONTENIDA EN ESTOS TÉRMINOS  REFLEJA UN JUSTO Y RAZONABLE RECONOCIMIENTO DE RIESGOS A CARGO DE USTED CON  BEYONDLIFE Y QUE LA NO GARANTÍA Y LIMITACIÓN DE RESPONSABILIDAD ESTABLECIDA EN ESTOS  TÉRMINOS ES UNA BASE ESENCIAL SIN LA CUAL BEYONDLIFE NO PODRÍA OFRECER EL USO  DE SU PLATAFORMA DE MANERA ECONÓMICAMENTE VIABLE Y/O RAZONABLE,  ATENDIENDO INCLUSIVE A LA NATURALEZA DE LA INTELIGENCIA ARTIFICIAL.
                            <br></br> <br></br>
                            SI A PESAR DE LO AQUÍ ESTABLECIDO, EN EL EXTREMO CASO DE QUE BEYONDLIFE SEA  RESPONSABLE DE REEMBOLSAR O INDEMNIZAR DE ALGUNA FORMA A UN USUARIO, EL USUARIO EN CUESTIÓN ACEPTA Y RECONOCE QUE SÓLO TENDRÁ  DERECHO A QUE SE LE REEMBOLSE O INDEMNICE HASTA POR EL MONTO PAGADO DIRECTA  Y ORIGINALMENTE A BEYONDLIFE, ES DECIR, EL PRECIO POR LA SUSCRIPCIÓN A LA BEYONDLIFE (APP) EN EL MOMENTO EN QUE SURJA EL EVENTO GENERADOR DE RESPONSABILIDAD, MÁS EN NINGÚN MOMENTO ANTES O DESPUÉS DE DICHO EVENTO.

                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            5. CAMBIOS EN LAS FUNCIONES BEYONDLIFE.
                        </strong>
                        <p>
                            BEYONDLIFE se reserva el derecho de modificar o discontinuar, de forma temporal o permanente, las Funciones BeyondLife (o cualquier parte de las mismas) con o sin previo aviso. Usted acepta que BEYONDLIFE no será responsable ante Usted ni ante ningún tercero por cualquier  modificación, suspensión o interrupción de las Funciones BeyondLife (ni de ninguna parte de los  mismos).
                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            6. CONTENIDO BEYONDLIFE.
                        </strong>
                        <p>
                            BEYONDLIFE, su logotipo, aviso comercial, el diseño y las capturas de pantalla de la BeyondLife (app) son marcas registradas o en trámite de registro o sujetas a otros derechos de propiedad  intelectual e industrial por parte de BEYONDLIFE, y no pueden ser bajo ningún motivo reproducidas, utilizadas, compartidas, etc sin previa y expresa  autorización por un escrito de BEYONDLIFE. Cualesquiera otras marcas que no sean propiedad de BEYONDLIFE que aparezcan en las Funciones BeyondLife son propiedad de sus titulares respectivos, quienes podrán o no estar afiliadas, relacionadas o patrocinadas por BEYONDLIFE, pero no pueden usarse comercialmente, sin autorización de su titular respectivo.
                            <br></br>
                            Todo el contenido en las Funciones BeyondLife, incluyendo toda información, inteligencia  artificial, datos, textos, software, música, sonidos, fotografías, gráficos, videos, mensajes,  scripts, etiquetas, compilaciones de lo anterior y/u otros materiales a los que se tiene  acceso a través de las Funciones BeyondLife, son propiedad de BEYONDLIFE y/o de sus licenciantes,  según corresponda (el "Contenido BEYONDLIFE"), y están protegidos por la leyes en materia de  propiedad intelectual en México, Estados Unidos, Canadá, Comunidad Europea, y en general a nivel internacional en leyes y tratados. A excepción de lo expresamente permitido bajo estos Términos, no se permitirá la reproducción, transmisión, modificación o exhibición de ningún Contenido BEYONDLIFE sin previo consentimiento expreso y por escrito; de lo contrario, el Usuario o la persona que infrinja  lo antes mencionado, se obliga a pagar los daños y perjuicios que se originen por motivo de  su incumplimiento.

                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            7. DESCRIPCIÓN Y OPERACIÓN DE LAS FUNCIONES BEYONDLIFE.
                        </strong>
                        <p>
                            Para acceder a las Funciones BeyondLife, Usted deberá crear un perfil de usuario y contraseña, o bien, podrá acceder a través de diversos perfiles en redes sociales. Usted será el único responsable de la veracidad y legal uso de los datos e información proporcionada para la  creación de su perfil.
                            <br></br><br></br>
                            Los módulos bajo los cuales operan las Funciones BeyondLife que ofrece la BeyondLife (app) son:
                            <br></br><br></br>
                            ●	Legado de Vida (Beyond Life): el Usuario, podrá dar de alta su voluntad póstuma, así como información necesaria para ejecutar su voluntad como pueden ser contactos para atención bancaria, de seguros y de seguimiento para ejecutar la herencia por medio de la captura de un texto, un video o una grabación de voz, así como el alta de un archivo por medio de la carga de estos mismos en la BeyondLife (app). También tendrá espacio para que los Usuarios puedan generar contenido que deseen que sus seres queridos puedan conocer para recordarlo.
                            <br></br><br></br>
                            ●	Legado de Bienestar (Beyond Wellness): permite al Usuario mantener un nivel de bienestar adecuado en los 5 tipos de bienestar: Físico; Mental; Emocional; Espiritual; y, Social. Estas mediciones se programan por defecto los parámetros base de acuerdo a términos médicos físicos y mentales recomendados por la Organización Mundial de la Salud, sin embargo esto será posible configurar individualmente por parte del Usuario. También permitirá guardar consejos, recomendaciones y/o incentivos para que los Usuarios puedan mantener una vida beneficiosa en los 5 tipos de bienestar. Esta información puede ser resguardada de manera enunciativa más no limitativa en archivos de texto, imagen, PDF, voz, video, etc.
                            <br></br><br></br>
                            ●	Legado Social (Beyond Social): los Usuarios, pueden integrar sus formas de acceso y de contacto con sus entornos sociales, como pueden ser accesos a redes sociales, conversaciones en chats y grabaciones de voz, inscripciones a clubes sociales y deportivos, afiliaciones a logias y comunidades, etc.
                            <br></br><br></br>
                            ●	Legado de Información Útil (Easy Life): consiste en una interfaz de seguridad de información que puede ser resguardada de manera enunciativa más no limitativa en archivos de texto, imagen, PDF, voz, video, etc. De igual manera se podrá integrar accesos directos para descargar aplicaciones móviles, sitios y otras herramientas tecnológicas que puedan ser de utilidad para facilitar la vida. También se podrá guardar información de contacto de prestadores de servicio, como son teléfono, correo electrónico, perfil de redes sociales o laborales, dirección, etc. Toda esta información se resguardará con la intención de poder tener un control de contactos para cubrir necesidades del día a día de los Usuarios.
                            <br></br><br></br>
                            ●	Legado Financiero (Beyond Financial): se enfoca en alojar los documentos e información necesaria para acceder a todos los recursos financieros, ya sea cuentas de bancos en diferentes lugares del mundo, seguros de vida, gastos médicos, inversiones, títulos de propiedad, pagarés y otros instrumentos financieros relevantes para el Usuario como lo pueden ser también Criptomonedas, NFT´S, etc. Estos pueden ser resguardados de manera enunciativa más no limitativa se podrán integrar archivos de texto, imagen, PDF, voz, video, etc.
                            <br></br><br></br>
                            ●	Bóveda de Máxima Seguridad (Beyond Confidential): este módulo permite al Usuario replicar cualquiera de los anteriores, así como crear sus propias secciones específicas, con la gran diferencia que serán operadas bajo la  generación de un NIP temporal que será enviado al punto de contacto preconfigurado (Correo electrónico, whatsapp, SMS, etc.), el cual solicitará una contraseña o la validación por medio de biométricos para su generación y envío y posterior presentará un campo para colocar el NIP enviado al punto de contacto. De igual manera esta función se podrá programar para que al momento de la confirmación de la defunción del Usuario esta información sea eliminada de manera definitiva de los servidores de la BeyondLife (app).
                            <br></br><br></br>
                            Si desea comunicarse con nosotros para comprender más sobre estos Términos o desea  comunicarse con nosotros en relación con cualquier asunto relacionado con la BeyondLife (app),  incluso si Usted considera que es procedente realizar una reclamación, por favor envíe un correo electrónico a la dirección electrónica señalada para tales efectos y proporcione la siguiente información: (a) una  descripción de la situación ocurrida; (b) teléfono y dirección de correo electrónico; (c) una  declaración de su parte indicando que la información contenida en la reclamación es veraz.
                            <br></br><br></br>
                            Una vez recibida la reclamación, BEYONDLIFE se pondrá en contacto con Usted vía correo  electrónico a la brevedad posible y le informará si la misma es procedente y, en su caso, si  requiere más información para resolver la reclamación o si procederá reembolso alguno  con motivo de la misma. Quedará a la sola discreción de BEYONDLIFE determinar si la reclamación formulada es procedente y, en su caso, el monto del reembolso que se realizará.

                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            8. PAGO.
                        </strong>
                        <p>
                            Si bien algunas de las Funciones BeyondLife son gratuitas, es posible que se apliquen cargos adicionales por uso de datos, derivados del uso en su móvil de las Funciones BeyondLife, o por cualquier otro concepto.
                            <br></br><br></br>
                            Los pagos por suscripciones serán cargados en una base pre-pago (mensual o anual), en el  día que Usted se suscribe y cubrirá el uso de esas Funciones BeyondLife por un periodo de  suscripción mensual o anual, según el tipo de suscripción que elija. Los pagos no son  reembolsables. A menos que Usted notifique a BEYONDLIFE que desea cancelar una suscripción, al menos un día hábil antes de que finalice el período de suscripción aplicable, su suscripción  se renovará automáticamente y Usted autoriza a BEYONDLIFE a cobrar la cuota de suscripción mensual o anual entonces aplicable para dicha suscripción (así como cualquier impuesto),  utilizando cualquier tarjeta de crédito u otro mecanismo de pago que tengamos registrado por Usted.
                            <br></br><br></br>
                            Si hubiere un cargo asociado con una parte de las Funciones BeyondLife, Usted acepta pagar ese cargo al acceder o utilizar la BeyondLife (app). El precio de estas Funciones BeyondLife estará indicado en la moneda que corresponda al lugar donde se utilicen las Funciones BeyondLife o en dólares americanos, según lo aplicable. Usted debe consultar con su institución  de crédito para determinar si el precio cobrado incluye todos los impuestos y, en su caso,  tarifas de cambio de divisa que sean aplicables. Usted es el único responsable de pagar dichos impuestos y cualquier otro cargo adicional. BEYONDLIFE ha confiado en portales de pago de terceros con la responsabilidad para cobrar los precios indicados. Su acceso a las Funciones BeyondLife que requieran pago pueden suspenderse o cancelarse si no realiza su pago a tiempo y/o en su totalidad. La suspensión o cancelación de las Funciones BeyondLife por falta de pago puede ocasionar la pérdida de acceso y uso de su cuenta y su contenido.
                            <br></br><br></br>
                            Usted debe realizar todos los pagos a través de los portales de pago ofrecidos en la BEYONDLIFE (app). BEYONDLIFE no realiza ningún tratamiento de sus datos bancarios o uso de cuentas de  portales de pago. Dichos datos son tratados única y exclusivamente por el portal de pago utilizado, por lo cual, para consultar las políticas y términos y condiciones de operación de dichos portales de pago, así como el tratamiento que se realizará de sus datos bancarios o de cuentas de pago, Usted deberá acceder a la información publicada por éstos en sus  respectivos sitios web o aplicaciones.
                            <br></br><br></br>
                            Usted acepta pagar todos los cargos incurridos en relación con el uso de las Funciones  BEYONDLIFE (incluyendo cualquier impuesto aplicable) de acuerdo a las tarifas en vigor al  momento en que los cargos fueron incurridos.
                            <br></br><br></br>
                            ENTRE USTED Y BEYONDLIFE, USTED ES RESPONSABLE Y NO BEYONDLIFE, DE PAGAR CUALQUIER CANTIDAD FACTURADA EN SU DISPOSITIVO MÓVIL, PAYPAL, TARJETA DE CRÉDITO O DÉBITO, POR UNA TIENDA DE APLICACIONES O POR TERCEROS QUE HAYAN TENIDO ACCESO  A ESTAS CUENTAS, INCLUSO SI NO FUERON AUTORIZADAS POR USTED.
                            <br></br><br></br>
                            BEYONDLIFE no tiene la capacidad de administrar ningún aspecto de sus datos bancarios, ni de ningún otro dato, bien que sea de terceros o proporcionado por Usted en el uso diario y/o cotidiano de BeyondLife (app). El pago se cargará a su cuenta por los portales de pago y enviará a BEYONDLIFE la confirmación de la compra, a efecto de que Usted pueda acceder al producto o servicio adquirido.
                            <br></br><br></br>
                            Debe tener en cuenta que borrar la aplicación BEYONDLIFE no cancelará su cuenta de Usuario y/o su suscripción de pago. Si elimina la BeyondLife (app), pero no realiza los pasos para desactivar su cuenta de Usuario (contactandonos en la sección “Contacto”) y no toma las medidas apropiadas, es posible que su perfil continúe activo en las Funciones BeyondLife y que sus herederos de información puedan acceder a ella al momento de su muerte.

                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            8.1 PROMOCIONES
                        </strong>
                        <p>
                            En caso de que BEYONDLIFE o cualquiera de sus patrocinadores o anunciantes decida llevar a cabo ciertas promociones que determine de tiempo en tiempo, Usted podrá gozar de los beneficios que BEYONDLIFE le otorgue en la BeyondLife (app), los cuales pueden consistir en pruebas gratuitas, por determinado tiempo, de las Funciones BeyondLife que requieran de un pago. Las promociones que en su momento ofrezca BEYONDLIFE, se  regirán conforme a las bases de promoción que se hagan de conocimiento por BEYONDLIFE o de terceros (patrocinadores o anunciantes) a través de los medios que considere pertinentes, sin embargo, no se considerará que modifican los Términos, por lo que todos los Términos seguirán vigentes, exentando temporalmente, en determinado caso, aquellos de los que las bases de promoción  indiquen.
                            <br></br><br></br>
                            BEYONDLIFE ofrecerá sus promociones y Funciones BeyondLife dentro de la propia BeyondLife (app) y/o dentro ecosistema al cual pertenece y/o sus redes sociales oficiales, por lo que desconocen todas aquellas promociones, ofertas y publicaciones que se realicen fuera de su ecosistema y/o de sus redes sociales oficiales y/o de la propia BeyondLife (app).

                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            9. SUGERENCIAS Y MEJORAS.
                        </strong>
                        <p>
                            Al enviarnos cualquier idea, comentarios, sugerencias, documentos u opiniones sobre las Funciones BeyondLife o propuestas (“Retroalimentación”), Usted acepta  que (i) su Retroalimentación no contiene información confidencial o exclusiva de terceros,  (ii) no tenemos ninguna obligación de confidencialidad, expresa o implícita sobre la  Retroalimentación, (iii) podríamos tener en desarrollo o bajo consideración algo similar a la  Retroalimentación, y (iv) Usted nos concede una licencia irrevocable, no exclusiva, sin  contraprestación alguna distinta de la posibilidad de uso de las Funciones BeyondLife, perpetua  o por todo el tiempo que permita la legislación aplicable en su jurisdicción, a nivel mundial, para utilizar, modificar, publicar, distribuir o sub-licenciar la Retroalimentación.
                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            10. MATERIALES EXTERNOS.
                        </strong>
                        <p>
                            Las Funciones BeyondLife y los Usuarios de las Funciones BeyondLife pueden proporcionar enlaces a otros sitios web o recursos. Usted reconoce y acepta que BEYONDLIFE no patrocina y no es responsable de ningún contenido, publicidad, productos, servicios u otros materiales disponibles a través de dichos sitios o recursos externos ("Materiales Externos"). Los  Materiales Externos están sujetos a diferentes términos y condiciones y avisos de  privacidad, que Usted es responsable de revisar. Además, reconoce y acepta que BEYONDLIFE no es en ningún momento responsable de cualquier daño o pérdida causada por o resultante  del uso o confianza puesta en dichos Materiales Externos.
                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            11. USOS PROHIBIDOS.
                        </strong>
                        <p>
                            USTED COMPRENDE Y CON EL USO DE LA BEYONDLIFE (APP) RECONOCE, ACEPTA Y GARANTIZA  QUE NO PODRÁ, DE MANERA ENUNCIATIVA MÁS NO LIMITATIVA:
                            <br></br><br></br>

                            ●	Utilizar las Funciones BeyondLife o cualquier información sobre localización desplegada en las  Funciones BeyondLife para acosar, abusar, difamar, amenazar o defraudar Usuarios de las Funciones BeyondLife, o para recolectar, intentar recolectar o almacenar  información personal o de localización de otros Usuarios;
                            <br></br><br></br>
                            ●	Incluir material ofensivo o pornográfico en perfil de la de BeyondLife (app) y/o en las Funciones BeyondLife;
                            <br></br><br></br>
                            ●	Usar las Funciones BeyondLife para cualquier uso comercial o no privado, en el entendido de  que las Funciones BeyondLife son exclusivamente para uso personal y no comercial;
                            <br></br><br></br>
                            ●	Utilizar las Funciones BeyondLife para cualquier propósito ilegal o en violación de cualquier ley u ordenamiento legal municipal, estatal, nacional o internacional, incluyendo, sin limitación, las leyes que rigen la propiedad intelectual y otros derechos de propiedad y  de protección de datos personales y privacidad, así como también el control de la  importación y exportación de información;
                            <br></br><br></br>
                            ●	Hacer ofertas no solicitadas, anuncios, propuestas o enviar correos no deseados a otros Usuarios de las Funciones BeyondLife. Esto incluye, pero no está limitado a,  publicidad no solicitada, material promocional u otros materiales que hayan sido  solicitados, envío masivo de publicidad comercial, cadenas, anuncios informativos,  peticiones de caridad y peticiones de firmas;
                            <br></br><br></br>
                            ●	Suplantar a cualquier persona y entidad, reclamar falsamente una afiliación con  cualquier persona o entidad, o acceder a las cuentas de otros Usuarios de las Funciones BeyondLife;
                            <br></br><br></br>
                            Crear perfiles con el objeto de dañar la reputación, imagen, nombre, honor o vida  privada de terceros y/o de la BeyondLife (app), BEYONDLIFE, sus representantes o anunciantes;
                            <br></br><br></br>
                            ●	Tergiversar la fuente, identidad o contenido de la información transmitida a través de las Funciones BeyondLife;
                            <br></br><br></br>
                            ●	Retirar, eludir, desactivar, dañar o de otra manera interferir con las características de seguridad de las Funciones BeyondLife, con características que previenen o restringen el uso o reproducción de cualquier contenido accesible a través de las Funciones BeyondLife, o con características que limitan el uso de las Funciones BeyondLife;
                            <br></br><br></br>
                            ●	Interferir intencionalmente con o dañar la operación de las Funciones BeyondLife o el disfrute de las mismas por parte de cualquier Usuario, por cualquier medio, incluyendo la carga  o diseminación de virus o malware;
                            <br></br><br></br>
                            ●	Publicar, almacenar, enviar, transmitir o difundir cualquier información o material que una persona razonable pudiera considerar objetable, litigioso, ofensivo, indecente, pornográfico, acosador, amenazante, motivo de vergüenza, estresante, vulgar, que  propicia el odio, racial o étnicamente ofensivo o de cualquier otro modo inapropiado,  con independencia de que dicho material o su comunicación sean ilícitos;
                            <br></br><br></br>
                            ●	Publicar, almacenar, enviar, transmitir o diseminar cualquier información o material que infrinja las patentes, marcas comerciales, secretos comerciales, derechos de autor, derechos conexos y cualquiera otra índole dentro del derecho de propiedad intelectual de BEYONDLIFE y/o sus Usuarios.
                            <br></br><br></br>
                            ●	Intentar obtener acceso no autorizado a las Funciones BeyondLife, o cualquier parte de estos, de otras cuentas, a sistemas informáticos o redes conectadas a las Funciones BeyondLife, o  cualquier parte de éstos, mediante hacking, extracción de contraseñas o cualquier otro  medio, o por interferir o intentar interferir con el funcionamiento adecuado de las Funciones BeyondLife o cualquier actividad relacionada con nuestras funciones;
                            <br></br><br></br>
                            ●	Usar cualquier robot, spider, scraper u otro medio automatizado para acceder a las  Funciones BeyondLife para cualquier propósito, sin nuestro permiso expreso por escrito y eludir nuestros protocolos de exclusión de robots u otras medidas que podemos utilizar  para prevenir o restringir el acceso a las Funciones BeyondLife o modificar las Funciones BeyondLife de cualquier forma, o para evitar el uso de versiones modificadas de las Funciones  BeyondLife incluyendo (sin limitar) para el propósito de obtener acceso no autorizado a las  Funciones BeyondLife.
                            <br></br><br></br>
                            ●	Realizar cualquier tipo de acción que implique directa o indirectamente que Usted es representante, distribuidor autorizado, empleado o que de cualquier otra manera representa, patrocina o apoya la BeyondLife (app) y/o a BEYONDLIFE.
                            <br></br><br></br>
                            ●	Crear perfiles para ofrecer, vender o de cualquier otro modo promover hábitos no  saludables, enfermedades, actividades ilícitas, prostitución, servicios de compañía,  racismo, discriminación, afiliación política o partidos políticos o bienes y servicios para  compañías, grupos y organizaciones con fines comerciales, raciales, políticos o religiosos.
                            <br></br><br></br>
                            COMO USUARIO DE LA BEYONDLIFE (APP), USTED PUEDE SOLICITAR ELIMINAR CUALQUIER  CONTENIDO QUE SEA DE ACCESO PÚBLICO EN LA BEYONDLIFE (APP) REALIZADO A TRAVÉS DE SU PERFIL. SIN EMBARGO, CUALQUIER COMUNICACIÓN PREVIA O CONTENIDO  COMPARTIDO PODRÁ SER MANTENIDA EN NUESTRO SERVIDOR, A PESAR DE NO ESTAR  DISPONIBLE PÚBLICAMENTE. DE IGUAL MODO, PUEDE DECIDIR DENUNCIAR PERFILES QUE PUDIERAN INFRINGIR ESTOS TÉRMINOS Y CONDICIONES, EN CUYO CASO, BEYONDLIFE SE  RESERVA EL DERECHO (SIN QUEDAR OBLIGADO DE MANERA ALGUNA) DE SUSPENDER  TEMPORALMENTE EL PERFIL INFRACTOR Y LA FUNCIÓN AL USUARIO REPORTADO Y LLEVAR  A CABO UNA INVESTIGACIÓN. SI, DERIVADO DE DICHA INVESTIGACIÓN, EL  INCUMPLIMIENTO A LOS TÉRMINOS RESULTARA CIERTO A CONSIDERACIÓN DE BEYONDLIFE,  BEYONDLIFE SE RESERVA EL DERECHO (SIN ESTAR OBLIGADO DE NINGUNA MANERA) A CANCELAR  EL PERFIL DEL USUARIO Y EL ACCESO A LA BEYONDLIFE (APP) Y LAS FUNCIONES BEYONDLIFE AL USUARIO  REPORTADO.

                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            12. CONTENIDO DEL USUARIO.
                        </strong>
                        <p>
                            Las Funciones BeyondLife pueden permitir al Usuario el resguardo y asignación a terceros respecto de información, contenido y materiales, tales como videos, podcasts, audios, fotografías, comentarios, imágenes, opiniones, valoraciones, ideas, notas, conceptos o sugerencias creativas, etc. (“Su Contenido”), y únicamente se pueden compartir con terceros dentro de la BeyondLife (app), en el entendido que Usted será el único responsable de la precisión, confiabilidad, veracidad, exactitud y legalidad de Su Contenido y las decisiones que tome respecto de Su Contenido dentro de la BeyondLife (app). En relación con Su Contenido, Usted acepta, declara y  garantiza: (i) que posee, o tiene las licencias, derechos, consentimientos y permisos necesarios para usar y autorizar, toda la propiedad intelectual y cualquier otro derecho de propiedad sobre Su Contenido para permitir su inclusión y uso en la manera contemplada por las Funciones BeyondLife y estos Términos; (ii) que Usted tiene el consentimiento por escrito, liberación de responsabilidad y/o permiso de cada una de las personas identificables en Su Contenido para usar su nombre y permitir su inclusión en la forma contemplada en las Funciones BeyondLife y estos Términos; y (iii) que Usted nos concede una  licencia irrevocable, no exclusiva, sin contraprestación alguna, perpetua o por todo el tiempo que permita la legislación aplicable en su jurisdicción, a nivel mundial, para llevar a cabo las acciones que Usted determine a través de la BeyondLife (app) al momento de su fallecimiento.
                            <br></br><br></br>
                            BEYONDLIFE no asume ninguna responsabilidad en relación con o derivada de Su Contenido. Si en cualquier momento BEYONDLIFE elige, a su discreción, monitorear Su Contenido, BEYONDLIFE no asume ninguna responsabilidad por dicho contenido, ni obligación alguna de modificar o remover contenido inapropiado, así como ninguna responsabilidad por la conducta del Usuario que cargue la información. Adicionalmente, BEYONDLIFE no apoya ni tiene control, conocimiento, acceso o forma de manipular Su Contenido. BEYONDLIFE no garantiza, expresa ni tácitamente, la precisión, confiabilidad, veracidad, exactitud y legalidad de Su Contenido.

                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            13. RESPONSABILIDAD POR SU CONTENIDO.
                        </strong>
                        <p>
                            Usted no deberá comunicar que Su Contenido está de cualquier manera patrocinado o  respaldado por BEYONDLIFE. BeyondLife (app) opera como una bóveda de su información, por lo que no tiene ningún vínculo con el contenido de esta, mucho menos acceso a Su Contenido.
                            <br></br><br></br>
                            Usted asume todos los riesgos asociados con Su Contenido, incluyendo su precisión, confiabilidad, veracidad, exactitud y legalidad, así como por cualquier difusión de su información que lo haga identificable personalmente y provea a terceros parte o la totalidad de Su Contenido. Usted declara que posee o  cuenta con los permisos necesarios para usar y autorizar el uso de Su Contenido como se  describe en estos Términos.
                            <br></br><br></br>
                            Usted podrá ser objeto de responsabilidad si, por ejemplo, Su Contenido contiene material  falso, intencionalmente engañoso o difamatorio; infringe cualquier derecho de tercero,  incluyendo derechos de autor, marcas, patentes, secretos industriales, derechos morales,  derecho a la privacidad, derecho de publicidad, o cualquier otro derecho de Propiedad  Industrial o Intelectual; contiene material contrario a la ley, incluyendo discursos ilegales de  odio o pornografía; explota o de cualquier otra manera daña a menores; daña el honor,  nombre, vida privada o la imagen de una persona o infringe o apoya la infracción de  cualquier ley o regulación.
                            <br></br><br></br>
                            En caso de que BEYONDLIFE reciba alguna notificación para la remoción, eliminación, retirada o inhabilitación de Su Contenido por una probable conducta infractora, BEYONDLIFE se sujetará en todo momento a los procedimientos legales que establece la Constitución del país donde se encuentre operando, Tratados Internacionales, Convenios o Convenciones, Leyes de Propiedad Intelectual, Códigos penales y otras disposiciones legales aplicables para realizar dicha remoción, eliminación, retirada o inhabilitación sin responsabilidad alguna para  BEYONDLIFE.

                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            14. NUESTRO DERECHO A USAR SU CONTENIDO.
                        </strong>
                        <p>
                            BEYONDLIFE no reclama la propiedad de Su Contenido. Sin embargo, en caso de que Usted  aloje Su contenido en nuestra BeyondLife (app), Usted nos concede una licencia por todo el tiempo que cuente con un perfil, mundial, libre de regalías o sin compensación distinta  que el derecho a utilizar la BeyondLife (app), para usar, distribuir, reproducir, modificar, traducir, adaptar, e inclusive eliminar o bien proporcionar Su Contenido a terceros designados que Usted indique pueden recibirla al momento de su fallecimiento en relación con su uso de las Funciones BeyondLife, en concordancia con estos Términos.
                            <br></br><br></br>
                            El Usuario reconoce y acepta que Su Contenido está ligado únicamente a la BeyondLife (app) bajo estricta confidencialidad y sin que BEYONDLIFE pueda tener acceso directo y/o indirecto a Su Contenido, por lo que Su Contenido únicamente se puede conocer por el Usuario y/o la persona que el Usuario haya designado para tal efecto, una vez que se suscite su fallecimiento. En tal sentido, BEYONDLIFE no será responsable ni tendrá ninguna obligación frente a terceros y/o autoridades de proporcionar Su Contenido, toda vez que BEYONDLIFE parte de la premisa que Su Contenido tiene la característica de ser secreto de aplicación comercial, industrial, social, entre otros fines.

                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            15. DATOS PERSONALES.
                        </strong>
                        <p>
                            Usted acepta y se obliga a que cualquier dato personal, dato personal sensible e  información acerca de Usted que sea compartida, contenida y/o publicada en el Sitio y  BeyondLife (app) será utilizada conforme a estos Términos y Condiciones y el Aviso de Privacidad de BEYONDLIFE el cual está disponible para su consulta en el sitio web de BEYONDLIFE.
                            <br></br><br></br>
                            BEYONDLIFE mantendrá estricta confidencialidad y tomará las medidas administrativas,  tecnológicas, técnicas y físicas de seguridad correspondientes para preservar la  confidencialidad de sus datos personales.
                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            16. PUBLICIDAD.
                        </strong>
                        <p>
                            BEYONDLIFE, sus patrocinadores, anunciantes y/o licenciantes pueden mostrar públicamente publicidad y otra información  en la BeyondLife (app) a pesar de que haya pagado alguna cuota por las Funciones BeyondLife. Usted no tiene derecho a ninguna compensación por dichos anuncios. La forma, el modo y el alcance de dicha publicidad están sujetos a cambios sin  previo aviso.
                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            17. INDEMNIZACIÓN.
                        </strong>
                        <p>
                            Usted acepta indemnizar, defender y mantener a BEYONDLIFE, sus socios, accionistas, filiales, subsidiarias, contraoladoras, empleados, agentes, asociados y representantes libres de  cualquier responsabilidad frente y en contra de cualesquiera reclamaciones, demandas,  acciones, pérdidas, costos, daños y otras responsabilidades, incluyendo honorarios de  abogados, derivadas de o relacionadas con su uso de las Funciones BeyondLife en  incumplimiento de estos Términos, incluyendo, sin limitar: (a) su uso o mal uso de las Funciones BeyondLife, (b) cualquier violación de los derechos de cualquier persona o entidad por parte de Usted, (c) cualquier incumplimiento o violación a los Términos por parte de Usted, o (d) su uso de las Funciones BeyondLife para comunicarse con o conocer otros Usuarios en persona o para localizarlos. BEYONDLIFE se reserva el derecho de asumir la defensa exclusiva y control de cualquier asunto del cual Usted requiera indemnizarnos y Usted acuerda cooperar para nuestra defensa contra estas reclamaciones.
                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            18. INTERACCIONES CON OTROS USUARIOS.
                        </strong>
                        <p>
                            Usted es el único responsable de sus interacciones con otros Usuarios que utilizan las  Funciones BeyondLife y BEYONDLIFE bajo ninguna circunstancia será responsable de estas  interacciones. BEYONDLIFE no realiza verificación de antecedentes ni otro tipo de investigaciones previas sobre sus Usuarios, pero se reserva el derecho de hacerlo en cualquier momento. BEYONDLIFE no asume responsabilidad alguna por sus interacciones con otros Usuarios y no respalda ni garantiza la conducta de dichos Usuarios y/o la información que proveen y/o las declaraciones que realicen. Usted acepta tomar precauciones razonables en sus interacciones con otros Usuarios de las Funciones BeyondLife. BEYONDLIFE no es responsable de  monitorear cualquier disputa entre Usted y otros Usuarios.
                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            19. CUENTA DE REGISTRO Y CONTRASEÑA.
                        </strong>
                        <p>
                            Usted es responsable de mantener la confidencialidad de su contraseña y cuenta de la  BeyondLife (app), así como de todas las actividades que ocurran en relación con ésta. Usted acepta notificar de inmediato a BEYONDLIFE de cualquier uso real o sospechosamente no  autorizado de su contraseña y/o cuenta o de cualquier otra violación de seguridad. Usted  acepta que toda la información que provee a BEYONDLIFE como parte del proceso de registro incluyendo, sin limitar, su nombre y dirección de correo electrónico o perfil de redes sociales, es veraz, precisa y completa.
                            <br></br><br></br>
                            Le informamos que en la(s) página(s) de internet y/o aplicaciones administradas por BEYONDLIFE, utilizamos cookies, web beacons y otras tecnologías (“Cookies”), a través de las cuales es  posible monitorear su comportamiento como usuario de Internet, brindarle un mejor servicio y experiencia de usuario al navegar en nuestra página, así como ofrecerle otras  funciones basadas en sus preferencias.
                            <br></br><br></br>
                            Los datos que obtenemos de estas tecnologías de rastreo son aquellos que se enlistan en  la página de internet de BEYONDLIFE.
                            <br></br><br></br>
                            Estas tecnologías podrán deshabilitarse configurando su navegador  de internet para que no acepte las “Cookies” de la(s) página(s) de internet y/o aplicaciones  administradas por BEYONDLIFE.
                            <br></br><br></br>
                            Las cookies se guardarán en su terminal (computadora, laptop, teléfono inteligente, tablet  u otro dispositivo electrónico). También puede configurarlas en su navegador de internet  para que no acepte las “Cookies” de la(s) página(s) de internet y/o aplicaciones  administradas por BEYONDLIFE. Para más información, puede enviarnos un correo electrónico.

                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            20. LEY APLICABLE.
                        </strong>
                        <p>
                            La interpretación de estos Términos y su relación con BEYONDLIFE bajo los mismos se regirá al  tenor de las leyes aplicables en el país donde la aplicación se haya descargado y se esté usando, así como los tribunales competentes en dicha ciudad o localidad. En consecuencia, por la presente renuncia a cualquier  jurisdicción derivada de su domicilio, nacionalidad o por cualquier otra razón presente o futura.
                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            21. MISCELÁNEO.
                        </strong>
                        <p>
                            Si alguna disposición contenida en estos Términos se considera inválida o no  ejecutable según la ley aplicable del país dónde se esté ejecutando, entonces dicha disposición se interpretará, limitará,  modificará o, si es necesario, se ajustará en la medida necesaria para eliminar su invalidez  o inaplicabilidad, sin afectar de ninguna manera el contenido restante de estos Términos.
                            <br></br><br></br>
                            Cualquier disposición de estos Términos solo se puede renunciar mediante  un instrumento escrito ejecutado por la parte que tiene derecho al beneficio de dicha disposición. El incumplimiento por parte de cualquiera de las partes en cualquier momento  de exigir el cumplimiento de cualquiera de las disposiciones de estos Términos no afectará en modo alguno el derecho de dicha parte para ejercerlo posteriormente. La renuncia a cualquier incumplimiento de cualquier disposición de estos Términos no se interpretará como una renuncia continua de la misma o de cualquier otro incumplimiento a otras disposiciones de los Términos.

                        </p>

                    </div>
                    :
                    <div className="cont-parrafos-privacidad">
                        <strong>
                            1.	INTRODUCTION.
                        </strong>
                        <p>
                            BeyondLife (app) is a mobile device software application that provides functions of creating, storing, saving, managing, tagging, collecting, organizing, sharing and/or transferring information within BeyondLife (app) itself, that is, not outside of this, through a high-security virtual vault with the ability to assign information to third parties after the death of the User in the BeyondLife (app) itself (together the “BeyondLife Functions” or “BeyondLife Function”). Therefore, by downloading, accessing, browsing and/or using the BeyondLife (app), and any other mobile application and/or website owned, controlled or offered by BEYONDLIFE, it will be construed as an unequivocal fact that you You acknowledge that you have carefully read and agree to be bound by these terms and conditions (the "Terms"). If you do not agree to these Terms, please stop using our BeyondLife (app) immediately. BEYONDLIFE reserves the right to modify these Terms at any time. We recommend that you periodically check the BeyondLife (app) and/or the BEYONDLIFE website for any updates. By accessing, browsing and/or using any BeyondLife Features after changes to the Terms have been posted, You agree to be bound by the updated Terms. In your case, BEYONDLIFE without being obliged, may require you at any time, the express acceptance of any modification to the Terms so that you can continue using the BeyondLife (app).
                            <br></br><br></br>
                            These terms constitute the binding agreement between You and BEYONDLIFE.

                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            2.	LICENSE.
                        </strong>
                        <p>
                            Committed to complying with the Terms in all respects, BEYONDLIFE grants you a limited, non-exclusive, non-transferable, non-sublicensable and revocable license to access and store information in the BeyondLife (app) for your personal, non-commercial and exclusive to You as a User.
                            <br></br><br></br>
                            Users of the BeyondLife Functions are required not to copy, print, photograph, record, take screenshots or in any other way reproduce the content of the BeyondLife (app) for a use other than that mentioned herein and without authorization. Likewise, the reproduction and public communication outside of the BeyondLife (app) of photographs, videos, works or any other published content is strictly forbidden and may result in the cancellation of the BeyondLife Functions to You, regardless of any other action that BEYONDLIFE deems necessary or convenient to pursue this breach.
                            <br></br><br></br>
                            BEYONDLIFE reserves the right to terminate the license granted to You to use the BeyondLife Functions at any time and for any cause, including, without limitation, violation of the Terms set forth herein.

                        </p>


                        {/*  */}
                        <br></br>
                        <strong>
                            3.	ELIGIBILITY FOR PROPER USE OF THE BEYONDLIFE (app).
                        </strong>
                        <p>
                            For some BeyondLife Functions it is necessary for the User to be of legal age in the country where they reside, so it is their responsibility to confirm that the use of the BeyondLife (app) is permissible under the laws and regulations applicable in the jurisdiction in which they reside. If the use of BeyondLife (application) is prohibited by applicable laws and regulations, you must refrain from using it.
                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            4.	NO WARRANTY AND LIMITATION OF LIABILITY.
                        </strong>
                        <p>
                            BEYONDLIFE OFFERS BEYONDLIFE FUNCTIONS “AS IS'' AND “AS AVAILABLE”. BEYONDLIFE AND ITS CONTROLLERS, SUBSIDIARIES, REPRESENTATIVES, DIRECTORS, EMPLOYEES, AGENTS, ATTORNEYS, PARTNERS AND/OR LICENSORS (INDISTINCTLY CALLED EQUALLY AS “BEYONDLIFE”) DO NOT OFFER ANY KIND OF WARRANTY, NOR HAVE ANY KIND OF RESPONSIBILITY ABOUT THE BEYONDLIFE FUNCTIONS, THE INFORMATION STORED, THE INSTRUCTIONS THAT THE USER WISHES TO CARRY OUT AT THE TIME OF HIS DEATH, OR THE ACCURACY OF THE INFORMATION ENTERED BY THE USER. BEYONDLIFE MAKES NO REPRESENTATIONS, ADVICE AND/OR WARRANTIES REGARDING THE TRUTH, ACCURACY AND/OR COMPLETENESS OF THE INFORMATION CONTAINED AND PROVIDED IN THE BEYONDLIFE (APP) AND/OR IN ANY OF THE BEYONDLIFE FUNCTIONS. BEYONDLIFE IS NOT RESPONSIBLE FOR, AND DOES NOT WARRANT THAT BEYONDLIFE (APP) NOR THE BEYONDLIFE FUNCTIONS WILL BE UNINTERRUPTED OR ERROR-FREE, NOR DOES BEYONDLIFE WARRANT THAT SUCH ERRORS WILL BE CORRECTED OR THAT BEYONDLIFE (APP) OR SERVERS THAT MAKE IT AVAILABLE AND/OR ITS FUNCTIONS WILL BE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                            <br></br><br></br>
                            YOU UNDERSTAND AND AGREE THAT THE USE AND DOWNLOAD OF THE BEYONDLIFE (APP), AS WELL AS THE BEYONDLIFE FUNCTIONS, ARE AT YOUR SOLE DISCRETION AND ENTIRE RISK, AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGES ARISING FROM SUCH USE AND/OR OR TRANSFER WITHIN THE BEYONDLIFE (APP) ITSELF AND THAT YOU ARE AWARE THAT INFORMATION CANNOT BE TRANSMITTED OUTSIDE THE BEYONDLIFE (APP), IF IT IS NOT TO ANOTHER AUTHORIZED USER CHOSEN BY YOU. UNDER NO CIRCUMSTANCES WILL BEYONDLIFE BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, PUNITIVE DAMAGES OF ANY KIND, EXEMPLARY OR CONSEQUENTIAL DAMAGES (INCLUDING BUT NOT LIMITED TO “LOST PROFITS, MORAL DAMAGES, INDIRECT DAMAGES, CONSEQUENTIAL DAMAGES, ETC.”), LOST PROFITS, LOST REVENUE, LOSS OF USE OF BEYONDLIFE FUNCTIONS OR ANY RELATED SERVICES, BUSINESS INTERRUPTION, COST OF CAPITAL, COST OF COVERAGES, COSTS CAUSED BY NON-WORK TIME, CUSTOMER CLAIMS USER FOR SUCH DAMAGES OR ANY OTHER DAMAGES (ARISING OUT OF ANY CAUSE, FOR EXAMPLE, NEGLIGENCE, ETC.), INCLUDING, WITHOUT LIMITATION, DAMAGES RELATING TO THE USE, MISUSE, RELIANCE ON OR INCOMPETENCE TO USE THE BEYONDLIFE FUNCTIONS AND INTERRUPTION , SUSPENSION OR TERMINATION OF ANY BEYONDLIFE FUNCTION AND DAMAGES RESULTING FROM LOSS OF DATA, WHETHER OR NOT BEYONDLIFE HAS OR HAS BEEN ADVISED OF SUCH POSSIBILITY AND REGARDLESS OF WHETHER SUCH DAMAGES MAY HAVE BEEN FORESEEABLE. YOUR ONLY RIGHT WITH RESPECT TO A NON-CONFORMITY WITH THE BEYONDLIFE FUNCTIONS SHALL BE TO TERMINATE USE OF THE BEYONDLIFE (APP) AND TO REMOVE IT FROM YOUR MOBILE DEVICE.
                            <br></br><br></br>
                            YOU UNDERSTAND THAT USE OF THE BEYONDLIFE FUNCTIONS MAY INVOLVE KNOWN RISKS OR UNANTICIPATED RISKS WHICH MAY RESULT IN INJURY, DEATH, OR ILLNESS, INCLUDING, WITHOUT LIMITATION, HAZARDS WHICH MAY BE CAUSED BY ACTS OF THIRD PARTIES, OR OCCURRENCES BEYOND BEYONDLIFE'S CONTROL. BY USING THE BEYONDLIFE (APP) AND/OR THE BEYONDLIFE FUNCTIONS, YOU ASSUME ALL RISKS, DANGERS AND RESPONSIBILITY FOR ANY LOSS AND/OR DAMAGE. YOU VOLUNTARILY RELEASE BEYONDLIFE FROM ANY LIABILITY AND WAIVE ANY CLAIM, DEMAND OR CAUSE OF ACTION AGAINST BEYONDLIFE FOR PERSONAL INJURY, LOSS OR DAMAGE TO PROPERTY, DEATH, LOSS OF INCOME OR SERVICES TO THIRD PARTIES, OR ANY OTHER CAUSE OR RELATE TO THE USE OF THE BEYONDLIFE FUNCTIONS AND/OR THE BEYONDLIFE (APP).
                            <br></br><br></br>
                            THE BEYONDLIFE FUNCTIONS ARE FOR YOUR PERSONAL, INDIVIDUAL, NON-COMMERCIAL USE.
                            <br></br><br></br>
                            YOU ACKNOWLEDGE AND AGREE THAT BEYONDLIFE HAS PROVIDED THE BEYONDLIFE FUNCTIONS, ESTABLISHED THEIR PRICES, AND ENTERED INTO THESE TERMS BASED ON THE FOREGOING STATEMENTS. FURTHER, YOU ACKNOWLEDGE AND AGREE THAT THE NO WARRANTY AND LIMITATION OF LIABILITY CONTAINED IN THESE TERMS REFLECTS A FAIR AND REASONABLE ACKNOWLEDGMENT OF RISKS ON YOU WITH BEYONDLIFE AND THAT THE NO WARRANTY AND LIMITATION OF LIABILITY ESTABLISHED IN THESE TERMS IS AN ESSENTIAL BASIS. WITHOUT WHICH BEYONDLIFE WOULD NOT BE ABLE TO OFFER THE USE OF ITS PLATFORM IN AN ECONOMICALLY VIABLE AND/OR REASONABLE MANNER, INCLUDING THE NATURE OF ARTIFICIAL INTELLIGENCE.
                            <br></br><br></br>
                            IF NOTWITHSTANDING HEREIN, IN THE EXTREME EVENT THAT BEYONDLIFE IS RESPONSIBLE FOR REIMBURSEMENT OR COMPENSATION IN ANY WAY TO A USER, THE USER IN QUESTION ACCEPTS AND ACKNOWLEDGES THAT WILL ONLY BE ENTITLED TO REIMBURSEMENT OR COMPENSATION UP TO THE AMOUNT PAID DIRECTLY AND ORIGINALLY TO BEYONDLIFE, THAT IS, THE PRICE FOR THE SUBSCRIPTION TO THE BEYONDLIFE (APP) AT THE TIME THE LIABILITY-GIVING EVENT ARISES, PLUS AT NO TIME BEFORE OR AFTER SUCH EVENT.
                        </p>


                        {/*  */}
                        <br></br>
                        <strong>
                            5.	CHANGES IN BEYONDLIFE FUNCTIONS.
                        </strong>
                        <p>
                            BEYONDLIFE reserves the right to modify or discontinue, temporarily or permanently, the BeyondLife Functions (or any part thereof) with or without notice. You agree that BEYONDLIFE shall not be liable to You or any third party for any modification, suspension or discontinuance of the BeyondLife Functions (or any part thereof).
                        </p>


                        {/*  */}
                        <br></br>
                        <strong>
                            6.	BEYONDLIFE CONTENT.
                        </strong>
                        <p>
                            BEYONDLIFE, its logo, the design and the screenshots of the BeyondLife (app) are trademarks registered or pending registration or subject to other intellectual and industrial property rights by BEYONDLIFE, and may not be reproduced for any reason, used, shared, etc. without prior and express written authorization from BEYONDLIFE. Any other trademarks not owned by BEYONDLIFE that appear in the BeyondLife Functions are the property of their respective owners, who may or may not be affiliated with, related to, or sponsored by BEYONDLIFE, but may not be used commercially, without permission of their respective owner.
                            <br></br><br></br>
                            All content in the BeyondLife Functions, including all information, artificial intelligence, data, text, software, music, sounds, photographs, graphics, videos, messages, scripts, tags, compilations of the foregoing, and/or other materials to which accessed through the BeyondLife Functions, are the property of BEYONDLIFE and/or its licensors, as applicable (the "BEYONDLIFE Content"), and are protected by copyright laws in Mexico, the United States, Canada, the Commonwealth European, and in general at the international level in laws and treaties. Except as expressly permitted under these Terms, no BEYONDLIFE Content may be reproduced, transmitted, modified or displayed without prior express written consent; otherwise, the User or the person who violates the aforementioned, is obliged to pay the damages and losses that arise as a result of their non-compliance.
                        </p>



                        {/*  */}
                        <br></br>
                        <strong>
                            7.	DESCRIPTION AND OPERATION OF BEYONDLIFE FUNCTIONS.
                        </strong>
                        <p>
                            In order to access the BeyondLife Functions, You will need to create a user profile and password, or You may access it through various social media profiles. You will be solely responsible for the accuracy and legal use of the data and information provided for the creation of your profile.
                            <br></br><br></br>
                            The modules under which the BeyondLife Functions offered by the BeyondLife (app) operate are:
                            <br></br><br></br>
                            •	Legacy of Life (Beyond Life): the User may register its posthumous will, as well as information necessary to execute its will, such as contacts for banking, insurance and follow-up care to execute the inheritance through the capture of a text, a video or a voice recording, as well as uploading a file by uploading them to the BeyondLife (app). It will also have space so that Users can generate content that they want their loved ones to know to remember it.
                            <br></br><br></br>
                            •	Legacy of Well-being (Beyond Wellness): allows the User to maintain an adequate level of well-being in the 5 types of well-being: Physical; Mental; Emotional; Spiritual; and Social. These measurements are programmed by default with the base parameters according to physical and mental medical terms recommended by the World Health Organization, however this will be possible to configure individually by the User. It will also allow saving advice, recommendations and/or incentives so that Users can maintain a beneficial life in the 5 types of well-being. This information can be protected in an enunciative but not limited way in text, image, PDF, voice, video files, etc.
                            <br></br><br></br>
                            •	Social Legacy (Beyond Social): Users can integrate their forms of access and contact with their social environments, such as access to social networks, chat conversations and voice recordings, registrations to social and sports clubs, affiliations to lodges and communities, etc.
                            <br></br><br></br>
                            •	Legacy of Useful Information (Easy Life): consists of an information security interface that can be protected, including but not limited to text, image, PDF, voice, video files, etc. In the same way, shortcuts can be integrated to download mobile applications, sites and other technological tools that may be useful to make life easier. Contact information of service providers may also be saved, such as telephone, email, social or work network profile, address, etc. All this information will be protected with the intention of being able to control contacts to cover the day-to-day needs of Users.
                            <br></br><br></br>
                            •	Financial Legacy (Beyond Financial): focuses on hosting the documents and information necessary to access all financial resources, whether it is bank accounts in different parts of the world, life insurance, medical expenses, investments, property titles, promissory notes and other relevant financial instruments for the User such as Cryptocurrencies, NFT's, etc. These can be protected in an enunciative but not limited way, text, image, PDF, voice, video, etc. files can be integrated.
                            <br></br><br></br>
                            •	Maximum Security Vault (Beyond Confidential): this module allows the User to replicate any of the above, as well as create their own specific sections, with the great difference that they will be operated under the generation of a temporary PIN that will be sent to the preconfigured point of contact (Email, whatsapp, SMS, etc.), which will request a password or validation through biometrics for its generation and sending and later will present a field to place the PIN sent to the point of contact. In the same way, this Function can be programmed so that at the time of confirmation of the death of the User, this information is definitively eliminated from the BeyondLife (app) servers.
                            <br></br><br></br>
                            If You wish to contact us to understand more about these Terms or wish to contact us in relation to any matter related to the BeyondLife (app), including if you believe that a claim is appropriate, please send an email to the email address designated for such purposes and provide the following information: (a) a description of the situation that occurred; (b) telephone and email address; (c) a statement by you that the information contained in the claim is true.
                            <br></br><br></br>
                            Once the claim is received, BEYONDLIFE will contact You via email as soon as possible and will inform you if it is appropriate and, where appropriate, if You require more information to resolve the claim or if any reimbursement will be made due to the same. It will be at the sole discretion of BEYONDLIFE to determine if the claim made is appropriate and, if applicable, the amount of the reimbursement that will be made.
                            <br></br><br></br>
                        </p>



                        {/*  */}
                        <br></br>
                        <strong>
                            8.	PAYMENT.
                        </strong>
                        <p>
                            <br></br><br></br>
                            While some of the BeyondLife Functions are free of charge, additional charges may apply for data usage, for use of the BeyondLife Functions on your mobile, or for any other reason.
                            <br></br><br></br>
                            Payments for subscriptions will be charged on a pre-paid basis (monthly or annually), on the day You subscribe and will cover the use of those BeyondLife Functions for a monthly or annual subscription period, depending on the type of subscription you choose. Payments are non-refundable. Unless You notify BEYONDLIFE that You wish to cancel a subscription at least one business day before the end of the applicable subscription period, Your subscription will automatically renew and You authorize BEYONDLIFE to charge the then-applicable monthly or annual subscription fee for said subscription (as well as any taxes), using any credit card or other payment mechanism that we have registered for You.
                            <br></br><br></br>
                            If there is a charge associated with a portion of the BeyondLife Functions, You agree to pay that charge when accessing or using the BeyondLife (app). The price of these BeyondLife Functions will be indicated in the currency applicable to the place where the BeyondLife Functions are used or in United States dollars, as applicable. You should check with your credit institution to determine if the price charged includes all applicable taxes and, if applicable, foreign exchange fees. You are solely responsible for paying such taxes and any additional charges. BEYONDLIFE has relied on third party payment gateways with the responsibility to collect the indicated prices. Your access to BeyondLife Functions that require payment may be suspended or terminated if You do not make your payment on time and/or in full. Suspension or termination of BeyondLife Functions for non-payment may result in loss of access to and use of your account and its content.
                            <br></br><br></br>
                            You must make all payments through the payment portals offered in the BEYONDLIFE (app). BEYONDLIFE does not perform any processing of your bank details or use of payment portal accounts. Said data is treated solely and exclusively by the payment portal used, therefore, to consult the policies and terms and conditions of operation of said payment portals, as well as the treatment that will be carried out of your bank details or payment accounts , You must access the information published by them on their respective websites or applications.
                            <br></br><br></br>
                            You agree to pay all charges incurred in connection with the use of the BEYONDLIFE Functions (including any applicable taxes) at the rates in effect at the time the charges were incurred.
                            <br></br><br></br>
                            BETWEEN YOU AND BEYONDLIFE, YOU ARE RESPONSIBLE, AND NOT BEYONDLIFE, FOR PAYING ANY AMOUNT BILLED ON YOUR MOBILE DEVICE, PAYPAL, CREDIT OR DEBIT CARD, BY AN APP STORE, OR BY THIRD PARTIES WHO HAVE ACCESSED THESE ACCOUNTS, EVEN IF THEY WERE NOT AUTHORIZED BY YOU.
                            <br></br><br></br>
                            BEYONDLIFE does not have the ability to manage any aspect of your bank details, or any other data, whether it is from third parties or provided by you in the daily and/or everyday use of BeyondLife (app). The payment will be charged to your account through the payment portals and you will send BEYONDLIFE the confirmation of the purchase, so that you can access the product or service purchased.
                            <br></br><br></br>
                            You should note that deleting the BEYONDLIFE application will not cancel your User account and/or your paid subscription. If you delete the BeyondLife (app), but do not take the steps to deactivate your User account (by contacting us in the “Contact Us” section) and do not take the appropriate measures, your profile may continue to be active in the BeyondLife Functions and your heirs of information can access it at the time of their death.

                        </p>



                        {/*  */}
                        <br></br>
                        <strong>
                            8.1 PROMOS
                        </strong>
                        <p>
                            In the event that BEYONDLIFE or any of its sponsors or advertisers decides to carry out certain promotions that it determines from time to time, You may enjoy the benefits that BEYONDLIFE grants You in the BeyondLife (app), which may consist of free trials, for a certain time, of the BeyondLife Functions that require a payment. The promotions that BEYONDLIFE offers at the time, will be governed in accordance with the promotion bases that are made known by BEYONDLIFE or third parties (sponsors or advertisers) through the means that it considers pertinent, however, it will not be considered that they modify the Terms, so all the Terms will remain in force, temporarily exempting, in certain cases, those that the promotion bases indicate.
                            <br></br><br></br>
                            BEYONDLIFE will offer its promos and BeyondLife Functions within the BeyondLife (app) itself and/or within the ecosystem to which it belongs and/or its official social networks, so they are unaware of all those promos, offers and publications that are made outside of its ecosystem and/or from their official social networks and/or from BeyondLife itself (app).

                        </p>



                        {/*  */}
                        <br></br>
                        <strong>
                            9.	SUGGESTIONS AND IMPROVEMENTS.
                        </strong>
                        <p>
                            By submitting to us any ideas, comments, suggestions, documents or opinions regarding or proposed BeyondLife Functions (“Feedback”), You agree that (i) Your Feedback does not contain the confidential or proprietary information of any third party, (ii) we have no obligation of confidentiality, express or implied about the Feedback, (iii) we may be developing or considering something similar to the Feedback, and (iv) You grant us an irrevocable, non-exclusive, non-compensatory license other than your ability to use the Functions. BeyondLife, in perpetuity or for as long as applicable law in your jurisdiction, worldwide, to use, modify, publish, distribute or sub-license the Feedback.
                        </p>


                        {/*  */}
                        <br></br>
                        <strong>
                            10.	EXTERNAL MATERIALS.
                        </strong>
                        <p>
                            The BeyondLife Functions and Users of the BeyondLife Functions may provide links to other websites or resources. You acknowledge and agree that BEYONDLIFE does not endorse and is not responsible for any content, advertising, products, services or other materials available through such external sites or resources ("External Materials"). External Materials are subject to various terms and conditions and privacy notices, which You are responsible for reviewing. You further acknowledge and agree that BEYONDLIFE is at no time responsible for any damage or loss caused by or resulting from the use of or reliance on such External Materials.
                            <br></br><br></br>
                            11.	FORBIDDEN USES. YOU UNDERSTAND AND BY USING THE BEYONDLIFE (APP) YOU ACKNOWLEDGE, AGREE AND WARRANT THAT YOU MAY NOT, BUT NOT LIMIT, TO:
                            <br></br><br></br>
                            •	Use the BeyondLife Functions or any location information displayed on the BeyondLife Functions to harass, abuse, defame, threaten or defraud Users of the BeyondLife Functions, or to collect, attempt to collect or store personal or location information of other Users;
                            <br></br><br></br>
                            •	Include offensive or pornographic material in the BeyondLife (app) profile and/or in the BeyondLife Functions;
                            <br></br><br></br>
                            •	Use the BeyondLife Functions for any commercial or non-private use, with the understanding that the BeyondLife Functions are for your personal, non-commercial use only;
                            <br></br><br></br>
                            •	Use the BeyondLife Functions for any illegal purpose or in violation of any local, state, national, or international law or order, including, without limitation, laws governing intellectual property and other proprietary rights and protection of personal data and privacy, as well as the control of the import and export of information;
                            <br></br><br></br>
                            •	Make unsolicited offers, advertisements, proposals or send spam to other Users of the BeyondLife Functions. This includes, but is not limited to, unsolicited advertising, promotional material or other materials that have been requested, mass mailing of commercial advertisements, chains, informational announcements, charity petitions and petitions for signatures;
                            <br></br><br></br>
                            •	Impersonate any person or entity, falsely claim an affiliation with any person or entity, or access the accounts of other Users of the BeyondLife Functions;
                            <br></br><br></br>
                            •	Create profiles in order to damage the reputation, image, name, honor or private life of third parties and/or BeyondLife (app), BEYONDLIFE, its representatives or advertisers;
                            <br></br><br></br>
                            •	Misrepresent the source, identity, or content of information transmitted through the BeyondLife Functions;
                            <br></br><br></br>
                            •	Remove, circumvent, disable, damage, or otherwise interfere with security features of the BeyondLife Functions, with features that prevent or restrict the use or reproduction of any content accessible through the BeyondLife Functions, or with features that limit use of the BeyondLife Functions;
                            <br></br><br></br>
                            •	Intentionally interfering with or damaging the operation of the BeyondLife Functions or the enjoyment thereof by any User, by any means, including uploading or disseminating viruses or malware;
                            <br></br><br></br>
                            •	Post, store, post, transmit or disseminate any information or material that a reasonable person could find objectionable, litigious, offensive, indecent, pornographic, harassing, threatening, embarrassing, stressful, vulgar, hateful, racially or ethnically offensive or in any other inappropriate manner, regardless of whether such material or its communication is unlawful;
                            <br></br><br></br>
                            •	Publish, store, send, transmit or disseminate any information or material that infringes patents, trademarks, trade secrets, copyrights, related rights and any other nature within the intellectual property rights of BEYONDLIFE and/or its Users.
                            <br></br><br></br>
                            •	Attempt to gain unauthorized access to the BeyondLife Functions, or any part thereof, other accounts, computer systems or networks connected to the BeyondLife Functions, or any part thereof, through hacking, password mining, or any other means, or by interfere or attempt to interfere with the proper working of the BeyondLife Functions or any activities related to our features;
                            <br></br><br></br>
                            •	Use any robot, spider, scraper or other automated means to access the BeyondLife Functions for any purpose, without our express written permission and circumvent our robot exclusion protocols or other measures we may use to prevent or restrict access to the BeyondLife Functions or modify the BeyondLife Functions in any way, or to prevent the use of modified versions of the BeyondLife Functions including (without limitation) for the purpose of gaining unauthorized access to the BeyondLife Functions.
                            <br></br><br></br>
                            •	Carry out any type of action that directly or indirectly implies that you are a representative, authorized distributor, employee or that in any other way represents, sponsors or supports BeyondLife (app) and/or BEYONDLIFE.
                            <br></br><br></br>
                            •	Create profiles to offer, sell or in any other way promote unhealthy habits, diseases, illicit activities, prostitution, escort services, racism, discrimination, political affiliation or political parties or goods and services for companies, groups and organizations for commercial purposes, racial, political or religious.
                            <br></br><br></br>  AS A USER OF THE BEYONDLIFE (APP), YOU MAY REQUEST TO REMOVE ANY CONTENT THAT IS PUBLICLY ACCESSIBLE ON THE BEYONDLIFE (APP) MADE THROUGH YOUR PROFILE. HOWEVER, ANY PREVIOUS COMMUNICATION OR SHARED CONTENT MAY BE MAINTAINED ON OUR SERVER, EVEN IF NOT PUBLICLY AVAILABLE. ALSO, YOU MAY CHOOSE TO REPORT PROFILES WHO MAY VIOLATE THESE TERMS AND CONDITIONS, IN WHICH CASE, BEYONDLIFE RESERVES THE RIGHT (WITHOUT OBLIGATION IN ANY WAY) TO TEMPORARILY SUSPEND THE OFFENDING PROFILE AND FUNCTION TO THE REPORTED USER AND CONDUCT A RESEARCH. IF, AS A RESULT OF SUCH INVESTIGATION, THE BREACH OF THE TERMS SHOULD BE CERTAIN IN BEYONDLIFE'S CONSIDERATION, BEYONDLIFE RESERVES THE RIGHT (WITHOUT BEING OBLIGATED IN ANY WAY) TO TERMINATE THE USER'S PROFILE AND ACCESS TO THE BEYONDLIFE (APP) AND BEYONDLIFE FUNCTIONS TO THE REPORTED USER.

                        </p>


                        {/*  */}
                        <br></br>
                        <strong>
                            12.	USER CONTENT.
                        </strong>
                        <p>
                            The BeyondLife Functions may allow the User to safeguard and assign to third parties regarding information, content and materials, such as videos, podcasts, audios, photographs, comments, images, opinions, ratings, ideas, notes, concepts or creative suggestions, etc. (“Your Content”), and can only be shared with third parties within the BeyondLife (app), with the understanding that You will be solely responsible for the accuracy, reliability, veracity, correctness and legality of Your Content and the decisions you make regarding Your Content within the BeyondLife (app). In connection with Your Content, You agree, represent and warrant: (i) that You own, or have the necessary licenses, rights, consents and permissions to use and authorize, all intellectual property and any other proprietary rights in Your Content to enable its inclusion and use in the manner contemplated by the BeyondLife Functions and these Terms; (ii) that You have the written consent, release and/or permission of each identifiable person in Your Content to use their name and allow their inclusion in the manner contemplated in the BeyondLife Functions and these Terms; and (iii) that You grant us an irrevocable, non-exclusive license, without any consideration, perpetual or for as long as the applicable legislation in your jurisdiction, worldwide, allows to carry out the actions that You determine through the BeyondLife (app) at the time of his death.
                            <br></br><br></br>
                            BEYONDLIFE assumes no liability in connection with or arising from Your Content. If at any time BEYONDLIFE chooses, in its discretion, to monitor Your Content, BEYONDLIFE assumes no responsibility for such content, no obligation to modify or remove inappropriate content, and no responsibility for the conduct of the User uploading the information. Additionally, BEYONDLIFE does not endorse or have control over, knowledge of, access to, or manipulation of Your Content. BEYONDLIFE does not guarantee, expressly or impliedly, the accuracy, reliability, veracity, correctness and legality of Your Content.

                        </p>


                        {/*  */}
                        <br></br>
                        <strong>
                            13.	RESPONSIBILITY FOR YOUR CONTENT.
                        </strong>
                        <p>
                            You shall not communicate that Your Content is in any way sponsored or endorsed by BEYONDLIFE. BeyondLife (app) operates as a vault of your information, so you have no link to the content of your information, much less access to Your Content.
                            <br></br><br></br>
                            You bear all risks associated with Your Content, including its accuracy, reliability, truthfulness, correctness, and legality, as well as for any disclosure of your information that makes you personally identifiable and providing any or all of Your Content to third parties. You represent that you own or have the necessary permissions to use and authorize the use of Your Content as described in these Terms.
                            <br></br><br></br>
                            You may be subject to liability if, for example, Your Content contains false, intentionally misleading or defamatory material; infringes any third party right, including copyright, trademarks, patents, industrial secrets, moral rights, right to privacy, right of publicity, or any other Industrial or Intellectual Property right; contains unlawful material, including illegal hate speech or pornography; exploits or otherwise harms minors; damages the honor, name, private life or image of a person or violates or supports the violation of any law or regulation.
                            <br></br><br></br>
                            In the event that BEYONDLIFE receives any notification for the removal, deletion, withdrawal or disabling of Your Content due to probable infringing conduct, BEYONDLIFE will be subject at all times to the legal procedures established by the Constitution of the country where it is operating, International Treaties, Agreements or Conventions, Intellectual Property Laws, Penal Codes and other applicable legal provisions to carry out said removal, elimination, withdrawal or disabling without any responsibility for BEYONDLIFE.
                            <br></br><br></br>
                        </p>


                        {/*  */}
                        <br></br>
                        <strong>
                            14.	OUR RIGHT TO USE YOUR CONTENT.
                        </strong>
                        <p>
                            BEYONDLIFE does not claim ownership of Your Content. However, in the event that You host Your Content on our BeyondLife (app), You grant us a license for as long as You have a profile, worldwide, royalty-free or without compensation other than the right to use the BeyondLife (app), to use, distribute, reproduce, modify, translate, adapt, and even delete or otherwise provide Your Content to designated third parties that You indicate may receive it at the time of your death in connection with your use of the BeyondLife Functions, in accordance with these Terms.
                            <br></br><br></br>
                            The User acknowledges and accepts that Your Content is linked only to the BeyondLife (app) under strict confidentiality and without BEYONDLIFE having direct and/or indirect access to Your Content, so that Your Content can only be known by the User and/or or the person that the User has designated for this purpose, once his death occurs. In this sense, BEYONDLIFE will not be responsible or have any obligation to third parties and/or authorities to provide Your Content, since BEYONDLIFE starts from the premise that Your Content has the characteristic of being a secret of commercial, industrial, social application, among other purposes.

                        </p>


                        {/*  */}
                        <br></br>
                        <strong>
                            15.	PERSONAL DATA.
                        </strong>
                        <p>
                            You agree that any personal data, sensitive personal data and information about You that is shared, contained and/or published on the Site and BeyondLife (app) will be used in accordance with these Terms and the Privacy Notice of BEYONDLIFE which is available for viewing on the BEYONDLIFE website.
                            <br></br><br></br>
                            BEYONDLIFE will maintain strict confidentiality and will take the corresponding administrative, technological, technical and physical security measures to preserve the confidentiality of your personal data.

                        </p>



                        {/*  */}
                        <br></br>
                        <strong>
                            16.	ADVERTISING.
                        </strong>
                        <p>
                            BEYONDLIFE, its sponsors, advertisers and/or licensors may publicly display advertising and other information on the BeyondLife (app) even if you have paid a fee for the BeyondLife Functions. You are not entitled to any compensation for such advertisements. The form, manner and extent of such advertising are subject to change without notice.
                        </p>



                        {/*  */}
                        <br></br>
                        <strong>
                            17.	COMPENSATION.
                        </strong>
                        <p>
                            You agree to indemnify, defend and hold BEYONDLIFE, its partners, shareholders, affiliates, subsidiaries, controllers, employees, agents, associates and representatives harmless from and against any claims, demands, actions, losses, costs, damages and other liabilities, including attorneys' fees, arising out of or related to your use of the BeyondLife Functions in violation of these Terms, including, without limitation: (a) your use or misuse of the BeyondLife Functions, (b) any violation of the rights of any person or entity by You, (c) any breach or violation of the Terms by You, or (d) Your use of the BeyondLife Functions to communicate with or meet other Users in person or to locate them. BEYONDLIFE reserves the right to assume the exclusive defense and control of any matter from which You seek to indemnify us and You agree to cooperate in our defense against these claims.
                        </p>


                        {/*  */}
                        <br></br>
                        <strong>
                            18.	INTERACTIONS WITH OTHER USERS.
                        </strong>
                        <p>
                            You are solely responsible for your interactions with other Users using the BeyondLife Functions and BEYONDLIFE will under no circumstances be liable for these interactions. BEYONDLIFE does not conduct background checks or other pre-screening on its Users, but reserves the right to do so at any time. BEYONDLIFE assumes no responsibility for your interactions with other Users and does not endorse or guarantee the conduct of such Users and/or the information they provide and/or the statements they make. You agree to take reasonable precautions in your interactions with other Users of the BeyondLife Functions. BEYONDLIFE is not responsible for monitoring any dispute between You and other Users.
                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            19.	REGISTRATION ACCOUNT AND PASSWORD.
                        </strong>
                        <p>
                            You are responsible for maintaining the confidentiality of your BeyondLife (app) account and password, and for all activities that occur in connection therewith. You agree to immediately notify BEYONDLIFE of any actual or suspected unauthorized use of your password and/or account or any other breach of security. You agree that all information you provide to BEYONDLIFE as part of the registration process, including, without limitation, your name and email address or social media profile, is true, accurate, and complete.
                            <br></br><br></br>
                            We inform you that on the internet page(s) and/or applications managed by BEYONDLIFE, we use cookies, web beacons and other technologies ("Cookies"), through which it is possible to monitor your behavior as an Internet user, provide you with a better user experience when browsing our page, as well as offer other functions based on your preferences.
                            <br></br><br></br>
                            The data we obtain from these tracking technologies is that which is listed on the BEYONDLIFE website.
                            <br></br><br></br>
                            These technologies may be disabled by configuring your internet browser so that it does not accept "Cookies" from the internet page(s) and/or applications managed by BEYONDLIFE.
                            <br></br><br></br>
                            Cookies will be saved on your terminal (computer, laptop, smartphone, tablet or other electronic device). You can also configure them in your internet browser so that it does not accept "Cookies" from the internet page(s) and/or applications managed by BEYONDLIFE. For more information, you can send us an email.
                            <br></br><br></br>
                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            20.	APPLICABLE LAW.
                        </strong>
                        <p>
                            The interpretation of these Terms and your relationship with BEYONDLIFE under them will be governed by the laws applicable in the country where the application has been downloaded and is being used, as well as the competent courts in said city or locality. Consequently, you hereby waive any jurisdiction derived from your domicile, nationality or for any other present or future reason.
                        </p>

                        {/*  */}
                        <br></br>
                        <strong>
                            21.	MISCELLANEOUS
                        </strong>
                        <p>
                            If any provision contained in these Terms is held to be invalid or unenforceable under the applicable law of the country where it is being enforced, then such provision will be construed, limited, modified or, if necessary, adjusted to the extent necessary to remove its invalidity or unenforceability, without in any way affecting the remaining content of these Terms.
                            <br></br><br></br>
                            Any provision of these Terms may only be waived by a written instrument executed by the party entitled to the benefit of such provision. The failure of either party at any time to enforce any provision of these Terms will not in any way affect such party's right to subsequently exercise it. The waiver of any breach of any provision of these Terms shall not be construed as a continuing waiver of the same or any other breach of other provisions of the Terms.

                        </p>

                    </div>
                }

            </div>

            <div className="footer-back-privacidad">
                <h2>&copy; {moment().format('YYYY')} COPYRIGHT BEYOND LIFE</h2>
            </div>

        </div >
    )
}



export default Terminos;