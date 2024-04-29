import React, { useState } from 'react';
import './Privacidad.css';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';
import moment from 'moment';


const Privacidad = () => {

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
                        <h1>AVISO DE PRIVACIDAD</h1>
                        :
                        <h1>PRIVACY POLICY</h1>
                    }
                </div>


                {idioma ?
                    <div className="cont-parrafos-privacidad">

                        <p>
                            Más Allá de la Vida, SAPI. de C.V., con domicilio en Calle 19 Tablaje 14754, Xcanatún, Mérida, Yucatán, México, C.P. 97302, es responsable del uso y protección de sus Datos Personales, y en tal sentido le informamos lo siguiente:<br></br><br></br>
                            ¿Para qué fines utilizaremos su información personal? La información personal que recopilamos de usted se utilizará para los siguientes fines que son necesarios para las funciones de BeyondLife que solicita: <br></br><br></br>
                            - Crear y administrar cuentas de usuario<br></br>
                            - Ofrece funciones de BeyondLife<br></br>
                            - Cumplir con su testamento póstumo, de acuerdo con las Funciones de BeyondLife y sus decisiones dentro de BeyondLife (app)<br></br>
                            - Mejorar las funciones de BeyondLife<br></br><br></br>
                            Tenga en cuenta que parte de la información que recopilamos de usted puede usarse para fines secundarios de la siguiente manera:<br></br><br></br>
                            - Envío de comunicaciones comerciales y promocionales.<br></br>
                            - Responder consultas y ofrecer soporte.<br></br>
                            - Solicitar comentarios de los usuarios.<br></br>
                            - Mejorar la experiencia de usuario que ofrecemos.<br></br>
                            - Ofrecer publicidad dirigida.<br></br>
                            - Hacer cumplir los términos y condiciones y políticas.<br></br>
                            - Proteger de abusos y usuarios malintencionados.<br></br>
                            <br></br><br></br>
                            ¿Qué información personal utilizaremos para estos fines?<br></br>
                            Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes Datos Personales:
                            <br></br><br></br>
                            - Nombre completo<br></br>
                            - Domicilio<br></br>
                            - Correo electrónico<br></br>
                            - Número de teléfono<br></br>
                            - Detalles de pago de las tarjetas de Crédito/Débito<br></br>
                            <br></br><br></br>
                            ¿Con quién compartimos su información personal y con qué fines?
                            <br></br>
                            Le informamos que su Información Personal es compartida dentro y fuera del país con las siguientes personas, empresas, organizaciones o autoridades distintas a nosotros, para los siguientes fines:
                            <br></br>
                            - Crear y administrar cuentas de usuario
                            - Ofrece funciones de BeyondLife<br></br>
                            - Cumplir con su testamento póstumo, de acuerdo con las Funciones de BeyondLife y sus decisiones dentro de BeyondLife (app)<br></br>
                            - Mejorar las funciones de BeyondLife<br></br>
                            <br></br><br></br>
                            ¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso?
                            <br></br>
                            Tiene derecho a conocer qué Datos Personales tenemos sobre usted, para qué los usamos y las condiciones de uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de sus Datos Personales si se encuentran desactualizados, inexactos o incompletos (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de su Información Personal para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.<br></br>
                            Para el ejercicio de cualquiera de los derechos ARCO; revocar su consentimiento; y/o limitar el uso y divulgación de su Información Personal, deberá presentar la solicitud respectiva a través de los siguientes medios:<br></br>
                            Al enviar un correo a contact@beyondlife.com, allí pueden proporcionarle una cuenta de correo electrónico para enviarnos su solicitud.<br></br><br></br>
                            En relación con el procedimiento y requisitos para el ejercicio de sus derechos ARCO, le informamos lo siguiente:<br></br><br></br>
                            a) ¿A través de qué medios pueden acreditar su identidad el titular y, en su caso, su representante, así como la personalidad de éste? Por correo electrónico, contact@beyondlife.com.
                            <br></br>
                            b) ¿Qué información y/o documentación debe contener la solicitud?<br></br>
                            - Nombre del dueño<br></br>
                            - domicilio y correo electrónico<br></br>
                            - Copia de INE<br></br>
                            - Descripción clara y precisa de los Datos Personales respecto de los cuales se busca ejercer alguno de los derechos ARCO.<br></br>
                            <br></br>

                            c) ¿En cuántos días responderemos a su solicitud?<br></br>
                            Le informamos que la determinación adoptada le será notificada en un plazo máximo de 20 (veinte) días hábiles, contados a partir de la fecha en que cumpla con todos los requisitos establecidos en la solicitud de acceso, rectificación, cancelación u oposición, para que que, en su caso, surta efecto dentro de los 15 (quince) días hábiles siguientes a la fecha de dicha notificación.
                            <br></br>
                            <br></br>
                            d) ¿Por qué medio le comunicaremos la respuesta a su solicitud?   <br></br>
                            A través del correo electrónico que se facilitará telefónicamente a petición del interesado.
                            <br></br>   <br></br>
                            e) ¿En qué medios se pueden reproducir los Datos Personales que solicita?   <br></br>
                            Copias o imágenes escaneadas.   <br></br>
                            Los datos de contacto del departamento de Datos Personales, encargado de dar trámite a las solicitudes de derechos ARCO, son los siguientes:   <br></br>   <br></br>
                            i.	Nombre: Osvaldo Velázquez   <br></br>
                            ii.	Dirección: Calle 19 Tablaje 14754, Xcanatún, Mérida, Yucatán, México, C.P. 97302.   <br></br>
                            iii.	Correo electrónico: contact@beyondlife.com   <br></br>
                            <br></br>   <br></br>
                            Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus Datos Personales. Sin embargo, es importante que reconozcas que no en todos los casos podremos atender tu solicitud o terminar el uso de forma inmediata, ya que es posible que por alguna obligación legal. Asimismo, debe considerar que, para determinadas finalidades, la revocación de su consentimiento implicará que no podamos continuar prestándole el servicio que solicitó, o la finalización de su relación con nosotros.   <br></br>
                            Autoridad de Protección de Información Personal   <br></br>
                            En México, si lo considera necesario, le informamos que tiene derecho a asistir al Instituto Nacional de Transparencia Acceso a la Información y Protección de Datos Personales (INAI) para hacer valer cualquier disconformidad relacionada con su derecho a la protección de Datos Personales.   <br></br>   <br></br>
                            ¿Cómo puede conocer las modificaciones en este aviso de privacidad?   <br></br>
                            Este aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivados de nuevos requerimientos legales; de nuestras propias necesidades de los productos o funciones que ofrecemos; de nuestras prácticas de privacidad; Cambios en nuestro modelo de negocio, u otras causas.   <br></br>
                            Nos reservamos el derecho de realizar modificaciones o actualizaciones al presente Aviso de Privacidad en cualquier momento, en el entendido de que cualquier modificación al mismo será de su conocimiento mediante la publicación de un aviso en BeyondLife (app), por lo que le recomendamos verificar con frecuencia.   <br></br>
                            Aceptación Al utilizar las Funciones de BeyondLife o la (aplicación) de BeyondLife, usted acepta que ha leído este documento y que BeyondLife lleva a cabo el procesamiento de su Información personal para los fines indicados en este Aviso de Privacidad.   <br></br>
                            <br></br>
                        </p>

                        {/*  */}


                    </div>
                    :
                    <div className="cont-parrafos-privacidad">
                        <strong>

                        </strong>
                        <p>
                            This privacy policy ("Policy") is implemented by Más allá de la Vida, S.A.P.I. de C.V.
                            ("BeyondLife, "we", "us" or "our''), and describes how the personally identifiable
                            information ("Personal Information") you may provide on the BeyondLife (app)
                            ("BeyondLife (app)") and any other mobile or web functions or applications owned,
                            controlled, or offered by BeyondLife (collectively, the "BeyondLife Functions”)
                            BeyondLife Functions are collected, protected and used. It also describes the
                            choices available to you regarding our use of your Personal Information and how you
                            can access and update this information. This Policy is a legally binding agreement
                            between you ("User", "you" or "your'') and BeyondLife. By accessing and using the
                            BeyondLife (app) and BeyondLife Functions, you acknowledge that you have read,
                            understood, and agree to be bound by the terms of this Policy. This Policy does not
                            apply to the practices of companies that we do not own or control, or to individuals
                            that we do not employ or manage.

                            <br></br><br></br>

                            <strong>Collection of personal information</strong>
                            <br></br>
                            If you wish to use some of the Functions on the BeyondLife (app), you may be asked
                            to provide certain Personal Information (for example, your name, domicile and e-mail
                            address).

                            <br></br><br></br>

                            <strong>Information stored in the vault.</strong>
                            <br></br>
                            BeyondLife undertakes to keep strictly confidential all the information that the User
                            wishes to store within the BeyondLife app, without limitation, bank accounts,
                            passwords, information on real estate, etc. Therefore, it guarantees the User that all
                            the information stored will be encrypted and will be revealed to no person or
                            authority.

                            Some of the information we collect is directly from you via the BeyondLife (app) and
                            BeyondLife Functions. However, we may also collect Personal Information about you
                            from other sources such as public databases and our joint marketing partners. You
                            can choose not to provide us with your Personal Information, but then you may not
                            be able to take advantage of some of the features on the BeyondLife (app). Users
                            who are uncertain about what information is mandatory are welcome to contact us.
                            <br></br><br></br>
                            Use and processing of collected information   <br></br>
                            In order to make the BeyondLife (app) and BeyondLife Functions available to you, or
                            to meet a legal obligation, we need to collect and use certain Personal Information. If
                            you do not provide the information that we request, we may not be able to provide
                            you the BeyondLife Functions. Any of the information we collect from you may be
                            used for the following purposes:   <br></br><br></br>
                            - Create and manage user accounts   <br></br><br></br>
                            - Deliver BeyondLife Functions   <br></br><br></br>
                            - Comply with your posthumous will, in accordance with the BeyondLife Functions
                            and your decisions within the BeyondLife (app)   <br></br><br></br>
                            - Improve BeyondLife Functions   <br></br><br></br>
                            Please note that some of the information we collect from you may be used for
                            secondary purposes as follows:   <br></br><br></br>
                            - Send marketing and promotional communications.   <br></br><br></br>
                            - Respond to inquiries and offer support.   <br></br><br></br>
                            - Request user feedback.   <br></br><br></br>
                            - Improve the user experience we offer.   <br></br><br></br>
                            - Deliver targeted advertising.   <br></br><br></br>
                            - Enforce terms and conditions and policies.   <br></br><br></br>
                            - Protect from abuse and malicious users.   <br></br><br></br>
                            Processing your Personal Information depends on how you interact with the
                            BeyondLife (app) and BeyondLife Functions, where you are located in the world and
                            if one of the following applies: (i) you have given your consent for one or more
                            specific purposes; this, however, does not apply, whenever the processing of
                            Personal Information is subject to California Consumer Privacy Act or European data
                            protection law; (ii) provision of information is necessary for the performance of an
                            agreement with you and/or for any pre-contractual obligations thereof; (iii) processing
                            is necessary for compliance with a legal obligation to which you are subject; (iv)
                            processing is related to a task that is carried out in the public interest or in the
                            exercise of official authority vested in us; (v) processing is necessary for the
                            purposes of the legitimate interests pursued by us or by a third party.
                            Note that under some legislations we may be allowed to process information until
                            you object to such processing (by opting out), without having to rely on consent or
                            any other of the following legal bases below. In any case, we will be happy to clarify
                            the specific legal basis that applies to the processing, and in particular whether the
                            provision of Personal Information is a statutory or contractual requirement, or a
                            requirement necessary to enter into a contract.   <br></br><br></br>
                            Billing and payments   <br></br>
                            In case of BeyondLife Functions requiring payment, we request credit card or other
                            payment account information, which will be used solely for processing payments or
                            when applicable refund(s). Your purchase transaction data is stored only as long as
                            is necessary to complete your purchase transaction. After that is complete, your
                            purchase transaction information is deleted. Where necessary for processing future
                            payments and subject to your prior consent, your financial information will be stored
                            in encrypted form on secure servers of our reputed payment gateway service
                            provider who is beholden to treating your Personal Information in accordance with
                            this Policy. All direct payment gateways adhere to the latest security standards as
                            managed by the PCI Security Standards Council, which is a joint effort of brands like
                            Visa, MasterCard, American Express and Discover.   <br></br><br></br>
                            Managing information   <br></br>
                            You are able to delete certain Personal Information we have about you. The
                            Personal Information you can delete may change as the BeyondLife (app) and
                            BeyondLife Functions change. When you delete Personal Information, however, we
                            may maintain a copy of the unrevised Personal Information in our records for the
                            duration necessary to comply with our obligations to our affiliates and partners, and
                            for the purposes described below.   <br></br><br></br>
                            Disclosure of information   <br></br>
                            Depending on the requested BeyondLife Functions or as necessary to complete any
                            transaction or provide any service you have requested, we may contract with other
                            companies and share your information with your consent with our trusted third
                            parties that work with us, any other affiliates and subsidiaries we rely upon to assist
                            in the operation of the BeyondLife (app) and BeyondLife Functions available to you.
                            We do not share Personal Information with unaffiliated third parties. These service
                            providers are not authorized to use or disclose your information except as necessary
                            to perform BeyondLife Functions on our behalf or comply with legal requirements.
                            We may share your Personal Information for these purposes only with third parties
                            whose privacy policies are consistent with ours or who agree to abide by our policies
                            with respect to Personal Information. These third parties are given Personal
                            Information they need only in order to perform their designated functions, and we do
                            not authorize them to use or disclose Personal Information for their own marketing or
                            other purposes.   <br></br><br></br>
                            We will disclose any Personal Information we collect, use or receive if required or
                            permitted by law, such as to comply with a subpoena, or similar legal process, and
                            when we believe in good faith that disclosure is necessary to protect our rights,
                            protect your safety or the safety of others, investigate fraud, or respond to a
                            government request.   <br></br><br></br>
                            In the event we go through a business transition, such as a merger or acquisition by
                            another company, or sale of all or a portion of its assets, your user account, and
                            Personal Information will likely be among the assets transferred.   <br></br><br></br>
                            Retention of information   <br></br>
                            We will retain and use your Personal Information for the period necessary to comply
                            with our legal obligations, resolve disputes, and enforce our agreements unless a
                            longer retention period is required or permitted by law. We may use any aggregated
                            data derived from or incorporate your Personal Information after you update or
                            delete it, but not in a manner that would identify you personally. Once the retention
                            period expires, Personal Information shall be deleted. Therefore, the right to access,
                            the right to erasure, the right to rectification and the right to data portability cannot be
                            enforced after the expiration of the retention period.   <br></br><br></br>
                            Transfer of information   <br></br>
                            Depending on your location, data transfers may involve transferring and storing your
                            information in a country other than your own. You are entitled to learn about the legal
                            basis of information transfers to a country outside the European Union or to any
                            international organization governed by public international law or set up by two or
                            more countries, such as the UN, and about the security measures taken by us to
                            safeguard your information. If any such transfer takes place, you can find out more
                            by checking the relevant sections of this Policy or inquire with us using the
                            information provided in the contact section.   <br></br><br></br>
                            We inform you that your Personal Information is shared with some individual,
                            companies and authorities worldwide for the purpose referred in “Use and
                            processing of collected information” and by accepting this Privacy Policy you consent
                            to the following transfers and remissions:   <br></br><br></br>
                            1. The remission of Your Personal Information to payment gateways In case of
                            BeyondLife Functions requiring payment.   <br></br><br></br>
                            2. The remission of Your Personal Information to the people assigned by You, after
                            your death.   <br></br><br></br>
                            3. The remission of Your Personal Information to Mexican and foreign taxing
                            authorities, in order to comply with obligations derived from international laws or
                            treaties.   <br></br><br></br>
                            Please consider that you have the right of access, rectification, cancellation,
                            opposition and limitation to the treatment of your Personal Information and you may
                            request to exercise such rights by contacting us in the email or address indicated in
                            the last section of this Policy. In some cases, due to some obligation established by
                            law, we must continue to process your Personal Information for a certain time after
                            your request of cancellation, limitation or opposition to use Your Personal
                            Information.   <br></br><br></br>
                            The rights of users   <br></br>
                            You may exercise certain rights regarding your information processed by us. In
                            particular, you have the right to do the following: (i) you have the right to withdraw
                            consent where you have previously given your consent to the processing of your
                            information; (ii) you have the right to object to the processing of your information if
                            the processing is carried out on a legal basis other than consent; (iii) you have the
                            right to learn if information is being processed by us, obtain disclosure regarding
                            certain aspects of the processing and obtain a copy of the information undergoing
                            processing; (iv) you have the right to verify the accuracy of your information and ask
                            for it to be updated or corrected; (v) you have the right, under certain circumstances,
                            to restrict the processing of your information, in which case, we will not process your
                            information for any purpose other than storing it; (vi) you have the right, under certain
                            circumstances, to obtain the erasure of your Personal Information from us; (vii) you
                            have the right to receive your information in a structured, commonly used and
                            machine readable format and, if technically feasible, to have it transmitted to another
                            controller without any hindrance. This provision is applicable provided that your
                            information is processed by automated means and that the processing is based on
                            your consent, on a contract which you are part of or on pre-contractual obligations
                            thereof.   <br></br><br></br>
                            The right to object to processing   <br></br>
                            Where Personal Information is processed for the public interest, in the exercise of an
                            official authority vested in us or for the purposes of the legitimate interests pursued
                            by us, you may object to such processing by providing a ground related to your
                            particular situation to justify the objection. You must know that, however, should your
                            Personal Information be processed for direct marketing purposes, you can object to
                            that processing at any time without providing any justification. To learn whether we
                            are processing Personal Information for direct marketing purposes, you may refer to
                            the relevant sections of this document.   <br></br><br></br>
                            Data protection rights under GDPR   <br></br>
                            If you are a resident of the European Economic Area (EEA), you have certain data
                            protection rights and BeyondLife aims to take reasonable steps to allow you to
                            correct, amend, delete, or limit the use of your Personal Information. If you wish to
                            be informed what Personal Information we hold about you and if you want it to be
                            removed from our systems, please contact us. In certain circumstances, you have
                            the following data protection rights:   <br></br><br></br>
                            - You have the right to request access to your Personal Information that we store and
                            have the ability to access your Personal Information.   <br></br><br></br>
                            - You have the right to request that we correct any Personal Information you believe
                            is inaccurate. You also have the right to request us to complete the Personal
                            Information you believe is incomplete.   <br></br><br></br>
                            - You have the right to request the erasure of your Personal Information under
                            certain conditions of this Policy.   <br></br><br></br>
                            - You have the right to object to our processing of your Personal Information.   <br></br><br></br>
                            - You have the right to seek restrictions on the processing of your Personal
                            Information. When you restrict the processing of your Personal Information, we may
                            store it but will not process it further.   <br></br><br></br>
                            - You have the right to be provided with a copy of the information we have on you in
                            a structured, machine-readable and commonly used format.   <br></br><br></br>
                            - You also have the right to withdraw your consent at any time where BeyondLife
                            relied on your consent to process your Personal Information.   <br></br><br></br>
                            You have the right to complain to a Data Protection Authority about our collection
                            and use of your Personal Information. For more information, please contact your
                            local data protection authority in the European Economic Area (EEA).   <br></br><br></br>
                            Privacy Notice For Mexico   <br></br>
                            Más Allá de la Vida, S.A.P.I. de C.V., addressed at Calle 19 Tablaje 14754,
                            Xcanatún, Mérida, Yucatán, México, C.P. 97302, is responsible of the use and
                            protection of your Personal Information, and in this sense we inform you the
                            following:   <br></br><br></br>
                            For what purposes will we use your Personal Information?   <br></br><br></br>
                            The Personal Information that we collect from you will be used for the following
                            purposes that are necessary for the BeyondLife Functions you request:   <br></br><br></br>
                            - Create and manage user accounts   <br></br><br></br>
                            - Deliver BeyondLife Functions   <br></br><br></br>
                            - Comply with your posthumous will, in accordance with the BeyondLife Functions
                            and your decisions within the BeyondLife (app)   <br></br><br></br>
                            - Improve BeyondLife Functions   <br></br><br></br>
                            Please note that some of the information we collect from you may be used for
                            secondary purposes as follows:   <br></br><br></br>
                            - Send marketing and promotional communications.   <br></br><br></br>
                            - Respond to inquiries and offer support.   <br></br><br></br>
                            - Request user feedback.   <br></br><br></br>
                            - Improve the user experience we offer.   <br></br><br></br>
                            - Deliver targeted advertising.   <br></br><br></br>
                            - Enforce terms and conditions and policies.   <br></br><br></br>
                            - Protect from abuse and malicious users.   <br></br><br></br>
                            What Personal Information will we use for these purposes?   <br></br><br></br>
                            To carry out the purposes described in this privacy notice, we will use the following
                            Personal Information:   <br></br><br></br>
                            Full Name
                            Domicile
                            Email
                            Phone number
                            Details of pay of the Credit/Debit cards
                            With whom do we share your Personal Information and for what purposes?
                            We inform you that your Personal Information is shared within and outside the
                            country with the following people, companies, organizations or authorities other than
                            us, for the following purposes:
                            - Create and manage user accounts
                            - Deliver BeyondLife Functions
                            - Comply with your posthumous will, in accordance with the BeyondLife Functions
                            and your decisions within the BeyondLife (app)
                            - Improve BeyondLife Functions
                            How can you access, rectify or cancel your personal data, or oppose its use?
                            You have the right to know what Personal Information we have about you, what we
                            use them for and the conditions of use that we give them (Access). Likewise, it is
                            your right to request the correction of your Personal Information if it is outdated,
                            inaccurate or incomplete (Rectification); that we remove it from our records or
                            databases when it considers that it is not being used properly (Cancellation); as well
                            as to oppose the use of your Personal Information for specific purposes (Opposition).
                            These rights are known as ARCO rights.
                            For the exercise of any of the ARCO rights; revoke your consent; and/or limit the use
                            and disclosure of your Personal Information, you must submit the respective request
                            through the following means:
                            By mailing to contact@beyondlife.com, there they can provide you with an email
                            account to send us your request.
                            In relation to the procedure and requirements for the exercise of your ARCO rights,
                            we inform you of the following:
                            A) Through what means can the owner and, where appropriate, his representative,
                            as well as the personality of the latter, prove their identity?
                            By email, contact@beyondlife.com.
                            B) What information and / or documentation must the application contain?
                            Owner's Name
                            Domicile and email
                            ID Copy
                            Clear and precise description of the Personal Information with respect to which one
                            seeks to exercise any of the ARCO rights.
                            C) In how many days will we respond to your request?
                            We inform you that the determination adopted will be notified to you within a
                            maximum period of 20 (twenty) business days, counted from the date on which you
                            comply with all the requirements established in the request for access, rectification,
                            cancellation or opposition, so that, if appropriate, it becomes effective within 15
                            (fifteen) business days following the date of said notification.
                            D) By what means will we communicate the response to your request?
                            Through the email that will be provided by telephone at the request of the individual.
                            E) In what media can the Personal Information that you request be reproduced?
                            Copies or scanned images.
                            The contact details of the Personal Information department, which is in charge of
                            processing the ARCO rights requests, are the following:
                            i. Name: Osvaldo Velázquez
                            ii. Address: Calle 19 Tablaje 14754, Xcanatún, Mérida, Yucatán, México, C.P. 97302.
                            iii. Email: contact@beyondlife.com
                            You can revoke the consent that, where appropriate, you have given us for the
                            processing of your Personal Information. However, it is important that you
                            acknowledge that not in all cases we will be able to respond to your request or
                            terminate the use immediately, since it is possible that due to some legal obliga.
                            Likewise, you should consider that, for certain purposes, the revocation of your
                            consent will imply that we cannot continue to provide the service you requested, or
                            the conclusion of your relationship with us.
                            Personal Information Protection Authority
                            In Mexico, if you consider it necessary, we inform you that you have the right to
                            assist the National Institute of Transparency Access to Information and Protection of
                            Personal Data (INAI) to assert any disagreement related to your right to the
                            protection of Personal Information.
                            How can you know the alterations in this privacy notice?
                            This privacy notice may undergo modifications, changes or updates derived from
                            new legal requirements; of our own needs for the products or functions we offer; of
                            our privacy practices; Changes in our business model, or other causes.
                            We reserve the right to make modifications or updates to this Privacy Notice at any
                            time, with the understanding that any modification to it will be made known to you by
                            publishing a notice on BeyondLife (app), therefore we recommend verifying it
                            frequently.   <br></br><br></br>
                            Acceptance   <br></br>
                            By using BeyondLife Functions or the BeyondLife (app), you agree that you have
                            read this document and that BeyondLife carries out the processing of your Personal
                            Information for the purposes indicated in this Privacy Notice.   <br></br><br></br>
                            California privacy rights   <br></br>
                            In addition to the rights as explained in this Policy, California residents who provide
                            Personal Information (as defined in the statute) to obtain products or BeyondLife
                            Functions for personal, family, or household use are entitled to request and obtain
                            from us, once a calendar year, information about the Personal Information we
                            shared, if any, with other businesses for marketing uses. If applicable, this
                            information would include the categories of Personal Information and the names and
                            addresses of those businesses with which we shared such personal information for
                            the immediately prior calendar year (e.g., requests made in the current year will
                            receive information about the prior year). To obtain this information please contact
                            us.   <br></br><br></br>
                            How to exercise these rights   <br></br>
                            Any requests to exercise your rights can be directed to BeyondLife through the
                            contact details provided in this document. Please note that we may ask you to verify
                            your identity before responding to such requests. Your request must provide
                            sufficient information that allows us to verify that you are the person you are claiming
                            to be or that you are the authorized representative of such person. You must include
                            sufficient details to allow us to properly understand the request and respond to it. We
                            cannot respond to your request or provide you with Personal Information unless we
                            first verify your identity or authority to make such a request and confirm that the
                            Personal Information relates to you.   <br></br><br></br>
                            Privacy of children   <br></br>
                            We do not knowingly collect any Personal Information from children under the age of
                            18. If you are under the age of 18, please do not submit any Personal Information
                            through the BeyondLife (app) and BeyondLife Functions. We encourage parents and
                            legal guardians to monitor their children's Internet usage and to help enforce this
                            Policy by instructing their children never to provide Personal Information through the
                            BeyondLife (app) and BeyondLife Functions without their permission. If you have
                            reason to believe that a child under the age of 18 has provided Personal Information
                            to us through the BeyondLife (app) and BeyondLife Functions, please contact us.
                            You must also be at least 18 years of age to consent to the processing of your
                            Personal Information in your country (in some countries we may allow your parent or
                            guardian to do so on your behalf).   <br></br><br></br>
                            Advertisements   <br></br>
                            We may permit certain third party companies to help us tailor advertising that we
                            think may be of interest to users and to collect and use other data about user
                            activities on the BeyondLife (app). These companies may deliver ads that might
                            place cookies and otherwise track user behavior.   <br></br><br></br>
                            Email marketing   <br></br>
                            We offer electronic newsletters to which you may voluntarily subscribe at any time.
                            We are committed to keeping your e-mail address confidential and will not disclose
                            your email address to any third parties except as allowed in the information use and
                            processing section or for the purposes of utilizing a third party provider to send such
                            emails. We will maintain the information sent via email in accordance with applicable
                            laws and regulations.   <br></br><br></br>
                            In compliance with the CAN-SPAM Act, all emails sent from us will clearly state who
                            the email is from and provide clear information on how to contact the sender. You
                            may choose to stop receiving our newsletter or marketing emails by following the
                            unsubscribe instructions included in these emails or by contacting us. However, you
                            will continue to receive essential transactional emails.   <br></br><br></br>
                            Links to other resources   <br></br>
                            The BeyondLife (app) and BeyondLife Functions contain links to other resources that
                            are not owned or controlled by us. Please be aware that we are not responsible for
                            the privacy practices of such other resources or third parties. We encourage you to
                            be aware when you leave the BeyondLife (app) and BeyondLife Functions and to
                            read the privacy statements of each and every resource that may collect Personal
                            Information.   <br></br><br></br>
                            Information security   <br></br>
                            We secure information you provide on computer servers in a controlled, secure
                            environment, protected from unauthorized access, use, or disclosure. We maintain
                            reasonable administrative, technical, and physical safeguards in an effort to protect
                            against unauthorized access, use, modification, and disclosure of Personal
                            Information in its control and custody. However, no data transmission over the
                            Internet or wireless network can be guaranteed. Therefore, while we strive to protect
                            your Personal Information, you acknowledge that (i) there are security and privacy
                            limitations of the Internet which are beyond our control; (ii) the security, integrity, and
                            privacy of any and all information and data exchanged between you and the
                            BeyondLife (app) and BeyondLife Functions cannot be guaranteed; and (iii) any such
                            information and data may be viewed or tampered with in transit by a third party,
                            despite best efforts.   <br></br><br></br>
                            Data breach   <br></br>
                            In the event we become aware that the security of the BeyondLife (app) and
                            BeyondLife Functions has been compromised or users Personal Information has
                            been disclosed to unrelated third parties as a result of external activity, including, but
                            not limited to, security attacks or fraud, we reserve the right to take reasonably
                            appropriate measures, including, but not limited to, investigation and reporting, as
                            well as notification to and cooperation with law enforcement authorities. In the event
                            of a data breach, we will make reasonable efforts to notify affected individuals if we
                            believe that there is a reasonable risk of harm to the user as a result of the breach or
                            if notice is otherwise required by law. When we do, we will post a notice on the
                            BeyondLife (app), send you an email, and mail you a letter.   <br></br><br></br>
                            Changes and amendments   <br></br>
                            We reserve the right to modify this Policy or its terms relating to the BeyondLife (app)
                            and BeyondLife Functions from time to time in our discretion and will notify you of
                            any material changes to the way in which we treat Personal Information. When we
                            do, we will revise the updated date at the bottom of this page. We may also provide
                            notice to you in other ways at our discretion, such as through contact information you
                            have provided. Any updated version of this Policy will be effective immediately upon
                            the posting of the revised Policy unless otherwise specified. Your continued use of
                            the BeyondLife (app) and BeyondLife Functions after the effective date of the revised
                            Policy (or such other act specified at that time) will constitute your consent to those
                            changes. However, we will not, without your consent, use your Personal Information
                            in a manner materially different from what was stated at the time your Personal
                            Information was collected.   <br></br><br></br>
                            Acceptance of this policy   <br></br>
                            You acknowledge that you have read this Policy and agree to all its terms and
                            conditions. By accessing and using the BeyondLife (app) and BeyondLife Functions
                            you agree to be bound by this Policy. If you do not agree to abide by the terms of this
                            Policy, you are not authorized to access or use the BeyondLife (app) and BeyondLife
                            Functions.   <br></br><br></br>
                            Contacting us   <br></br>
                            If you would like to contact us to understand more about this Policy or wish to
                            contact us concerning any matter relating to individual rights and your Personal
                            Information, you may send an email to contact@beyondlife.com or write a letter to
                            Calle 19 Tablaje 14754, Xcanatún, Mérida, Yucatán, México, C.P. 97302.

                        </p>

                        {/*  */}

                    </div>
                }

            </div>

            <div className="footer-back-privacidad">
                <h2>&copy; {moment().format('YYYY')} COPYRIGHT BEYOND LIFE</h2>
            </div>

        </div >
    )
}



export default Privacidad;