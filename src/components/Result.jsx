export default function Result({countCorrectAnswers}){
    return (
        <>
            <p>
                You got <strong>{countCorrectAnswers}</strong> correct!
            </p>
            <p>Thank You for playing!</p>
        </>
    )
}