
import React from 'react'
import PetForm from './../pet/PetForm';
import { useNavigate } from 'react-router-dom';
import styles from './NewPet.module.css'

const NewPet = () => {

    const navigate = useNavigate();

    const createPost = (pet) =>{

        fetch("https://petsho-api.herokuapp.com/api/pets", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(pet)
        })
        .then((res) => res.json())
        .then((data) => {
            //redirect
            navigate('/pets')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className={styles.pet_container}>
        <h3>Adicionar novo PET</h3>
        <p>Preencha todo o formulário para adicionar o novo pet</p>
        <PetForm handleSubmit={createPost} btnText="Adicionar PET"/>
    </div>
  )
}

export default NewPet