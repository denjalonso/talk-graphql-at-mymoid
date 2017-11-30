import React from 'react';
import createTheme from 'spectacle-theme-nova';
import {
    Spectacle,
    Appear,
    BlockQuote,
    Cite,
    Code,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    List,
    ListItem,
    Magic,
    Quote,
    Slide,
    Text,
} from 'spectacle';
import 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'spectacle-theme-nova/syntax/prism-javascript';
import 'spectacle-theme-nova/syntax/prism.nova.css';
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.css';

const theme = createTheme('avon');

const Presentation = () => (
    <Deck transition={['zoom', 'slide']} theme={theme} transitionDuration={500}>
        <Slide transition={['zoom']} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
                /mymoid
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Only one endpoint</Text>
            {/**hablar objetivos de la charla y a quien va dirigida y porqué se ha diseñado así (modelo innovación startsups...)*/}
            {/** Damos por sentado que conocemos lo que vendemos*/}
            {/** Damos por sentado que sabemos lo que es un API*/}
            {/** Avisamos que la charla va sobre innovación en la parte tecnológica de compañía, en partes como REst*/}
        </Slide>
        <Slide
            onActive={slideIndex => {
                console.info(`Viewing slide index: ${slideIndex}.`); // eslint-disable-line no-console
            }}
            transition={[
                'fade',
                (transitioning, forward) => {
                    const angle = forward ? -180 : 180;
                    return {
                        transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `};
                }
            ]}
            bgColor="slategray"
        >
            <Image src={require('./images/kat.png')} margin="0px auto 40px" />
            <Heading size={2} caps fit textColor="primary" textFont="primary">
                Wait what?
            </Heading>
        </Slide>
        <Slide>
            <Heading size={3}>Only one endpoint</Heading>
            <Text>
                Graphql server <Code>exposes single endpoint</Code> which expresses the full set of capabilities of the
                service to responds to queries
            </Text>
            {/**This is in contrast to REST APIs which expose a suite of URLs each of which expose a single resource.
             While GraphQL could be used alongside a suite of resource URLs, this can make it harder to use with tools like GraphiQL*/}
        </Slide>
        <Slide bgImage={require('./images/mymoid-er-model.png')} bgDarken={0.75} transition={['slide']}>
            <Appear fid="1">
                <Heading size={1} caps fit textColor="primary">
                    Big domain logic
                </Heading>
            </Appear>
            <Appear fid="2">
                <Heading size={3} caps fit textColor="white">
                    How to map the logic from this model?
                </Heading>
            </Appear>
        </Slide>
        <Slide>
            {/**Solución actual*/}
            <Heading size={3}>Current solution</Heading>
            Rest has been a popular way to expose data from my server
            <List>
                <Appear><ListItem>
                    <Link href="https://cloud.google.com/apis/design/" title="Google cloud api"/>
                </ListItem></Appear>
                <Appear><ListItem>
                    <Link href="https://swagger.io/" title="Swagger"/>
                </ListItem></Appear>
            </List>
            {/**Conclusión: Necesitamos más flexibilidad (problemas versionado, hacer referencia a la slide ventajas/versionado)
             que la que nos provee rest para proyectar experiencias (gif guiñando el ojo después de leer la frase)*/}
            {/**-> como comentario a la frase: ¿Qué coño quiere decir esto?*/}

            {/**Cambio paradigma: ecosistema facebook*/}
            {/**Para dar soluciones no bastaba con usar los paradigmas actuales, hay que bajar a nivel de espicificación.*/}
            {/**Nombrar que esto es facil para una empresa con recursos como facebook, no tanto para una pequeña startup,
             deberíamos hacer lo mismo con las especificaciones de flujos de pago???? (integración pensando en la tecnología????)*/}
        </Slide>
        <Slide>
            <Heading size={2}>
                GraphQl at:
            </Heading>
            <img src={require('./images/mymoid-app-logo.png')} style={{ width: '170px' }} />
            <Heading
                size={4}
                textColor="orange"
                margin="40px 0 0 0"
            >
                Denis Alonso (@denjalonso)
            </Heading>
        </Slide>
        <Slide>
            <Heading size={3}>
                Qué es graphql?
            </Heading>
            <BlockQuote>
                A query language for your API.
                New api standard that was invented & opne-sourced by facebook
            </BlockQuote>
        </Slide>
        <Slide transition={['slide']}>
            <BlockQuote>
                <Quote>
                    Conjunto de abstracciones de diseño que permiten actuar
                    sobre los datos/recursos de forma declarativa (proyecciones).
                </Quote>
                <Cite>Denis Alonso</Cite>
            </BlockQuote>
        </Slide>
        <Slide>
            <Heading size={3}>
                A more efficient Alternative to REST
            </Heading>
            {/*Rest es adecuado para muchas aplicaciones, */}
            {/*sin embargo, el panorama de la API ha cambiado radicalmente en los últimos años, en particular, */}
            {/*hay tres factores que han desafiado la forma en que se diseñan las API:*/}

            <List>
                <ListItem>
                    Increased mobile usage creates need for efficient data loading
                    {/*(aumenta el uso de dispositivos móviles de baja potencia y redes descuidadas), graphql minimiza la cantidad de datos que necesitan ser transferidos*/}
                </ListItem>
                <ListItem>
                    Variety of different frontend frameworks and platforms
                    {/*El panorama heterogéneo de los frameworks frontend y las plataformas que ejecutan aplicaciones cliente hace que */}
                    {/*sea difícil crear y mantener una API que se ajuste a los requisitos de todos. */}
                    {/*Con GraphQL, cada cliente puede acceder con precisión a los datos que necesita.*/}
                </ListItem>
                <ListItem>
                    Fast development & expectation for rapid feature development
                    {/*Scrum + La integración continua y despliegue contínuo se han convertido en un estándar para muchas compañías, */}
                    {/*las iteraciones rápidas y las frecuentes actualizaciones de productos son indispensables. */}
                    {/*Con las API REST, la forma en que el servidor expone los datos a menudo debe modificarse para tener en cuenta */}
                    {/*los requisitos específicos y los cambios de diseño en el lado del cliente. */}
                    {/*Esto dificulta las prácticas de desarrollo rápidas y las iteraciones de productos.*/}
                </ListItem>
            </List>
        </Slide>
        <Slide>
            <Heading size={3}>
                GraphQL is the better REST:
            </Heading>
            <List>
                <ListItem>
                    Great ideas in rest: stateless servers & structured access to resources
                </ListItem>
                <ListItem>
                    Rest us a strict specification: but the concept was wildly interpreted {/*salvajemente interpretado*/}
                </ListItem>
                <ListItem>
                    Rapidly changing requeriments on client-side don't go well with the static nature of rest.
                </ListItem>
            </List>
        </Slide>
        <Slide transition={['slide']}>
            <Heading1>With GraphQL, you model your business domain as a graph</Heading1>
        </Slide>
        <Slide>
            <Heading size={4}>Thinking in graphs</Heading>
            <Image src={require('./images/bussines-graph-example-2.png')} />
        </Slide>
        <Slide>
            {/*Slide para expandir concepto declarativo*/}
            <Heading size={3}>
                Naming things is a hard but important part of building intuitive APIs
            </Heading>
            <Text>
                Think of your GraphQL schema as an expressive shared language for your team and your users,
                to build good schema examine the everyday language you use to describe your business
            </Text>
        </Slide>
        <Slide>
            <Heading size={4}>
                An exercise: For example, let's try to describe an payment order feature in plain spanish
            </Heading>
            <List>
                <Appear><ListItem>
                    <Text>
                        A user can create multiple payment order ids
                    </Text>
                </ListItem></Appear>
                <Appear><ListItem>
                    <Text>
                        Each payment order has a concept, reference, amount and expitation date
                    </Text>
                </ListItem></Appear>
                <Appear><ListItem>
                    <Text>
                        Users cannot send a payment orde without a concept, reference, amount and expitation date
                    </Text>
                </ListItem></Appear>
            </List>
        </Slide>
        <Slide bgColor="gray1">
            <Heading1 textColor="green">Fetch generated payment order is payed</Heading1>
            {/*<JSPane>*/}
                {/*{`*/}
    {/*paymentOrders {*/}
        {/*payed(shotCode: "KGQK12") {*/}
            {/*concept*/}
            {/*amout*/}
        {/*}*/}
    {/*}*/}
            {/*`}*/}
            {/*</JSPane>*/}
        </Slide>
        {/*<Slide>*/}
            {/*<Magic>*/}
                {/*<Slide><Heading>Specific query langage</Heading></Slide>*/}
                {/*<Slide><Heading>Graph query language</Heading></Slide>*/}
            {/*</Magic>*/}
        {/*</Slide>*/}
        <Slide>
            <Layout>
                <Fill>
                    <Image src={require('./images/facebook.png')} style={{ width: '50px' }} />
                </Fill>
                <Fill>
                    <Image src={require('./images/twitter.png')} style={{ width: '50px' }} />
                </Fill>
                <Fill><Image src={require('./images/coursera.png')} style={{ width: '50px' }} /></Fill>
                <Fill><Image src={require('./images/github.png')} style={{ width: '50px' }} /></Fill>
                <Fill><Image src={require('./images/intuit.png')} style={{ width: '50px' }} /></Fill>
                <Fill><Image src={require('./images/nyt.png')} style={{ width: '50px' }} /></Fill>
                <Fill><Image src={require('./images/pinterest.png')} style={{ width: '50px' }} /></Fill>
                <Fill><Image src={require('./images/shopify.png')} style={{ width: '50px' }} /></Fill>
            </Layout>
        </Slide>
        {/*<Slide>*/}
            {/*<Heading>*/}
                {/*Gif layers y flujo de datos graphql (como el de redux)*/}
                {/*el de la página de la docu oficial (mostrar como transitan los datos)*/}
            {/*</Heading>*/}
        {/*</Slide>*/}
        <Slide>
            <Heading size={4}>
                Data Fetching with REST(multiple EP) vs GraphQL (only one EP)
            </Heading>
            {/*An example, these could be /users/:id endpoint to fetch the initial user data. Secondly,*/}
            {/*there’s likely to be a /users/:id/posts endpoint that returns all the posts for a user.*/}
            {/*The third endpoint will then be the /users/:id/followers that returns a list of followers per user.*/}
            <Layout>
                <Fill><img src={require('./images/data-fetching-1.png')} style={{ width: '300px' }} /></Fill>
                <Fill>
                    {/*Qraphql = single query*/}
                    <img src={require('./images/data-fetching-2.png')} style={{ width: '300px' }} />
                </Fill>
            </Layout>
        </Slide>
        <Slide>
            <Heading1>
                GraphQL benefits
            </Heading1>
            <List>
                <Appear><ListItem>
                    <Text>No more Over- and Underfetching</Text>
                    {/*Overfetching: Downloading superfluous data (el cleinte se descarga más información de la que necesita, por ejemplo en un listado de usuario)*/}
                    {/*Underfetching and the n+1 problem (situación donde el cliente necesita una lista de elementos y luego necesita request adicionales por elemento para traer los datos requeridos)*/}
                </ListItem></Appear>
                <Appear><ListItem>
                    <Text>Rapid Product Iterations on the Frontend</Text>
                    {/*Un patrón comun en rest es diseñar la api en base a las vista de nuestra app, esto permite al cliente traer toda la
                    info necesario a mostrar desde el correspondiente endpoint, el fallo de este enfoque es que cada vez que la UI cambia
                    el backend necesita ser ajustado, esto no permite iteraciones de producto rápidas y mata la productividad.
                    Con GraphQL, este problema está resuelto. Gracias a la naturaleza flexible de GraphQL,
                    los cambios en el lado del cliente se pueden realizar sin ningún trabajo adicional en el servidor.
                    Dado que los clientes pueden especificar sus requisitos de datos exactos,
                    ningún ingeniero de back-end necesita hacer ajustes cuando el diseño y las necesidades de datos en el frontend cambian.*/}
                </ListItem></Appear>
                <Appear><ListItem>
                    <Text>Insightful Analytics on the Backend</Text>
                    {/*facil análisis del uso de los datos, como los clientes piden lo que quieren es facil ver que campos estan deprecated*/}
                </ListItem></Appear>
                <Appear><ListItem>
                    <Text>Benefits of a Schema & Type System</Text>
                    {/*Este esquema sirve como el contrato entre el cliente y el servidor
                    * para definir cómo un cliente puede acceder a los datos. Se eliminan los problemas de sincronización entre
                    * front y back, los equipos pueden trabajar de forma independiente*/}
                </ListItem></Appear>
            </List>
        </Slide>
        <Slide>
            <Heading1>
                URIs, Routes
            </Heading1>
            <Text>
                HTTP is commonly associated with REST, which uses "resources" as its core concept.
                In contrast, GraphQL's conceptual model is an entity graph. As a result, entities in GraphQL are not identified by URLs.
                Instead, a GraphQL server operates on a single URL/endpoint, usually /graphql (/mymoid), and all GraphQL requests for a given service should be directed at this endpoint.
            </Text>
        </Slide>
        <Slide>
            <BlockQuote>
                <Quote>
                    “Think in graphs, not endpoints.” Lessons From 4 Years of GraphQL
                </Quote>
                <Cite>by Lee Byron, GraphQL Co-Inventor.</Cite>
            </BlockQuote>
        </Slide>
        <Slide>
            <Heading>
                Rest is died???
            </Heading>
        </Slide>
        <Slide>
            <Heading size={3} textColor={'red'}>
                Error 1!!!!
            </Heading>
            <Text>Hybrid model</Text>
            {/*rest es una especificación que implementa una solución sobre http y graphql tb.*/}
            {/*Cree su esquema GraphQL para expresar "qué" en lugar de "cómo".
            Luego puede mejorar los detalles de su implementación sin romper la interfaz con clientes más antiguos.*/}
            {/*Prefiero trabajar con un esquema que define como los cleintes usan los datos en lugar*/}
            {/*de mapear un esquema de bbdd legacy en la lógica rest*/}
        </Slide>
        <Slide>
            <Heading>
                QraphQl depende de una tecnología???
            </Heading>
        </Slide>
        <Slide>
            <Heading size={3} textColor={'red'}>
                Error 2!!!!
            </Heading>
            <List>
                <ListItem>
                    <Link href="http://graphql.org/code/" title="Backend integrations"/>
                </ListItem>
                <ListItem>
                    <Link href="http://graphql.org/graphql-js/graphql-clients/" title="Frontend integrations"/>
                </ListItem>
            </List>
        </Slide>
        <Slide>
            <Heading size={3}>
                Interaction model
            </Heading>
            <Layout>
                <Fill>
                    <Heading size={4}>Single</Heading>
                    {/*A standard greenfield architecture with one GraphQL server that connects to a single database.*/}
                    <Image src={require('./images/architech-1.png')} />
                </Fill>
                <Fill>
                    {/*GraphQL layer that integrates existing systems*/}
                    {/*Hybrid approach with connected database and integration of existing system (Two last union)*/}
                    <Heading size={4}>Hybrid</Heading>
                    <Image src={require('./images/architech-3.png')} />
                </Fill>
            </Layout>


        </Slide>
        {/*<Slide>*/}
            {/*Abstracciones de diseño, modelo datos tanto desde front como desde back (variables en strings, formatos de fecha), tratamiento de errores, buenas prácticas, lenguage-agnostic ...*/}
            {/*Scalar coercion-> si quieres imlementar esto  mano, tienes que crear los enum y lo checker. Te abstrae de esto (esto quizás vaya en otra slide más relacionada con la definición del lenguaje)*/}
        {/*</Slide>*/}
        <Slide>
            <Heading>
                Express or Java or ...
            </Heading>
            <Image src={require('./images/app-server-schema.png')}/>
        </Slide>
        <Slide>
            <Heading1>Vamos a cocinar!!!!!!</Heading1>
            <Link href="https://github.com/denjalonso/graphql-training" title="graphql-training"/>
        </Slide>
        <Slide>
            <BlockQuote>
                Ask for what you need, (declarative data fetching)
                get exactly that,
                nothing more and nothing less
            </BlockQuote>
            {/*<JSPane>*/}
            {/*{*/}
            {/*hero {*/}
            {/*name*/}
            {/*height*/}
            {/*mass*/}
            {/*}*/}
            {/*}*/}

            {/*{*/}
            {/*"hero": {*/}
            {/*"name": "Luke Skywalker",*/}
            {/*"height": 1.72,*/}
            {/*"mass": 77*/}
            {/*}*/}
            {/*}*/}
            {/*</JSPane>*/}
        </Slide>
        <Slide>
            <Heading size={3}>Advantages:</Heading>
            <List>
                <ListItem>
                    GraphQL traverse related objects and their fields, letting clients fetch lots of related data in one request.
                </ListItem>
                <ListItem>
                    In Rest you can only pass a single set of arguments,
                    {/*In a system like REST, you can only pass a single set of arguments -
                    the query parameters and URL segments in your request. But in GraphQL, every field and nested object
                    can get its own set of arguments, making GraphQL a complete replacement for making multiple API fetches.
                    You can even pass arguments into scalar fields, to implement data transformations once on the server,
                    instead of on every client separately.*/}
                </ListItem>
                <ListItem>
                    Mutation and query in one request
                    {/*Mutaciones: Observe cómo el campo createReview devuelve los campos de estrellas y comentarios de la */}
                    {/*revisión recién creada. Esto es especialmente útil cuando se mutan datos existentes, por ejemplo, */}
                    {/*al incrementar un campo, ya que podemos mutar y consultar el nuevo valor del campo con una solicitud.*/}
                </ListItem>
                <ListItem>Query parallel execution</ListItem>
            </List>
        </Slide>
        <Slide>
            <Heading size={3}>Schemas => restrictions!!!</Heading>
            <Text>Set of types which completely describe the set of possible data you can query</Text>
        </Slide>
        <Slide>
            <Heading size={3}>Subscriptions: Event-based realtime functionality</Heading>
            {/*Killer feature!!!!! */}
            Unlike queries and mutations that follow a typical “request-response-cycle”, subscriptions represent a stream of data sent over to the client.
            {/*https://www.howtographql.com/basics/2-core-concepts/*/}
        </Slide>
        <Slide>
            <Heading size={3}>Mymoid => Y la seguridad??</Heading>
            <Text>Delegate authorization logic to the business logic layer</Text>
        </Slide>
        <Slide>
            <Heading1>Versioning</Heading1>
            <Text>Killer feature!!!!</Text>
            {/** Si bien no hay nada que impida que un servicio GraphQL sea versionado como cualquier otra API REST, */}
            {/*GraphQL proporciona las herramientas para la evolución continua de un esquema GraphQL.*/}

            {/** ¿Por qué la mayoría de las API tienen una versión? Cuando hay un control limitado sobre los datos que se */}
            {/*devuelven desde un punto final API, cualquier cambio puede considerarse un cambio radical, */}
            {/*y los cambios bruscos requieren una nueva versión. Si agregar nuevas características a una API requiere una nueva versión, */}
            {/*entonces surge una compensación entre la publicación a menudo y la existencia de muchas versiones incrementales en comparación con la comprensibilidad y la facilidad de mantenimiento de la API.*/}

            {/*En contraste, GraphQL solo devuelve los datos que se solicitan explícitamente, por lo que se pueden agregar nuevas capacidades a través de nuevos tipos y nuevos campos en esos tipos sin crear un cambio radical. Esto ha llevado a una práctica común de evitar siempre los cambios y servir una API sin versión.*/}
        </Slide>
        {/*<Slide>*/}
            {/*<GraphiQL fetcher={graphQLFetcher} />*/}
        {/*</Slide>*/}
        <Slide>
            <Heading1>Tutos:</Heading1>
            <List>
                <ListItem><Link href="http://graphql.org/graphql-js/" title=""/></ListItem>
                <ListItem><Link href="https://www.howtographql.com" title=""/></ListItem>
            </List>
        </Slide>
        <Slide>
            Como última slide compartir un proyecto graphql en el que abordar la casuística formulario de pago con graphql e invitar a los chicos a contrbuir justo antes de la charla en yn fork sobre Technoactivity
        </Slide>
        <Slide>
            <Heading1>Thanks</Heading1>
            <Heading1>
                <Link href="http://twitter.com/denjalonso" title="@denjalonso"/>
            </Heading1>
            <List>
                <ListItem><Link href="https://github.com/denjalonso/graphql-training"/></ListItem>
                <ListItem><Link href="https://github.com/denjalonso/talk-graphql-at-mymoid"/></ListItem>
                <ListItem><Link href="https://github.com/denjalonso/talk-graphql-at-mymoid-code"/></ListItem>
            </List>
        </Slide>
    </Deck>
);

const Heading1 = props => <Heading size={2} textColor="primary" {...props} />;

const JSPane = ({ children }) => (
    <CodePane textSize="1.5rem" lang="javascript" source={children} />
);
const Link = ({ href, title }) => (
    <a href={href} target="_blank">
        {title || href}
    </a>
);

function graphQLFetcher(graphQLParams) {
    return fetch(window.location.origin + '/graphql', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(graphQLParams),
    }).then(response => response.json());
}

export default Presentation;