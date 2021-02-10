import '../../../styles/secondaryTitle.css'

export function SecondaryTitle ({props}) {
    return (
        <h1 className='text-center mb-4 secondaryTitle'><i>{props}</i></h1>
    )
}