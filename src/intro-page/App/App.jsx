import InfoText from '../InfoText/InfoText'
import Form from '../Form/Form'
import './App.css'

const App = () => {
    return(
        <>
        <main>
            <InfoText 
            title='Learn to code by
            watching others'
            text='See how experienced developers solve problems in real-time.
            Watching scripted tutoriais is great, but understanding how developers think is invaluable.
            '
            />
        <Form />
        </main>
        </>
    )
}

export default App