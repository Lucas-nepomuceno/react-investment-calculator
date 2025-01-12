export default function UserInput({id, label, type, ...props}) {
  return (<p>
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} required {...props}/>
  </p>
    )
}
