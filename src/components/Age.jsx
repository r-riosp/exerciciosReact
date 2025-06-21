const Age = ({ age }) => (
    <section>
        <h1>Verificador de Idade!</h1>
        <hr />
        {!age && <p>Por favor, clique no botão "Verificar Idade".</p>}
        {age && <h2>Você tem {age} anos.</h2>}
        {age && <p>{age > 17 && age < 101 ? "Você é maior de idade." : age > 100 ? "Tem certeza?" : "Você é menor de idade."}</p>}
    </section >
)

export default Age;