import styles from './input.module.css'

export function Input({type, placeholder,value, onChange }){
    return(
        <input
            type={type}
            placeholder={placeholder}
            // fizemos uma propiedade pq nao vai ser sempre o mesmo placeholder...
            // ai eu posso reutilizar!
            value={value}
            onChange={onChange}
            className={styles.inputStyle}
        />
    )
}
