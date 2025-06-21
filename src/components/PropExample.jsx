const PropExample = (props) => (
    <section>
        <h1>{props.title}</h1>
        <hr />
        <h2>Olá, {props.name}!</h2>
    </section>
)

export default PropExample;