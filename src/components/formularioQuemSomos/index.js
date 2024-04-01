import { useForm } from "react-hook-form";
import { isEmail, isMobilePhone } from "validator";
import { sendContactForm } from "./../../lib/api";
import styles from "./formularioQuemSomos.module.css"
import { FaRegComment, FaRegEnvelope, FaHome } from "react-icons/fa";
import Image from 'next/image'



function formatPhoneNumber(value) {
  // Remove todos os caracteres que não são números
  const numericValue = value.replace(/\D/g, '');
  
  // Aplica a formatação
  let formattedValue = '';
  if (numericValue.length >= 1) {
    // let teste = (11-1).toString() +${resto} <- embaixo
    formattedValue += `(${numericValue.slice(0, 2)}`;
  }
  if (numericValue.length >= 3) {
    formattedValue += `) ${numericValue.slice(2, 7)}`;
  }
  if (numericValue.length >= 7) {
    formattedValue += `-${numericValue.slice(7, 11)}`;
  }
  
  return formattedValue;
}

function allowToEnterPhoneNumber(event) {
  const charCode = event.keyCode || event.which;

  // Permite backspace
  if (charCode === 8) {
    return true;
  }

  const currentValue = event.target.value;
  const formattedValue = formatPhoneNumber(currentValue + String.fromCharCode(charCode));

  // Atualiza o valor do input field com o numero de celular formatado
  event.target.value = formattedValue;

  // Impede o comportamento padrão
  event.preventDefault();
}



function formatSemester(value) {
  // Remove todos os caracteres que não são números
  const numericValue = value.replace(/\D/g, '');

  // Aplica a formatação
  let formattedValue = '';
  if (numericValue.length >= 1) {
    formattedValue += `${numericValue.slice(0, 4)}`;
  }
  if (numericValue.length >= 5) {
    formattedValue += `/${numericValue.slice(4, 5)}`;
  }

  return formattedValue;
}

function allowToEnterSemester(event) {
  const charCode = event.keyCode || event.which;

  // Permite backspace
  if (charCode === 8) {
    return true;
  }

  const currentValue = event.target.value;
  const formattedValue = formatSemester(currentValue + String.fromCharCode(charCode));

  // Atualiza o valor do input field com o semestre formatado
  event.target.value = formattedValue;

  // Impede o comportamento padrão
  event.preventDefault();
}


export default function formularioQuemSomos(forms) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await sendContactForm(data);
      // reset() seria melhor
      document.getElementById("nome").value = "";
      document.getElementById("email").value = "";
      document.getElementById("curso").value = "";
      document.getElementById("celular").value = "";
      document.getElementById("semestre").value = "";
      document.getElementById("assunto").value = "";
      document.getElementById("mensagem").value = "";
    } catch (error) {
    }
  }

  return(
    <div className={styles.mainContainer}>
      <div className={styles.logo}>
        <Image
          src={forms.logo}
          width={150}
          height={150}
        />
      </div>
      <h2 className={styles.title}>
        {forms.tituloServicos}
      </h2>
      <div className={styles.formAndContact}>
        <div className={styles.formContainer}>
          <div className={styles.mediumField}>
            <input
              className={errors?.name && styles.input_error}
              id="nome"
              type="text"
              placeholder="Nome*"
              {...register("nome", {
                required: true
              })}
            />
            {errors?.nome?.type === "required" && (
              <p className={styles.error_message}>Campo obrigatório</p>
            )}
          </div>
          <div className={styles.doubleInput}>
            <div className={styles.smallField}>
              <input
                className={errors?.email && styles.input_error}
                id="email"
                type="email"
                placeholder="E-mail*"
                {...register("email", {
                  required: true,
                  validate: (value) => isEmail(value),
                })}
              />
              {errors?.email?.type === "required" && (
                <p className={styles.error_message}>Campo obrigatório.</p>
              )}
              {errors?.email?.type === "validate" && (
              <p className={styles.error_message}>Email inválido</p>
              )}
            </div>
            <div className={styles.smallField}>
              <input
                  className={errors?.name && styles.input_error}
                  id="curso"
                  type="text"
                  placeholder="Curso*"
                  {...register("curso", {
                    required: true
                  })}
                />
                {errors?.curso?.type === "required" && (
                  <p className={styles.error_message}>Campo obrigatório</p>
                )}
            </div>
          </div>
          <div className={styles.doubleInput}>
            <div className={styles.smallField}>
              <input
                id="celular"
                maxLength="14"
                type="text"
                onKeyDown={(event) => allowToEnterPhoneNumber(event)}
                className={errors?.name && styles.input_error}
                placeholder="Celular*"
                {...register("celular", {
                  required: true,
                  validate: (value) => isMobilePhone(value, 'pt-BR'),
                })}
              />
              {errors?.celular?.type === "required" && (
                <p className={styles.error_message}>Campo obrigatório</p>
              )}
              {errors?.celular?.type === "validate" && (
                <p className={styles.error_message}>Número inválido.</p>
              )}
            </div>
            <div className={styles.smallField}>
              <input
                className={errors?.name && styles.input_error}
                id="semestre"
                maxLength="7"
                type="text"
                onKeyDown={(event) => allowToEnterSemester(event)}
                placeholder="Semestre*"
                {...register("semestre", {
                  required: true,
                  validate: (value) => /^\d{4}\/\d$/.test(value)
                })}
              />
              {errors?.semestre?.type === "required" && (
                <p className={styles.error_message}>Campo obrigatório</p>
              )}
              {errors?.semestre?.type === "validate" && (
                <p className={styles.error_message}>Semestre inválido.</p>
              )}
            </div>
          </div>
          <div className={styles.mediumField}>
            <input
              className={errors?.name && styles.input_error}
              id="assunto"
              type="text"
              placeholder="Assunto*"
              {...register("assunto", {
                required: true
              })}
            />
            {errors?.assunto?.type === "required" && (
              <p className={styles.error_message}>Campo obrigatório</p>
            )}
          </div>
          <div className={styles.largeField}>
            <textarea
              className={errors?.name && styles.input_error}
              id="mensagem"
              type="text"
              placeholder="Sua mensagem"
              {...register("mensagem", {
                required: false
              })}
            />
          </div>
          <div className={styles.mediumField}>
            <button onClick={() => handleSubmit(onSubmit)()}>Enviar</button>
          </div>
        </div>
        <div className={styles.contactContainer}>
          <p className={styles.contactRows}>
            <FaRegComment  size={30} className={styles.icons}/>
            {forms.celular}
          </p>
          <p className={styles.contactRows}>
            <FaRegEnvelope size={30} className={styles.icons}/>
            {forms.email}
          </p>
          <p className={styles.contactRows}>
            <FaHome size={30} className={styles.icons}/>
            {forms.endereco1} 
          </p>
          <p className={styles.contactRows}>
            <FaHome size={30} className={styles.icons}/>
            {forms.endereco1} 
          </p>
        </div>
      </div>
    </div>
  );
};